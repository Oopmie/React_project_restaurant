import { Link } from "react-router-dom"
import { Photos } from "../Photos"
import "../Footer/footer.scss"
export default function Footer(){
    return(
        <>
            <section className="footer">
                <div className="container">
                    <div className="contain">
                        <div className="col1">
                            <img className="logo" src={Photos.Logow} alt="" />
                            <p>Viverra gravida morbi egestas<br/>
                                facilisis tortor netus non duis<br/>
                                tempor.
                            </p>
                            <div className="links">
                                <img src={Photos.Twit} alt="" />
                                <img src={Photos.Inst} alt="" />
                                <img src={Photos.Fb} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <h2>Page</h2>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='Page2'>Menu</Link></li>
                                <li>Order online</li>
                                <li>Catering</li>
                                <li>Reservation</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h2>Information</h2>
                            <ul>
                                <li>About us</li>
                                <li>Testimonial</li>
                                <li>Event</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h2>Get in touch</h2>
                            <ul>
                                <li>3247 Johnson Ave, Bronx, NY<br/>
                                    10463, Amerika Serikat
                                </li>
                                <li>delizioso@gmail.com</li>
                                <li>+123 4567 8901</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="foot">
                    <p>Copyright 2022 Delizioso</p>
                </div>
            </section>
        </>
    )
}