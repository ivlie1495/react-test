import { useState, useEffect } from 'react'
import { CardItem, Chip, Modal } from '..'

const Search = ({ searchTerm }) => {
  const [ items, setItems ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [ openModal, setOpenModal ] = useState(false)
  const [ filterAreaSelected, setFilterAreaSelected ] = useState('')
  const [ filterSizeSelected, setFilterSizeSeleted ] = useState(false)
  const [ filterAreaOption, setFilterAreaOption ] = useState([])
  const [ filterSizeOption, setFilterSizeOption ] = useState([])
  const [ filterArea, setFilterArea ] = useState('')
  const [ filterSize, setFilterSize ] = useState('')
  const [ page, setPage ] = useState(1)

  const handleReset = () => {
    setFilterArea('')
    setFilterSize('')
  }

  const handleFilter = () => {
    setFilterAreaSelected(filterArea)
    setFilterSizeSeleted(filterSize)
  }

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
    fetch('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_size')
      .then((response) => response.json())
      .then((data) => setFilterSizeOption(data))

    fetch('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_area')
      .then((response) => response.json())
      .then((data) => setFilterAreaOption(data))
  }, [])

  useEffect(() => {
    setLoading(true)

    fetch('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list?limit=20')
      .then((response) => response.json())
      .then((data) => {
        setItems(data)
        setLoading(false)
      })
  }, [searchTerm, filterAreaSelected, filterSizeSelected, page])

  return (
    <div>
      {openModal && (
        <Modal setShowModal={() => setOpenModal(false)} setFilter={handleFilter} setReset={handleReset}>
          <div className="flex flex-col mb-3">
            <span className="mb-1">Select Area</span>
            <select 
              className="rounded w-full py-2 border cursor-pointer"
              onChange={(e) => setFilterArea(e.target.value)}
              value={filterArea}
            >
              <option disabled value="">Select Area</option>
              {filterAreaOption.map((item, index) => (
                <option key={index} value={`${item.province} - ${item.city}`}>{item.province} - {item.city}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mb-3">
            <span className="mb-1">Select Size</span>
            <select 
              className="rounded w-full py-2 border cursor-pointer"
              onChange={(e) => setFilterSize(e.target.value)}
              value={filterSize}
            >
              <option disabled value="">Select Size</option>
              {filterSizeOption.map((item, index) => (
                <option key={index} value={item.size}>{item.size}</option>
              ))}
            </select>
          </div>
        </Modal>
      )}
      <div>
        <div className="flex flex-col md:flex-row gap-2 mb-5">
          <Chip text="Select Your Filter" chipOnClick={() => setOpenModal(true)} />
          {filterAreaSelected && (
            <Chip text={`Area ${filterAreaSelected}`} onClickRemove={() => {
              setFilterArea('')
              setFilterAreaSelected('')
            }} />
          )}
          {filterSizeSelected && (
            <Chip text={`Size ${filterSizeSelected}`} onClickRemove={() => {
              setFilterSize('')
              setFilterSizeSeleted('')
            }} />
          )}
        </div>
        {loading && (
          <div>Loading...</div>
        )}
        {!loading && !items?.length && (
          <h2>No items available.</h2>
        )}
        {!loading && items?.length > 0 && (
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
        )}
      </div>
    </div>
  )
}

export default Search