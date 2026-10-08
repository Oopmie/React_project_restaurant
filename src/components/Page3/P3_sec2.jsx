import { Photos } from "../../Photos";
import "../Page3/P3_sec2.scss"
export default function P3_sec2() {
    return (
        <>
            <section className="P3_sec2">
                <div className="container">
                    <div className="contain">
                        <img src={Photos.T4} alt="" />
                        <div>
                            <h2><span>Owner </span>&<br />
                                Executive Chef
                            </h2>
                            <h3>Ismail Marzuki</h3>
                            <h5>“</h5>
                            <p>Lorem ipsum dolor sit amet,<br />
                                consectetur adipiscing elit, sed<br />
                                do eiusmod tempor incididunt ut<br />
                                labore et dolore magna aliqua.
                            </p>
                            <h5>„</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}