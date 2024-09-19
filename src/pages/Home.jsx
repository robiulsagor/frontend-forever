import { Helmet } from "react-helmet"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forever - Home</title>
      </Helmet>
      
      <Hero/>
    </div>
  )
}

export default Home