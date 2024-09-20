import { Helmet } from "react-helmet"
import Hero from "../components/Hero"
import LatestCollections from "../components/LatestCollections"
import BestSellers from "../components/BestSellers"
import OurServices from "../components/OurServices"
import Newsletter from "../components/Newsletter"

const Home = () => {
  return (
    <div>
      {/* helmet to use different title  */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forever - Home</title>
      </Helmet>
      
      <Hero/>
      <LatestCollections />
      <BestSellers />
      <OurServices />
      <Newsletter/>

    </div>
  )
}

export default Home