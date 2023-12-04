import React from "react";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import img1 from "../../images/home-img/09.png";
import img2 from "../../images/home-img/10.png";
import img3 from "../../images/home-img/11.png";

import img4 from "../../images/home-img/05-donor.png";
import img5 from "../../images/home-img/06-seeker.png";
import img6 from "../../images/home-img/07-blood-bank.png";
import img7 from "../../images/home-img/08-institution.png";



import "./style.css";

const HomePage = () => {
  return (
    <div>
      {/* header section starts */}
      <header class="header">
        <a href="#" class="logo">
          <Image
            width={60}
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bxniddwcus7orai6swdf"
          ></Image> Agricultural Hub{" "}
        </a>
        <nav1 class="navbar">
          <a href="#home">home</a>
          <a href="#aboutus">About Us</a>
          <a href="#services">Services</a>
          <a href="#contactus">Contact Us</a>
          <a href="#news">News</a>
          <a href="#rules">Rules and Regulations</a>
        </nav1>
        <div class="icons">
          <div class="fas fa-bars" id="menu-btn"></div>
          <div class="fas fa-search" id="search-btn"></div>
        </div>

        <form action="" class="search-form">
          <input
            type="search"
            id="search-box"
            placeholder="search here..."
          ></input>
          <label for="search-box" class="fas fa-search"></label>
        </form>
      </header>
      {/* header section starts */}

      {/* <!-- home section starts  --> */}
      <section class="home" id="home">
        <class class="content">

          <h3><span></span> </h3>
          <p></p>
          {/* <a href="#" class="btn333">Main Info</a> */}

        </class>
      </section>
      {/* <!-- home section ends --> */}

      {/* <!-- features section starts  --> */}
      <section class="features" id="aboutus">
        <h1 class="heading">
          {" "}
          <span>About Us</span>{" "}
        </h1>
        <div class="box-container">
          <div class="box">
            <img src={img1} alt="" />
            <h3>About Agri Hub</h3>
            <p>
              The "Agricultural Hub" web application project primarily focuses on the enhance agricultural productivity
              to ensure food security and support small-scale food producers, who often face challenges such as limited
              access to resources, markets, and information.

              .
            </p>
            <a href="#" class="btn333" >
              read more
            </a>
          </div>
          <div class="box">
            <img src={img2} alt="" />
            <h3>Agri Expertise</h3>
            <p>
              To ensure food
              security and to assist small-scale food producers,
              who frequently struggle with issues including poor access
              to resources, markets, and information,  primary goal is to increase agricultural productivity
            </p>
            <br />
            <a href="#" class="btn333">
              read more
            </a>
          </div>
          <div class="box">
            <img src={img3} alt="" />
            <h3>Government</h3>
            <p>
              Those who need credit support for their agricultural products: Governments are in charge of establishing an environment that is supportive of agriculture,
              including laws and initiatives that aid small-scale farmers and advance the production of agriculture.
            </p>
            <a href="#" class="btn333">
              read more
            </a>
          </div>
        </div>
      </section>
      {/* <!-- features section ends --> */}

      {/* <!-- services section ends --> */}
      <section class="categories" id="services">
        <h1 class="heading">
          <span>Services</span>{" "}
        </h1>
        <div class="box-container">
          <div class="box">
            <h3>Farmer Product</h3>

            <img src={img4} alt="" />
            <p></p>
            <a href="/farmproduct" class="btn333">View</a> <br />
          </div>
          <div class="box">
            <h3>Agricultural Equipments</h3>
            <img src={img5} alt="" />
            <p></p>
            <a href="/comproduct" class="btn333">View</a> <br />
          </div>
          <div class="box">
            <h3>Government</h3>
            <img src={img6} alt="" />
            <p></p>
            <a href="https://benevolent-croissant-884150.netlify.app" target={"_blank"} class="btn333">View</a> <br />
          </div>
          <div class="box">
            <h3>Agri Department</h3>
            <img src={img7} alt="" />
            <p></p>
            <a href="https://deft-palmier-590aaa.netlify.app" target={"_blank"} class="btn333">View</a> <br />

          </div>
        </div>
      </section>
      {/* <!-- services section ends --> */}

      {/* <!-- blogs section starts  --> */}
      <section class="blogs" id="contactus">
        <h1 class="heading">
          <span>Contact Us</span>{" "}
        </h1>
        <div class="contain">
          <div class="wrapper">
            <div class="form">
              <h4>GET IN TOUCH</h4>
              <h2 class="form-headline">Send us a message</h2>
              <form id="submit-form" action="">
                <p>
                  <input
                    id="name"
                    class="form-input"
                    type="text"
                    placeholder="Your Name*"
                  />
                  <small class="name-error"></small>
                </p>
                <p>
                  <input
                    id="email"
                    class="form-input"
                    type="email"
                    placeholder="Your Email*"
                  />
                  <small class="name-error"></small>
                </p>
                <p class="full-width">
                  <input
                    id="company-name"
                    class="form-input"
                    type="text"
                    placeholder="Company Name*"
                    required
                  />
                  <small></small>
                </p>
                <p class="full-width">
                  <textarea
                    minlength="20"
                    id="message"
                    cols="30"
                    rows="7"
                    placeholder="Your Message*"
                    required
                  ></textarea>
                  <small></small>
                </p>
                <p class="full-width">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    checked
                  />{" "}
                  Yes, I would like to receive communications by call / email
                  about Company's services.
                </p>
                <p class="full-width">
                  <input type="submit" class="submit-btn" value="Submit" />
                </p>
              </form>
            </div>

            <div class="contacts contact-wrapper">
              <ul>

                <li>Agricultural Hub<span class="highlight-text-grey">
                  (2017-2022).
                </span>  Ready to know
                  how we can help you?</li>
                <span class="hightlight-contact-info">
                  <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> agriculturalhub@gmail.com</li>
                  <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">041 2234321</span></li>

                </span>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blogs section ends --> */}

      {/* <!-- Main section ends --> */}
      <section class="categories" id="news">
        <h1 class="heading">
          <span>News</span>{" "}
        </h1>
          

        <div class="box-container">
          <div class="box">
            <h3>2023/05/22</h3>
            {/* <img src={img8} alt="" /> */}
            <h3>Drought conditions threaten corn harvest in Midwest</h3>
            <p>
              Severe drought conditions in the Midwest have raised concerns about this year's corn harvest. Farmers are facing water shortages
            </p>
          </div>

          <div class="box">
            <h3>2023/05/16</h3>
            {/* <img src={img9} alt="" /> */}
            <h3>Innovative drone technology aids in crop monitoring</h3>
            <p>Farmers are increasingly adopting drone technology to monitor their crops. Drones equipped with high-resolution cameras
              and sensors provide valuable data on plant health</p>
            {/* <!-- <a href="#" class="btn">shop now</a> --> */}
          </div>

          <div class="box">
            <h3>2023/05/14</h3>
            {/* <img src={img10} alt="" /> */}
            <h3>Vertical farming gains popularity in urban areas</h3>
            <p> Urban farming methods, such as vertical farming, are gaining momentum in cities worldwide. By utilizing vertical space and employing advanced hydroponic or aeroponic systems</p>
            {/* <!-- <a href="#" class="btn">shop now</a> --> */}
          </div>

          <div class="box">
            <h3>2023/05/10</h3>
            {/* <img src={img11} alt="" /> */}
            <h3>Sustainable agriculture practices promote soil health</h3>
            <p>Farmers are embracing sustainable agriculture practices to prioritize soil health and long-term productivity.
              Techniques like cover cropping, crop rotation</p>
            {/* <!-- <a href="#" class="btn">shop now</a> --> */}
          </div>

        </div>
          <a href="/news" class="btn333">View More</a>
      </section>
      {/* <!-- Main section ends --> */}

      {/* <!-- Main section ends --> */}
      <section class="categories" id="rules">
        <h1 class="heading">
          <span>Rules & Regulations</span>{" "}
        </h1>
        
        <div class="box-container">
          <div class="box">
            {/* <img src={img8} alt="" /> */}
            <h3>Pesticide Control Regulations</h3>
            <p>
              Sri Lanka has implemented strict regulations on pesticide usage to ensure the safety of agricultural produce and protect public health. Farmers must follow guidelines regarding the type, dosage, and application of pesticides.
            </p>
            {/* <!-- <a href="#" class="btn">shop now</a> --> */}
          </div>

          <div class="box">
            {/* <img src={img9} alt="" /> */}
            <h3>Organic Farming Certification</h3>
            <p>Sri Lanka has established rules for organic farming certification. Farmers who wish to label their products as organic must adhere to specific standards and practices.</p>
            {/* <!-- <a href="#" class="btn">shop now</a> --> */}
          </div>

          <div class="box">
            {/* <img src={img10} alt="" /> */}
            <h3>Irrigation Water Management</h3>
            <p>Sri Lanka has regulations governing the proper management and allocation of irrigation water. Farmers must comply with guidelines related to water usage, irrigation scheduling, and conservation practices.</p>
            {/* <!-- <a href="#" class="btn">shop now</a> --> */}
          </div>

          <div class="box">
            {/* <img src={img11} alt="" /> */}
            <h3>Seed Certification Standards</h3>
            <p>The country has implemented seed certification standards to ensure the quality and authenticity of seeds used in agricultural production.</p>
            
          </div>
        </div>
        <a href="/rules" class="btn333">View More</a>
      </section>
      {/* <!-- Main section ends --> */}

      {/* <!-- footer section starts  --> */}
      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3>contact info</h3>
            <a  class="links">
              {" "}
              <i class="fas fa-phone"></i> 0702298135{" "}
            </a>
            <a href="#" class="links">
              {" "}
              <i class="fas fa-phone"></i> 0767419179{" "}
            </a>
            <a href="#" class="links">
              {" "}
              <i class="fas fa-envelope"></i> agriculturalhub@gmail.com{" "}
            </a>
            <a href="#" class="links">
              {" "}
              <i class="fas fa-map-marker-alt"></i>Colombo 3{" "}
            </a>
          </div>

          <div class="box">
            <h3>quick links</h3>
            <a href="#" class="links">
              {" "}
              <i class="fas fa-arrow-right"></i> home{" "}
            </a>
            <a href="#aboutus" class="links">
              {" "}
              <i class="fas fa-arrow-right"></i> About Us{" "}
            </a>
            <a href="#services" class="links">
              {" "}
              <i class="fas fa-arrow-right"></i> Services{" "}
            </a>
            <a href="#contactus" class="links">
              {" "}
              <i class="fas fa-arrow-right"></i> Contact Us{" "}
            </a>
          </div>

          <div class="box">
            <div class="share">
              <a  class="fab fa-facebook-f"></a>
              <a  class="fab fa-twitter"></a>
              <a class="fab fa-instagram"></a>
              <a  class="fab fa-linkedin"></a>
            </div>
          </div>
        </div>

        <div class="credit">
          {" "}
          created by <span> @Team Matrix</span> | all rights reserved{" "}
        </div>
      </section>
      {/* <!-- footer section ends --> */}
    </div>
  );
};

export default HomePage;
