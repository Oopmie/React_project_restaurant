import { Link } from "react-router-dom"
import { Photos } from "../Photos"
import "../Header/header.scss"
export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <img src={Photos.Logo} alt="" />
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Page2'>Menu</Link></li>
                        <li><Link to='/Page3'>About us</Link></li>
                        <li><Link>Order online</Link></li>
                        <li><Link>Reservation</Link></li>
                        <li><Link>Contact us</Link></li>
                    </ul>
                    <div className="log">
                        <img src={Photos.Cart} alt="" />
                        <button>Log in</button>
                    </div>
                </nav>
            </header>
        </>
    )
}