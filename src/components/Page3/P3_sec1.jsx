import { Photos } from "../../Photos";
import "../Page3/P3_sec1.scss"
export default function P3_sec1(){
    return(
        <>
            <section className="P3_sec1">
                <div className="container">
                    <div className="contain">
                        <img src={Photos.D4} alt="" />
                        <div className="first">
                            <h1><span>Our</span><br/>
                                restautant
                            </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit, sed do eiusmod tempor<br/>
                                incididunt ut labore et dolore magna<br/>
                                aliqua. Ut enim ad minim veniam, quis<br/>
                                nostrud exercitation ullamco laboris nisi ut<br/>
                                aliquip ex ea commodo consequat.<br/>
                                Duis aute irure dolor in reprehenderit in<br/>
                                voluptate velit esse.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container2">
                    <div className="contain2">
                        <p>Sed ut perspiciatis unde omnis iste natus<br/>
                            error sit voluptatem accusantium<br/>
                            doloremque laudantium, totam rem<br/>
                            aperiam, eaque ipsa quae ab illo inventore<br/>
                            veritatis et quasi architecto beatae vitae<br/>
                            dicta sunt explicabo. Nemo enim ipsam<br/>
                            voluptatem quia voluptas sit aspernatur aut<br/>
                            odit aut fugit.
                        </p>
                        <img src={Photos.D5} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}