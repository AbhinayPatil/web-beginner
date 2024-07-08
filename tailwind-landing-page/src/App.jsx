import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {
  
  return (
    <>
      <div className="bg-amber-100 min-h-screen w-full px-6 py-3 flex flex-col md:px-8 md:py-6 overflow-x-hidden">
       <Header />
       <Body />
       <Footer />
      </div>
    </>
  )
}

export default App
