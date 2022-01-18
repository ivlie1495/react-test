import Label from "../label/label";

const ItemAdd = () => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-3">
        <Label text="Title" />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3"
          type="text" 
          placeholder="Enter your title" 
        />
      </div>
      <div className="mb-3">
        <Label text="Description" />
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 h-24"
          type="text" 
          placeholder="Enter your description" 
        ></textarea>
      </div>
      <div className="mt-3">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="button">
          Save
        </button>
      </div>
    </div>
  )
}

export default ItemAdd;