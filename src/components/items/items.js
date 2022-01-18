import { useState, useEffect } from "react"
import { CardItem } from "../"

const Items = () => {
  const [ loading, setLoading ] = useState(false)
  const [ items, setItems ] = useState(null)
  const [ page, setPage ] = useState(1)

  const handleNext = () => {
    if (page < parseInt(items?.length / 10)) {
      setPage(page + 1)
    }
  }

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  useEffect(() => {
    setLoading(true)

    fetch('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list?limit=20')
      .then((response) => response.json())
      .then((data) => {
        setItems(data)
        setLoading(false)
      })
  }, [page])

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  if (!items?.length) {
    return (
      <h2>
        No items available.
      </h2>
    )
  }
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {items.slice(0, 10).map((item, index) => (
          <CardItem key={index} image="https://source.unsplash.com/1600x900/?nature,photography,technology" />
        ))}
      </div>
      <div className="flex justify-center md:justify-end items-center space-x-1 mt-4">
        <button 
          type="button" 
          className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <div className="px-3 text-gray-500 text-md">
          Page {page} of {parseInt(items?.length / 10)}
        </div>
        <button 
          type="button" 
          className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Items