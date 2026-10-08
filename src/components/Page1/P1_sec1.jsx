import { Photos } from "../../Photos";
import "../Page1/P1_sec1.scss"
export default function P1_sec1(){
    return(
        <>
            <section className="P1_sec1">
                <div className="container">
                    <div className="cont_rest">
                        <div className="c">
                            <button className="rest">Restauran</button>
                            <h2>Italian<br/>
                                Cuisine
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                elit. Sodales senectus dictum arcu sit tristique<br/>
                                donec eget.
                            </p>
                            <div className="buts">
                                <button className="but1">Order now</button>
                                <button className="but2">Reservation</button>
                            </div>
                        </div>
                        <div>
                            <img src={Photos.D1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}