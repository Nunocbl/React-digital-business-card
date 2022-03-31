import React from "react"
import myphoto from '../Images/myphoto.jpg'


export default function Info() {
    return (
        <main>
            <img src={myphoto}></img>
            <div className="info">
                <h1 className="name">Nuno Lopes</h1>
                <h3 className="job">Frontend Developer</h3>
                <a href="https://www.linkedin.com/in/nuno-lopes-6b678576/">patrao.website</a>
                <button><span className="mail material-icons ">
                    email
                </span>Email</button>
            </div>
        </main>
    )
}