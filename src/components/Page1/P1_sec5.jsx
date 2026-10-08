import { Photos } from "../../Photos"
import "../Page1/P1_sec5.scss"
export default function P1_sec5(){
    return(
        <>
            <section className="P1_sec5">
                <div className="text">
                    <h2>Our greatest chef</h2>
                </div>
                <div className="container">
                    <div className="contain">
                        <div className="man">
                            <img src={Photos.T1} alt="" />
                            <h2>Betran Komar</h2>
                            <p>Head chef</p>
                        </div>
                        <div className="man">
                            <img src={Photos.T2} alt="" />
                            <h2>Ferry Sauwi</h2>
                            <p>Chef</p>
                        </div>
                        <div className="man">
                            <img src={Photos.T3} alt="" />
                            <h2>Iswan Dracho</h2>
                            <p>Chef</p>
                        </div>
                    </div>
                </div>
                <div className="but">
                    <button>View all</button>
                </div>
            </section>
        </>
    )
}