import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Navbar, Items, Search, ItemAdd, ItemDetail } from "../../components"

const Container = () => {
  const [ searchTerm, setSearchTerm ] = useState('')

  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/search" element={<Search searchTerm={searchTerm} />} />
          <Route path="/add-item" element={<ItemAdd />} />
          <Route path="/item-detail" element={<ItemDetail />} />
        </Routes>
      </div>
    </div>
  )
}

export default Container