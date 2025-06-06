import './Header.css';
import { Link, NavLink } from 'react-router';
import Logo from '../assets/u4198439476_online_shop_logo_--ar_43_--v_6.1_976adb77-ee41-4320-b157-0ff6d3cc1b6e_1.png'
interface Props {}

function Header(props: Props) {
    const {} = props

    return (
        <header>
            <Link to="/" className="logo">
            <img src={Logo}/>
            <span>Shopping Cart</span>
            </Link>
            <nav className="navigation">
                <NavLink to="/" className="link">Home</NavLink>
                <NavLink to="/cart" className="link">Cart</NavLink>

            </nav>
            <Link to="/cart" className="items">
            <span>Cart: </span>
            </Link>
        </header>
    )
}

export default Header;
