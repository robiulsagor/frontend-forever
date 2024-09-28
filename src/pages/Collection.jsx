import { useContext, useEffect, useState } from "react"
import axios from "axios"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext"
import Product from "../components/Product"
import { assets } from "../assets/assets"

const Collection = () => {
  const [products, setProducts] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const { search, showSearch } = useContext(ShopContext)
  const [filterProducts, setFilterProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [sortType, setSortType] = useState('relevant')
  const [loading, setLoading] = useState(true)

  const toggleCategory = e => {
    if (categories.includes(e.target.value)) {
      setCategories(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategories(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = e => {
    if (subCategories.includes(e.target.value)) {
      setSubCategories(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategories(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (search && showSearch) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (categories.length > 0) {
      productsCopy = productsCopy.filter(item => categories.includes(item.category))
    }
    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter(item => subCategories.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  const sortProducts = () => {
    const fpCopy = filterProducts.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)))
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)))
        break;

      default:
        applyFilter()
    }

  }

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const res = await axios.get('http://localhost:5000/api/product/list')
      if (res.data.success) {
        setProducts(res.data.products)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [categories, subCategories, search, showSearch, products])

  useEffect(() => {
    sortProducts()
  }, [sortType])

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="flex flex-col sm:flex-row py-10 gap-10">
      {/* filter options */}
      <div className="sm:w-[250px]">
        <h2 className="uppercase text-xl mt-4 flex items-center gap-4 cursor-pointer sm:cursor-auto select-none" onClick={() => setShowFilter(prev => !prev)}>
          Filters
          <img src={assets.dropdown_icon} className="w-3 h-5 sm:hidden" alt="" /> </h2>

        <div className={`${showFilter ? "max-h-[400px]" : "max-h-0"} sm:max-h-[400px] overflow-hidden transition-all duration-300`} >

          {/* category filter */}
          <div className="border py-3 px-5 mt-6 ">
            <h3 className="uppercase font-medium mb-3 text-sm">categories</h3>

            <ul className="flex flex-col gap-1">
              <li>
                <input type="checkbox" onChange={toggleCategory} id="men" value={'Men'} />
                <label htmlFor="men" className="ml-2 font-light text-sm">Men</label>
              </li>
              <li>
                <input type="checkbox" onChange={toggleCategory} id="women" value={'Women'} />
                <label htmlFor="women" className="ml-2 font-light text-sm">Women</label>
              </li>
              <li>
                <input type="checkbox" onChange={toggleCategory} id="kids" value={'Kids'} />
                <label htmlFor="kids" className="ml-2 font-light text-sm">Kids</label>
              </li>
            </ul>
          </div>

          {/* type filter */}
          <div className="border py-3 px-5 mt-5">
            <h3 className="uppercase font-medium mb-3 text-sm">type</h3>

            <ul className="flex flex-col gap-1">
              <li>
                <input type="checkbox" onChange={toggleSubCategory} id="topwear" value={'Topwear'} />
                <label htmlFor="topwear" className="ml-2 font-light text-sm">Topwear</label>
              </li>
              <li>
                <input type="checkbox" onChange={toggleSubCategory} id="bottomwear" value={'Bottomwear'} />
                <label htmlFor="bottomwear" className="ml-2 font-light text-sm">Bottomwear</label>
              </li>
              <li>
                <input type="checkbox" onChange={toggleSubCategory} id="winterwear" value={'Winterwear'} />
                <label htmlFor="winterwear" className="ml-2 font-light text-sm">Winterwear</label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="flex-1">
        {/* top part */}
        <div className="text-base sm:text-xl md:text-2xl flex flex-row flex-wrap gap-y-3 justify-between items-center ">

          <Title text1={"All"} text2={"collections"}
          />

          <select name="" id="" className="text-sm border outline-none p-2 md:p-3"
            onChange={e => setSortType(e.target.value)}>
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* products part */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 gap-y-14 py-5">

          {!loading && filterProducts.length && filterProducts.map((item, index) => (
            <Product key={index} id={item._id} name={item.name} img={item.image} price={item.price} />
          ))}

          {loading ? (<div className="w-full h-full flex items-center justify-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-orange-400 border-b-transparent border-r-transparent border-l-transparent rounded-full" role="status">
              <span className="visually-hidden hidden">Loading...</span>
            </div>
          </div>) : filterProducts.length > 0 ? (filterProducts.map((item, index) => (
            <Product key={index} id={item._id} name={item.name} img={item.image} price={item.price} />
          ))) : (<div className="text-center text-xl font-light">No products found</div>)}
        </div>
      </div>
    </div>
  )
}

export default Collection