import { Link } from "react-router-dom"

const CardItem = ({ image }) => {
  return (
    <Link to="/item-detail">
      <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
        <img className="w-full h-44" src={image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CardItem