const Modal = ({ setShowModal, setFilter, setReset, children }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
            <div className="flex items-center justify-between p-3 border-b border-solid rounded-t">
              <h3 className="text-2xl font-semibold">
                Filter
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-2xl leading-none font-semibold outline-none"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            <div className="relative p-3 flex-auto">
              {children}
            </div>
            <div className="flex items-center justify-end p-3 border-t border-solid rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none mr-1 mb-1"
                type="button"
                onClick={setReset}
              >
                Reset
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => {
                  setFilter(true)
                  setShowModal(false)
                }}
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Modal