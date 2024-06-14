import React from 'react'
import logo from '../images/Group 24.png'
import image1 from '../images/Rectangle 38.png'
import image2 from '../images/Rectangle 39.png'
import image3 from '../images/Rectangle 40.png'
import image4 from '../images/Rectangle 41.png'
import image5 from '../images/Rectangle 42.png'
import image6 from '../images/Rectangle 43.png'
import image7 from '../images/Rectangle 44.png'
import image8 from '../images/Rectangle 45.png'
import image9 from '../images/Rectangle 46.png'

import '../Pages/Gallery.css'


export default function Gallery() {
  return (
    <div>

        <div className="image">
            <div className="image-content-gallery">
            <nav className="navbar gallery-navbar navbar-expand-lg sticky-top">
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
            <h1>GALLERY</h1>
            </div>
        </div>

        <div className="image-section text-center">
            <div className="container-fluid">
            <h3>You'll Never Get Tired Of Viewing</h3>
            <div className="gallery-container">
                <div className="gallery-item">
                <img src={image1} alt="gallery1" className="img-fluid" data-toggle="modal" data-target="#imageModal" onclick="showImage(this.src)" />
                </div>
                <div className="gallery-item">
                <img src={image2} alt="gallery1" className="img-fluid" data-toggle="modal" data-target="#imageModal" onclick="showImage(this.src)" />
                </div>
                <div className="gallery-item">
                <img src={image3} alt="gallery1" className="img-fluid" data-toggle="modal" data-target="#imageModal" onclick="showImage(this.src)" />
                </div>
                <div className="gallery-item">
                <img src={image4} alt="gallery1" className="img-fluid" data-toggle="modal" data-target="#imageModal" onclick="showImage(this.src)" />
                </div>
                <div className="gallery-item">
                <img src={image5} alt="gallery1" className="img-fluid" data-toggle="modal" data-target="#imageModal" onclick="showImage(this.src)" />
                </div>
                <div className="gallery-item">
                <img src={image6} alt="gallery1" className="img-fluid" data-toggle="modal" data-target="#imageModal" onclick="showImage(this.src)" />
                </div>
                <div className="gallery-item">
                <img src={image7} alt="gallery1" className="img-fluid" data-toggle="modal" data-target="#imageModal" onclick="showImage(this.src)" />
                </div>
                <div className="gallery-item">
                <img src={image8} alt="gallery1" className="img-fluid" data-toggle="modal" data-target="#imageModal" onclick="showImage(this.src)" />
                </div>
                <div className="gallery-item">
                <img src={image9} alt="gallery1" className="img-fluid" data-toggle="modal" data-target="#imageModal" onclick="showImage(this.src)" />
                </div>
            </div>
            </div>
        </div>

        {/* <div className="modal fade" id="imageModal" tabIndex={-1} role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content text-center">
                <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="modal-body text-center">
                <span className="arrow left" id="prevArrow">◀</span>
                <img id="modalImage" src alt="modalimg" className="img-fluid" />
                <span className="arrow right" id="nextArrow">▶</span>
                </div>
            </div>
            </div>
        </div> */}

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
  )
}
