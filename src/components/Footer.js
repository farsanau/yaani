import React from "react";

const Footer =()=>{
    return(
        <>
        <footer className="footer">
  <div className="container">
    <div className="row">
      {/* <!-- CONTENT FOR THE MOBILE NUMBER  --> */}
      <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
        <div className="contact-box__icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            <path d="M15 7a2 2 0 0 1 2 2" />
            <path d="M15 3a6 6 0 0 1 6 6" />
          </svg>
        </div>
        <div className="contact-box__info">
          <a href="#" className="contact-box__info--title">+358 461100000</a>
          <p className="contact-box__info--subtitle">  Mon-Fri 9am-6pm</p>
        </div>
      </div>  
      {/* <!-- CONTENT FOR EMAIL  --> */}
      <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
        <div className="contact-box__icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-opened" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="3 9 12 15 21 9 12 3 3 9" />
            <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
            <line x1="3" y1="19" x2="9" y2="13" />
            <line x1="15" y1="13" x2="21" y2="19" />
          </svg>
        </div>
        <div className="contact-box__info">
          <a href="#" className="contact-box__info--title">info@yaani.com</a>
          <p className="contact-box__info--subtitle">Online support</p>
        </div>
      </div>
      {/* <!-- CONTENT FOR LOCATION  --> */}
      <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
        <div className="contact-box__icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-2" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="18" y1="6" x2="18" y2="6.01" />
            <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
            <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
            <line x1="9" y1="4" x2="9" y2="17" />
            <line x1="15" y1="15" x2="15" y2="20" />
          </svg>
        </div>
        <div className="contact-box__info">
          <a href="#" className="contact-box__info--title">Finland</a>
          <p className="contact-box__info--subtitle">Aurinkokaatu,ESPOO</p>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- START THE SOCIAL MEDIA CONTENT  --> */}
  <div className="footer-sm" style={{backgroundColor:"black"}}>
    <div className="container">
      <div className="row py-4 text-center text-white">
        <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
          connect with us on social media
        </div>
        <div className="col-lg-7 col-md-6">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- START THE CONTENT FOR THE CAMPANY INFO --> */}
  <div className="container mt-5">
    <div className="row text-white justify-content-center mt-3 pb-3">
      <div className="col-12 col-sm-6 col-lg-6 mx-auto">
        <h5 className="text-capitalize fw-bold">Yaani</h5>
        <hr className="bg-white d-inline-block mb-4" style={{width: 60, height: 2}}/>
        <p className="lh-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex obcaecati blanditiis reprehenderit ab mollitia voluptatem consectetur?
        </p>
      </div>
      <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
        <h5 className="text-capitalize fw-bold">Products</h5>
        <hr className="bg-white d-inline-block mb-4" style={{width: 60, height: 2,backgroundColor:"black"}}/>
        <ul className="list-inline campany-list">
          <li><a href="#">Consulting</a></li>
          <li><a href="#">Software development</a></li>
          <li><a href="#">System integration</a></li>
          <li><a href="#">Cybersecurity</a></li>
          <li><a href="#"> Cloud computing</a></li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
        <h5 className="text-capitalize fw-bold">useful links</h5>
        <hr className="bg-white d-inline-block mb-4" style={{width: 60, height: 2,backgroundColor:"black"}}/>
        <ul className="list-inline campany-list">
          <li><a href="#"> Your Account</a></li>
          <li><a href="#">Become an Affiliate</a></li>
          <li><a href="#">create an account</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
        <h5 className="text-capitalize fw-bold">contact</h5>
        <hr className="bg-white d-inline-block mb-4" style={{width: 60, height: 2,backgroundColor:"black"}}/>
        <ul className="list-inline campany-list">
          <li><a href="#">Lorem ipsum</a></li>
          <li><a href="#">Lorem ipsum</a></li>
          <li><a href="#">Lorem ipsum</a></li>
          <li><a href="#">Lorem ipsum</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* <!-- START THE COPYRIGHT INFO  --> */}
  <div className="footer-bottom pt-5 pb-5">
    <div className="container">
      <div className="row text-center text-white">
        <div className="col-12">
          <div className="footer-bottom__copyright">
             Copyright 2024 <a href="#">Yaani</a> | Created by <a href="http://codewithpatrick.com" target="_blank">Yaani</a><br/>

            Distributed by <a href="http://themewagon.com" target="_blank">Yaani</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

{/* <!-- BACK TO TOP BUTTON  --> */}
<a href="#" className="shadow btn-primary rounded-circle back-to-top">
  <i className="fas fa-chevron-up"></i>
</a>


        </>
    )
}

export default Footer;