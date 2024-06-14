import React, { useState } from 'react'
import logo from '../images/Group 24.png'
import burger1 from '../images/Rectangle 19.png'
import burger2 from '../images/Rectangle 20.png'
import burger3 from '../images/Rectangle 21.png'
import pizza1 from '../images/Rectangle 19 (1).png'
import pizza2 from '../images/Rectangle 20 (1).png'
import pizza3 from '../images/Rectangle 21 (1).png'
import sandwich1 from '../images/sandwhich1 (1).png'
import sandwich2 from '../images/sandwhich1 (2).png'
import sandwich3 from '../images/sandwhich1 (3).png'

import '../Pages/Menu.css'

export default function Menu() {

    const [modalItem, setModalItem] = useState({
        name: '',
        description: '',
        price: '',
        imgSrc: '',
    });

    const openModal = (name, description, price, imgSrc) => {
        setModalItem({
            name: name,
            description: description,
            price: price,
            imgSrc: imgSrc,
        });
        document.getElementById('itemModal').style.display = 'block';
    };

    const closeModal = () => {
        document.getElementById('itemModal').style.display = 'none';
    };


  return (
    <div>

        <div className="image-menu">
            <div className="image-content-menu">
            <nav className="navbar menu-navbar navbar-expand-lg">
                <figure>
                <img src={logo} alt="logo" />
                </figure>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav text-right ml-auto">
                    <li className="nav-item">
                    <a className="nav-link mr-4" href="/">HOME</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mr-4" href=".menu">MENU</a>
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
            <div className="container-fluid footer1-menu text-center">
                <center>
                <div className="conatiner bottom-menu">
                    <h1 className='bottom-menu-content'>OUR MENU</h1>
                    <br />
                    <p>BURGERS</p>
                </div>
                </center>
            </div>
            </div>
        </div>

        <div className="menu container-fluid">
            <div className="burger container justify-content-center">
            <div className="menu-section">
                <div className="menu-item" onClick={() => openModal('Veggie Burger', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!', '$70.00', burger1)} data-name="Veggie Burger" data-description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!" data-price="$70.00" data-img-src="images/Rectangle 19.png">
                    <figure>
                        <img src={burger1} alt="burger1" className="img-fluid" /><br /><br />
                    </figure>
                    <h5>Veggie Burger</h5><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!</p>
                    <p className="price">$70.00</p>
                </div>
                <div className="menu-item" onClick={() => openModal('Wild Salmon Burger', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!', '$70.00', burger2)} data-name="Wild Salmon Burger" data-description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!" data-price="$70.00" data-img-src="images/Rectangle 20.png">
                    <figure>
                        <img src={burger2} alt="burger2" className="img-fluid" /><br /><br />
                    </figure>
                    <h5>Wild Salmon Burger</h5><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!</p>
                    <p className="price">$70.00</p>
                </div>
                <div className="menu-item" onClick={() => openModal('Bean Burger', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!', '$70.00', burger3)} data-name="Bean Burger" data-description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!" data-price="$70.00" data-img-src="images/Rectangle 21.png">
                    <figure>
                        <img src={burger3} alt="burger3" className="img-fluid" /><br /><br />
                    </figure>
                    <h5>Bean Burger</h5><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!</p>
                    <p className="price">$70.00</p>
                </div>
            </div>
            </div>
            <div className="pizza container justify-content-center">
            <h1 className="text-center">PIZZA</h1>
            <div className="menu-section">
                <div className="menu-item" onClick={() => openModal('Neapolitan Pizza', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!', '$70.00', pizza1)} data-name="Neapolitan Pizza" data-description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!" data-price="$70.00" data-img-src="images/Rectangle 19 (1).png">
                    <figure>
                        <img src={pizza1} alt="pizza1" className="img-fluid" /><br /><br />
                    </figure>
                    <h5>Neapolitan Pizza</h5><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!</p>
                    <p className="price">$70.00</p>
                </div>
                <div className="menu-item" onClick={() => openModal('Chicago Pizza', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!', '$70.00', pizza2)} data-name="Chicago Pizza" data-description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!" data-price="$70.00" data-img-src="images/Rectangle 20 (1).png">
                    <figure>
                        <img src={pizza2} alt="pizza2" className="img-fluid" /><br /><br />
                    </figure>
                    <h5>Chicago Pizza</h5><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!</p>
                    <p className="price">$70.00</p>
                </div>
                <div className="menu-item" onClick={() => openModal('Detroit Pizza', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!', '$70.00', pizza3)} data-name="Detroit Pizza" data-description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!" data-price="$70.00" data-img-src="images/Rectangle 21 (1).png">
                    <figure>
                        <img src={pizza3} alt="pizza3" className="img-fluid" /><br /><br />
                    </figure>
                    <h5>Detroit Pizza</h5><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!</p>
                    <p className="price">$70.00</p>
                </div>
            </div>
            </div>
            <div className="sandwich container justify-content-center">
            <h1 className="text-center">SANDWICHES</h1>
            <div className="menu-section">
                <div className="menu-item" onClick={() => openModal('Grill Sandwich', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!', '$70.00', sandwich1)} data-name="Grill Sandwich" data-description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!" data-price="$70.00" data-img-src="images/sandwhich1 (1).png">
                    <figure>
                        <img src={sandwich1} alt="sandwich1" className="img-fluid" /><br /><br />
                    </figure>
                    <h5>Grill Sandwich</h5><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!</p>
                    <p className="price">$70.00</p>
                </div>
                <div className="menu-item" onClick={() => openModal('Club Sandwich', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!', '$70.00', sandwich2)} data-name="Club Sandwich" data-description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!" data-price="$70.00" data-img-src="images/sandwhich1 (2).png">
                    <figure>
                        <img src={sandwich2} alt="sandwich2" className="img-fluid" /><br /><br />
                    </figure>
                    <h5>Club Sandwich</h5><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!</p>
                    <p className="price">$70.00</p>
                </div>
                <div className="menu-item" onClick={() => openModal('Egg Sandwich', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!', '$70.00', sandwich3)} data-name="Egg Sandwich" data-description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!" data-price="$70.00" data-img-src="images/sandwhich1 (3).png">
                    <figure>
                        <img src={sandwich3} alt="sandwich3" className="img-fluid" /><br /><br />
                    </figure>
                    <h5>Egg Sandwich</h5><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt vitae quas dolores architecto. Velit aperiam voluptas consectetur quisquam praesentium magni totam numquam. Aspernatur voluptatem cum numquam sit, ratione blanditiis!</p>
                    <p className="price">$70.00</p>
                </div>
            </div>
            </div>
            <div id="itemModal" className="modal">
                <div className="modal-content text-center">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <figure>
                            <img src={modalItem.imgSrc} alt="item" className="img-fluid" /><br /><br />
                        </figure>
                        <h5>{modalItem.name}</h5><br />
                        <p>{modalItem.description}</p>
                        <p className="price text-left"><strong>Price : </strong> {modalItem.price}</p>
                        <div className="quantity-selector">
                            <input type="number" id="quantity" name="quantity" min={1} defaultValue={1} />
                            <a href="/viewcart" id="addToCartBtn">Add to Cart</a>
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
                <a href="#/">→ HOME</a><br />
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