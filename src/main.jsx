import { React } from "react"
import { createRoot } from "react-dom/client"
import "./style.css"
const root = document.getElementById("root")
import Header from "./components/Header"
import Hero from "./components/Hero"
createRoot(root).render(
  <div>
    {/* <Header /> */}
    <Hero />
    {/* <Footer /> */}
  </div>

)


function Footer() {
  return <div className="bg-blue-500 py-10 text-center mt-10 ">
    <h1 className="text-4xl text-white">Built in React with Tailwind CSS</h1>
  </div>
}