import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Analyzer from "./components/home/Analyzer"

function App() {
  return (
    <>
      <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/journal' component={Blog} />
        <Route path='/analyzer' component={Analyzer} /> 
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
    </>
  )
}

export default App
