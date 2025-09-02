import Theme from "./components/Bai2/Theme"
import FormBasic from "./components/FormBasic"
import KeyTracker from "./components/KeyTracker"
import LoginForm from "./components/LoginForm"
import RandomQuote from "./components/RandomQuote"
import RenderCounter from "./components/RenderCounter"
import ScrollToSection from "./components/ScrollToSection"
import ShoppingCart from "./components/ShoppingCart"


function App() {

  return (
    <>
      <ShoppingCart/>
      <hr />
      <Theme/>
      <hr />
      <RenderCounter/>
      <hr />
      <FormBasic/>
      <hr />
      <RandomQuote/>
      <hr />
      <KeyTracker/>
      <hr />
      <ScrollToSection/>
      <hr />
      <LoginForm/>
    </>
  )
}

export default App

