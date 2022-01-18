const ItemDetail = () => {
  return (
    <div className="flex flex-col m-auto bg-white shadow-md rounded overflow-hidden">
      <div className="flex justify-center items-center flex-initial">
        <img 
          src="https://source.unsplash.com/1600x900/?nature,photography,technology" 
          alt="detail-pic" 
          className="w-full h-56 shadow-lg object-cover"
        />
      </div>
      <div className="w-full p-5 flex-1">
        <div>
          <h1 className="text-4xl font-bold mt-3">
            Title
          </h1>
          <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail