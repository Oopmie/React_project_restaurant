import { Photos } from "../../Photos";
import "../Page1/P1_sec2.scss"
export default function P1_sec2(){
    return(
        <>
            <section className="P1_sec2">
                <div className="container">
                    <div className="contain">
                        <div>
                            <img src={Photos.D2} alt="" />
                        </div>
                        <div className="well">
                            <h2>Welcome to<br/>
                                <span>delizioso</span>
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit. Facilisis ultricies at eleifend<br/>
                                proin. Congue nibh nulla malesuada<br/>
                                ultricies nec quam 
                            </p>
                            <div className="button">
                                <button className="but">See our menu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}