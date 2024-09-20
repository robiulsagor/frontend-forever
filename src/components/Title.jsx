const Title = ({text1, text2}) => {
  return (
    <div className="gap-3 font-medium flex items-center">
        <p className="inline-block text-gray-400 uppercase">{text1} <span className="text-gray-800">{text2}</span> </p>
        <p className="inline-block -translate-y-[50%] w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#414141]"/>
    </div>
  )
}

export default Title 