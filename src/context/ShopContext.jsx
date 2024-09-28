import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/product/list')
    if (res.data.success) {
      setProducts(res.data.products)
    }
  }

  const addToCart = (id, size) => {
    if (!size) {
      toast.error("Please select a size!", {
        containerId: "info"
      })
      return
    }

    let itemExists = false;

    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.size === size) {
        itemExists = true;
        toast.success("Item Incremented!")
        return { ...item, count: item.count + 1 };
      }
      return item;
    });

    if (!itemExists) {
      updatedCart.push({ id, size, count: 1 });
      toast.success("Item Added!")
    }

    // Update the cart state with the new items
    setCartItems(updatedCart);
  }

  const updateQuantity = (itemId, size, quantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId && item.size === size) {
        return { ...item, count: Number(quantity) }
      }
      return item
    })

    setCartItems(updatedCart)
    toast.success("Item incremented!")
  }

  const deleteItem = (itemId, size) => {
    const newItems = cartItems.filter(item => !(item.id === itemId && item.size === size))
    setCartItems(newItems)
    return newItems
  }

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, cartItem) => {
      // Find the product that matches the cart item id
      const product = products.find(product => product._id === cartItem.id);

      // If the product is found, add its price * count to the total
      return product ? total + (product.price * cartItem.count) : total;
    }, 0);

    return totalPrice;
  };

  useEffect(() => {
    fetchProducts()
  }, [])


  const currency = "$"
  const delivery_fee = 10
  const value = {
    products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart, updateQuantity, deleteItem, calculateTotalPrice, token, setToken
  }

  return (
    <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
  )
}

export default ShopContextProvider