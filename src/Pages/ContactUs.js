import React from 'react'
import logo from '../images/Group 24.png'
import map from '../images/64.png'

import './ContactUs.css'

export default function ContactUs() {
  return (
    <div>
 
        <div className="image-contact">
            <div className="image-content-contact">
            <nav className="navbar navbar-contact navbar-expand-lg sticky-top">
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
                    <li>
                        <a href="/viewcart" className="btn view-button">View Cart</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            <h1>CONTACT US</h1>
            </div>
        </div>

        <div className="contact-content1 text-center">
            <div className="container">
            <h1>GET IN TOUCH WITH US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, minus reprehenderit. Reprehenderit voluptate consequatur repellendus numquam, aliquid inventore quaerat aperiam laudantium eum exercitationem ducimus, autem ea amet ullam dolorum dolores!</p>
            <div className="container contact-form">
                <form action="#" method="post">
                <div className="form-group">
                    <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
                </div>
                <div className="form-group">
                    <input type="tel" id="phone" name="phone" placeholder="Enter Your Phone" required />
                </div>
                <div className="form-group">
                    <textarea id="message" name="message" placeholder="Enter Your Message" rows={10} required defaultValue={""} />
                </div>
                <div className="form-group">
                    <button type="submit">Submit Application</button>
                </div>
                </form>
            </div>
            </div>
        </div>

        <div className="contact-content2 text-center">
            <div className="conatiner-fluid">
            <img src={map} alt="map" style={{width: '100%', height: 515}} className="img-fluid" />
            </div>
        </div>

        <div className="contact-content3">
            <div className="container-fluid home-content8">
            <div className="container text-left">
                <div className="row">
                <div className="col">
                    <img src={logo} alt="logo" className="img-fluid" />
                </div>
                </div>
                <div className="row gx-4 gy-3 second-row">
                <div className="col-md-3 col-6 one">
                    <h1>WHY SLICE OF SPICE?</h1>
                    <p>Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit.<br /> Saepe reprehenderit minus id <br />magni distinctio ipsam possimus <br />neque mollitia voluptas natus <br />accusantium placeat, recusandae similique totam molestias ut porro! Rerum, modi?</p>
                </div>
                <div className="col-md-3 col-6 two">
                    <h1>QUICK LINKS</h1>
                    <a href="/">→ HOME</a><br />
                    <a href="/menu">→ MENU</a><br />
                    <a href="/gallery">→ GALLERY</a><br />
                    <a href="/aboutus">→ ABOUT US</a><br />
                    <a href="/contactus">→ CONTACT US</a>
                </div>
                <div className="col-md-3 col-6 three">
                    <h1>OPENING HOURS</h1>
                    <p className="p1">Monday-Saturday <br /> <font style={{color: '#CC9933', fontSize: 12}}>12:00PM - 10:30PM</font></p>
                    <p className="p2">Sunday <br /> <font style={{color: '#CC9933', fontSize: 12}}>12:00PM - 11:30PM</font></p>
                </div>
                <div className="col-md-3 col-6 four">
                    <h1>GET IN TOUCH</h1>
                    <p> Restaurant, To Conseqat Ipsum Nec Sagittis Sem</p>
                    <p> <i className="fas fa-map-marker-alt" />   Restaurant, Mnhattan 1258, New York, USA</p>
                    <p> <i className="fa fa-phone" /> (+1) 234 567 8901</p>
                    <p><i className="fa fa-envelope" /> hello@website.com</p>
                </div>
                </div>
            </div>
            </div>
            <div className="container-fluid home-content9">
            <footer className="footer mt-auto">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 text-left">
                    <p>Copyright © 2016 Slice Of Spice. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-right">
                    <a href="facebook.com" className="mr-3"><i className="fa fa-facebook-f" /> </a>
                    <a href="twitter.com" className="mr-3"><i className="fa fa-twitter" /> </a>
                    <a href="google.com"><i className="fa fa-google-plus" /></a>
                    </div>
                </div>
                </div>
            </footer>
            </div>
        </div>


    </div>
  )
}
