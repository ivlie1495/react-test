import { NavLink, Link } from "react-router-dom"
import { menus } from '../../utils/data'
import logo from "../../assets/company-logo.png"

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black capitalize'
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black capitalize'

const SideBar = ({ setToggleSideBar }) => {
  const handleCloseSideBar = () => {
    if (setToggleSideBar) {
      setToggleSideBar(false)
    }
  }

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link to="/" className="flex px-5 gap-2 my-6 pt-1 w-190 items-center" onClick={handleCloseSideBar}>
          <img src={logo} alt="logo" className="w-52 h-11" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink 
            to="/" 
            className={({ isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
            onClick={handleCloseSideBar}
          >
            Home
          </NavLink>
          {menus.map((menu) => (
            <NavLink 
              key={menu}
              to={`/${menu}`}
              className={({ isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
              onClick={handleCloseSideBar}
            >
              {menu}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar