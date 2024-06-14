import React from 'react'
import logo from '../images/Group 24.png'
import aboutimage from '../images/Rectangle 47.png'
import freedelivery from '../images/Group 58.png'
import savetime from '../images/Group 59.png'
import discount from '../images/Vector.png'
import food from '../images/Vector (1).png'
import person1 from '../images/Rectangle 56.png'
import person2 from '../images/Rectangle 57.png'
import icon from '../images/Group 66.png'

import './AboutUs.css'

export default function AboutUs() {
  return (
    <div>


        <div className="image-about-us">
            <div className="image-content-about-us">
            <nav className="navbar navbar-about navbar-expand-lg sticky-top">
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
            <h1>ABOUT US</h1>
            </div>
        </div>

        <div className="about-content1">
            <div className="container-fluid about-us-content">
            <div className="container d-flex flex-column flex-lg-row">
                <div className="col-lg-6 col-md-12">
                <h2>NOTHING TO WORRY ABOUT WITH SLICE OF SPICE</h2>
                <br />
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt mollitia adipisci molestiae repellat voluptate dolores nostrum fuga, vero qui incidunt. Fugit aperiam exercitationem voluptate repellat. Ipsam nisi id ut!</p>
                </div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                <img src={aboutimage} alt="about" className="img-fluid" />
                </div>
            </div>
            </div>
        </div>

        <div className="about-content2">
            <div className="container text-center d-flex justify-content-around flex-wrap">
            <div className="item">
                <figure>
                <img src={freedelivery} alt="delivery" className="img-fluid" />
                <figcaption>Free Delivery</figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum fugiat voluptatem ipsum minima saepe blanditiis facere quaerat, beatae, doloribus asperiores quasi culpa quod reprehenderit dolorem dolor commodi eos rem.</p>
            </div>
            <div className="item">
                <figure>
                <img src={savetime} alt="savetime" className="img-fluid" />
                <figcaption>Save Your Time</figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum fugiat voluptatem ipsum minima saepe blanditiis facere quaerat, beatae, doloribus asperiores quasi culpa quod reprehenderit dolorem dolor commodi eos rem.</p>
            </div>
            <div className="item">
                <figure>
                <img src={discount} alt="discount" className="img-fluid" />
                <figcaption>Regular Discounts</figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum fugiat voluptatem ipsum minima saepe blanditiis facere quaerat, beatae, doloribus asperiores quasi culpa quod reprehenderit dolorem dolor commodi eos rem.</p>
            </div>
            <div className="item">
                <figure>
                <img src={food} alt="food" className="img-fluid" />
                <figcaption>Variety Of Foods</figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum fugiat voluptatem ipsum minima saepe blanditiis facere quaerat, beatae, doloribus asperiores quasi culpa quod reprehenderit dolorem dolor commodi eos rem.</p>
            </div>
            </div>
        </div>

        <div className="about-content3 text-center">
            <div className="container">
            <h1>OUR TEAM</h1><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem vel repudiandae vero,<br />impedit maiores quidem fuga omnis modi esse accusamus quae<br /> quia cumque iusto incidunt, fugit obcaecati nam ex.</p>
            <div className="row team-members">
                <div className="col team-member">
                    <img src={person1} alt="person1" className="img-fluid" />
                    <h4>ROXI DALSOME</h4>
                    <img src={icon} alt="icon" className="img-fluid img1" />
                </div>
                <div className="col team-member">
                    <img src={person2} alt="person2" className="img-fluid" />
                    <h4>EDGAR JHOLSON</h4>
                    <img src={icon} alt="icon" className="img-fluid img2" />
                </div>
            </div>
            </div>
        </div>

        <div className="about-content4">
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
