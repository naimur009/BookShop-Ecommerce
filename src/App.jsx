import BookList from "./components/Booklist/BookList"
import Category from "./components/category/Category"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/navbar/Navbar"
import PopularWriter from "./components/writer/PopularWriter"

function App() {
 

  return (
    <div className="overflow-x-hidden overflow-y-scroll no-scrollbar">
      <Navbar/> 
      <Hero/>
      <Category/>
      <PopularWriter/>
      <BookList/>
      <Footer/>
    </div>
  )
}

export default App
