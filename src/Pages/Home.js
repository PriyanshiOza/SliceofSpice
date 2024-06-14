import React from 'react'
import logo from '../images/Group 24.png'
import restaurant from '../images/restaurant-interior 1.png'
import birthday from '../images/Group 11.png'
import meetings from '../images/Group 13.png'
import weddings from '../images/Group 12.png'
import colon from '../images/‘’.png'
import ellipse from '../images/Ellipse 5.png'

import './Home.css'


export default function Home() {
  return (
    <>

<div>
    <div className="container-fluid home">
        <nav className="navbar home-navbar navbar-expand-lg">
        <figure>
            <img src={logo} alt="logo" />
        </figure>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-right ml-auto">
            <li className="nav-item">
                <a className="nav-link mr-4" href="/">INDEX</a>
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
        </nav>
        <div className="home-content1 py-5">
            <p className="one">YES WE HAVE <br /><font style={{color: '#CC9933'}}>BEST TASTE</font> FOR <br />YOU!</p>
            <p className="two text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Commodi, laborum delectus est itaque quasi aliquam quia<br /> numquam vel nam quos dolore, magni veritatis doloremque <br />reiciendis! Quasi libero culpa nihil quibusdam?</p>
            <a href="/menu" className="btn menu-button">See Our Menu</a>
        </div>
    </div>

    <div className="container home-content2">
        <div className="container box text-center">
        <div className="content-one">
            <h1>ABOUT US</h1>
            <img src={restaurant} className="img-fluid" alt="restaurant" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, qui maiores, consequatur est provident sit facilis id quo nostrum modi aliquam repellendus blanditiis vel repellat reprehenderit eum at ducimus quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corrupti vel ipsum asperiores maxime a, adipisci obcaecati alias deserunt excepturi delectus similique ducimus nam error ipsam iure? Expedita, quam repellat!</p>
            <button className="btn read-more-button"> Read More</button>
        </div>
        </div>
    </div>

    <div className="container-fluid home-content3">
        <div className="row text-center">
        <div className="content">
            <h1>DELIVERY</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque. Explicabo blanditiis eligendi architecto veniam neque nesciunt ipsam excepturi nulla? Officiis maxime hic adipisci totam doloremque voluptate officia ipsa. Voluptatem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi odit ullam recusandae corrupti, dolorum quam quaerat impedit, corporis repudiandae minus suscipit iste? Unde reiciendis ex dolorum doloremque non, voluptatem quia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora cum exercitationem corporis, animi magni inventore! Excepturi ab aliquam repellat, dolores repudiandae quam, amet sint doloremque nobis ea, rerum est earum!</p>
            <button className="btn order-now">Order Now</button>
        </div>
        </div>
    </div>

    <div className="contanier-fluid home-content4">
        <div className="container">
        <div className="text-center">
            <h1> BEST FOR</h1>
        </div>
        <div className="row text-center">
            <div className="col">
            <figure>
                <img src={birthday} alt="bday" />
                <figcaption>BIRTHDAYS</figcaption>
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid accusantium officia animi praesentium quia debitis fugit, architecto fugiat vitae nobis, aperiam molestias corrupti error quae mollitia illum doloribus asperiores.</p>
            </div>
            <div className="col">
            <figure>
                <img src={meetings} alt="meetings" />
                <figcaption>MEETINGS</figcaption>
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sapiente, nemo sit, aspernatur et perspiciatis nam pariatur ullam, natus non sequi consectetur. Maiores eaque possimus ea accusamus voluptates et corrupti?</p>
            </div>
            <div className="col">
            <figure>
                <img src={weddings} alt="weddings" />
                <figcaption>WEDDINGS</figcaption>
            </figure>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati veritatis magni nostrum optio. Aut totam ea, eligendi accusantium necessitatibus animi laborum obcaecati exercitationem voluptatum sapiente laudantium officiis?</p>
            </div>
        </div>
        </div>
    </div>

    <div className="container-fluid home-content5">
        <div className="container text-center">
        <h1 className="one">WE ARE ALWAYS HERE TO SERVE YOU</h1>
        <div className="row">
            <div className="col">
            <h1 className="stat-number">980+</h1>
            <p className="stat-description">Satisfied Customers</p>
            </div>
            <div className="col">
            <h1 className="stat-number">210+</h1>
            <p className="stat-description">Satisfied Customers</p>
            </div>
            <div className="col">
            <h1 className="stat-number">7K+</h1>
            <p className="stat-description">Satisfied Customers</p>
            </div>
        </div>
        </div>
    </div>

    <div className="container-fluid home-content6">
        <div className="container text-center">
            <h1>A TASTE YOU'LL REMEMBER</h1>
            <img src={colon}  alt="colon" className="img-fluid" />
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus cupiditate eveniet,<br /> consectetur asperiores voluptates laudantium natus ratione modi est, voluptatem error exercitationem <br />placeat incidunt amet magnam, magni dolore quisquam. Alias.</p>
                <figure>
                <img src={ellipse} alt="ellipse" className="img-fluid" />
                <figcaption>
                    JAMES DE FRANCO
                </figcaption>
                </figure>
            </div>
            <div className="carousel-item">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus cupiditate eveniet,<br /> consectetur asperiores voluptates laudantium natus ratione modi est, voluptatem error exercitationem <br />placeat incidunt amet magnam, magni dolore quisquam. Alias.</p>
                <figure>
                <img src={ellipse} alt="ellipse" className="img-fluid" />
                <figcaption>
                    JAMES DE FRANCO
                </figcaption>
                </figure>
            </div>
            <div className="carousel-item">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus cupiditate eveniet,<br /> consectetur asperiores voluptates laudantium natus ratione modi est, voluptatem error exercitationem <br />placeat incidunt amet magnam, magni dolore quisquam. Alias.</p>
                <figure>
                <img src={ellipse} alt="ellipse" className="img-fluid" />
                <figcaption>
                    JAMES DE FRANCO
                </figcaption>
                </figure>
            </div>
            </div>
            <a className="carousel-control-prev custom-carousel-control" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon custom-carousel-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next custom-carousel-control" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon custom-carousel-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
            </a>
        </div>
        </div>
    </div>

    <div className="container-fluid home-content7">
        <div className="container text-center">
        <h1>Sign Up With Your Name and Email to Get More Updates.</h1>
        <div className="row justify-content-center">
            <div className="col-md-6 col-sm-8">
            <div className="subscribe-content">
                <input type="email" className="form-control" placeholder="Enter your email" aria-label="Email" aria-describedby="subscribe-button" />
                <button className="btn btn-primary" type="button" id="subscribe-button">Subscribe</button>
            </div>
            </div>
        </div>
        </div>
    </div>

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
            <a href="index.html">→ HOME</a><br />
            <a href="menu.html">→ MENU</a><br />
            <a href="gallery.html">→ GALLERY</a><br />
            <a href="aboutus.html">→ ABOUT US</a><br />
            <a href="contactus.html">→ CONTACT US</a>
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
                <a href="facbook.com" className="mr-3"><i className="fa fa-facebook-f" /> </a>
                <a href="twitter.com" className="mr-3"><i className="fa fa-twitter" /> </a>
                <a href="google.com"><i className="fa fa-google-plus" /></a>
            </div>
            </div>
        </div>
        </footer>
    </div>

</div>

    </>
  )
}
