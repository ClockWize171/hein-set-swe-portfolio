import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AnimateArrow from "./components/AnimateArrow";
import SkillBadge from "./components/SkillBadge";
import Contact from "./components/Contact";
import Footer from './components/Footer'
import { VStack } from "@chakra-ui/layout"

function App() {

  return (

    <VStack p={3} pt={4} id="home">
      <Navbar />
      <Intro />
      <AnimateArrow />
      <SkillBadge />
      <Contact />
      <Footer/>
    </VStack>

  );
}

export default App;
