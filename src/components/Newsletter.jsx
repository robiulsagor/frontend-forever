const Newsletter = () => {
    const handleSubmit = e=> {
        e.preventDefault()

        alert("Subscribed!!")
    }
  return (
    <div className="py-12 text-center my-5">
        <p className="text-xl sm:text-2xl font-medium ">Subscribe now &amp; get 20% off </p>
        <p className="text-gray-400 mt-[10px] text-sm md:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, quod.</p>
        <form onSubmit={handleSubmit} className="border w-full sm:w-3/4 lg:w-1/2 mx-auto flex rounded-sm overflow-hidden mt-5">
            <input type="email" name="email" className="text-sm sm:text-base flex-1 pl-4 border-none outline-none" placeholder="Enter your email" required/>
            <button className="px-10 py-2 text-sm sm:text-base bg-black text-white uppercase hover:bg-slate-700 transition" type="submit">Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter