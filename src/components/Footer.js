import React from "react"
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="Footer">

            <span><FaTwitterSquare/></span>
            <span><FaFacebookSquare/></span>
            <span><FaInstagramSquare/></span>
            <span><FaLinkedin/></span>
            <span><FaGithubSquare/></span>   

        </div>
    )
}