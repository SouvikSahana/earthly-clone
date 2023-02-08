import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="left">
            <img src="https://static.wixstatic.com/media/ead566_2c378f27d33a419d8c532250cf2f0d51~mv2.png/v1/fill/w_79,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Earthly%20Logo_edited.png" alt="earth" />
        </div>
        <div className="middle">
            <div className="middle-left">
                <h3>earthly</h3>
                <p> Sustainable products at affordable prices</p>
            </div>
            <div className="middle-right">
                <img src="https://static.wixstatic.com/media/a3c153_313e78e612ad43f993d87370745c5540~mv2.png/v1/fill/w_59,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a3c153_313e78e612ad43f993d87370745c5540~mv2.png" alt="cube" />
            </div>
        </div>
        <div className="right">
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li id='btnGIT'>Get in Touch</li>
                <li><i class="material-icons">shopping_cart</i></li>
            </ul>
        </div>
    </div>
  )
}

export default Header