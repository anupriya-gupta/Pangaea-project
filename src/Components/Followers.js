import React from 'react'
import "./followers.css"
import pic1 from "./pictures/picture1.jpg"
import pic2 from "./pictures/picture2.jpg"
import pic3 from "./pictures/picture3.jpg"
import pic4 from "./pictures/picture4.jpg"

export default function Followers() {
    return (
        <div>
        <img src={pic1} alt="Logo" className="followers"/>
        <img src={pic2} alt="Logo" className="followers"/>
        <img src={pic3} alt="Logo" className="followers"/>
        <img src={pic4} alt="Logo" className="followers"/>
        </div>
    )
}
