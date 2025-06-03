
import {Link} from 'react-router-dom'; 
const Header = ()=>{
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
            </div>
            <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    <Link to='/'>Home</Link>
                </li>
                <li className="px-4">
                    <Link to='/grocery'>Grocery</Link>
                </li>
                <li className="px-4">
                    <Link to='/about'>About Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact US</Link>
                </li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}

export default Header;