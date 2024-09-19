const Title = ({text1, text2}) => {
  return (
    <div className="flex items-center justify-center gap-3  font-medium text-center text-2xl md:text-3xl">
        <p className="text-gray-400 uppercase">{text1} <span className="text-gray-800">{text2}</span> </p>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#414141]"/>
    </div>
  )
}

export default Title 