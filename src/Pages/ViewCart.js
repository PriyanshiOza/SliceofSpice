import React from 'react'
import logo from '../images/Group 24.png'
import { useLocation } from 'react-router-dom';

import './ViewCart.css'

export default function ViewCart() {
    let location = useLocation();
    // Retrieve cartItems from location state
    const { cartItems } = location.state || {};
  return (
    <div>

        <div className="image-view">
            <div className="image-content-view">
            <nav className="navbar navbar-view navbar-expand-lg sticky-top">
                <div className="container-fluid">
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-right ml-auto">
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="/">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="/menu">MENU</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="/gallery">GALLERY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="/aboutus">ABOUT US</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="/contactus">CONTACT US</a>
                    </li>
                    {/* <button className="btn view-button">View Cart</button> */}
                    </ul>
                </div>
                </div>
            </nav>
            <div className="container-fluid footer1 text-center">
                <center>
                <div className="conatiner bottom-content">
                    <h1>SHOPPING CART</h1>
                </div>
                </center>
            </div>
            </div>
        </div>

        <div className="container items">
        <div id="cartItems" className="row">
          {/* Ensure cartItems is not null or undefined before mapping */}
          {cartItems &&
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.imgSrc} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <p className="item-price">{item.price}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="buttons text-center">
          <a href="/menu" className="btn">
            Back
          </a>
        </div>
      </div>

    </div>


  )
}
