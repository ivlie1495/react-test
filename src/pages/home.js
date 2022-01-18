import { useState } from "react"
import { HiMenu } from "react-icons/hi"
import { AiFillCloseCircle } from "react-icons/ai"
import { Link, Route, Routes } from "react-router-dom"
import { SideBar, Container, User } from "../components"
import companyLogo from "../assets/company-logo.png"
import userLogo from "../assets/user-logo.png"

const Home = () => {
  const [ toggleSideBar, setToggleSideBar ] = useState(false)

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <SideBar setToggleSideBar={setToggleSideBar} />
      </div>
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenu fontSize={32} className="cursor-pointer" onClick={() => setToggleSideBar(true)} />
          <Link to="/">
            <img src={companyLogo} alt="logo" className="w-28" />
          </Link>
          <Link to="/user">
            <img src={userLogo} alt="logo" className="w-20" />
          </Link>
        </div>
        {toggleSideBar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSideBar(false)} />
            </div>
            <SideBar setToggleSideBar={setToggleSideBar} />
          </div>
        )}
      </div>
      <div className="pb-2 flex-1 h-screen overflow-y-scroll">
        <Routes>
          <Route path="/*" element={<Container />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home