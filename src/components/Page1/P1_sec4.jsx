import { Photos } from "../../Photos"
import "../Page1/P1_sec4.scss"
export default function P1_sec4(){
    return(
        <>
            <section className="P1_sec4">
                <div className="container">
                    <div className="contain">
                        <img src={Photos.D3} alt="" />
                        <div className="reserve">
                            <h2>Let's reserve <br/>
                                <span>a table</span>
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit. Facilisis ultricies at eleifend<br/>
                                proin. Congue nibh nulla malesuada<br/>
                                ultricies nec quam
                            </p>
                            <button>Reservation</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}