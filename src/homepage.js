import React, { useState } from "react";
import "./homepage.css";
import img1 from "./sample/Logo.png";
import img2 from "./sample/Din.png";
import img3 from "./sample/Del.png";
import img4 from "./sample/Dre.png";
import img5 from "./sample/show1 (2).png";
import img6 from "./sample/show2.png";
import img7 from "./sample/show3.png";
import img8 from "./sample/show4.png";
import img9 from "./sample/AD.png";
import img10 from "./sample/offer.png";
import img11 from "./sample/dec1.png";
import img12 from "./sample/dec2.png";
import img13 from "./sample/dec3.png";
import img14 from "./sample/dec4.png";
import img15 from "./sample/dec5.png";
import img16 from "./sample/dec6.png";
import img17 from "./sample/deco1.png";
import img18 from "./sample/deco2.png";
import img19 from "./sample/deco3.png";
import img20 from "./sample/deco4.png";
import img21 from  "./sample/deco5.png";
import img22 from "./sample/deco6.png";
import img23 from "./sample/fulldec.png";
import img24 from "./sample/app.png";
import img25 from "./sample/app1.png";
import img26 from "./sample/flag.png";


function Homepage(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <div className="header">
                <img src={img1} className="icon" alt="Anvitha Kitchens Logo"/>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">Anvitha kitchens</a>
                    <button 
                        className="navbar-toggler" 
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home" onClick={() => setIsOpen(false)}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/menu" onClick={() => setIsOpen(false)}>Sign up</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link" href="/menu" onClick={() => setIsOpen(false)}>Log in</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle" 
                                    href="/location" 
                                    id="navbarDropdown" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Location
                                </a>
                                <div className="icon3">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/action" onClick={() => setIsOpen(false)}>Action</a></li>
                                    <li><a className="dropdown-item" href="/another-action" onClick={() => setIsOpen(false)}>Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="/other" onClick={() => setIsOpen(false)}>Something else here</a></li>
                                </ul>
                            </li>
                           
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search for dining" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

    <div class="pic">

      <div class="din">
        <div class="pic0">
             <img src={img2}  alt="pic00"/>
        </div>
        <h3>Dining Out</h3>
      </div>  

      <div class="din">
        <div class="pic0">
          <img src={img3} alt="pic01"/>
        </div>
        <h3>Delivery</h3>
      </div>

      <div class="din">
        <div class="pic0">
          <img src={img4}  alt="pic02"/>
        </div>
        <h3>Night Dream</h3>
      </div>
    </div>


    <div class="cont">
    <h1 class="col">Collections</h1>
    <p class="par">Explore curated lists of top restaurants,cafes,pubs,and bars in Anvitha kitchens,based on trends</p>
    </div>


<div class="add">
  <div class="box">
   <img src={img5} alt="box1"/>
     <div class="down">
      <h5>Best Butter Chicken Spots</h5>
     </div>
  </div>
  <div class="box">
   <img src={img6} alt="box2"/>
     <div class="down">
      <h5>Best pubs & Bars</h5>
     </div>
  </div>
  <div class="box">
  <img src={img7} alt="box3"/>
      <div class="down">
       <h5>Must Vists in Jalandhar</h5>
      </div>
  </div>
  <div class="box">
  <img src={img8} alt="box4"/>
       <div class="down">
        <h5>Local Favourite Places</h5>
      </div>
</div>
</div>


<div class="type">
    <button>Filters</button>
    <button>Offers</button>
    <button>Rating:4.5+</button>
    <button>Pet frindly</button>
    <button>Outdoor seating</button>
    <button>Serves Alcohol</button>
    <button>Open Now</button>
</div>


<div>
    <img src={img9} class="off" alt="off"/>
</div>

<div>
    <img src={img10} class="lab" alt="lab"/>
</div>

<div class="up2">
    <h1>Upto 50% off</h1>
</div>


<div class="line1">  
<div  class="content">
 

 <div class="content1">

  <div class="card">
    <img src={img11} alt="img11"/>

  <div class="content0">
    <div class="top">
      <h2 class="tit1">Arbor Brewing Company</h2>
      <span class="rating">★ 4.3</span>
    </div>

    <div class="down1">
      <span>MG Road, Bangalore</span>
      <span>₹ 1,880 for two</span>
    </div>

    <div class="down2">
      <span class="time">Open on 43 Minutes</span>
      <span>82.1 km</span>
    </div>

  </div>
  </div>
</div>


<div class="content2">

  <div class="card">
    <img src={img12} alt="img12"/>

  <div class="content3">
    <div class="top2">
      <h2 class="tit1">Yoga Professor</h2>
      <span class="rating2">★ 2.2</span>
    </div>

    <div class="down3">
      <span>MG Road, Bangalore</span>
      <span>₹ 1,800 for two</span>
    </div>

    <div class="down4">
      <span class="time2">Open on 33 Minutes</span>
      <span>37.1 km</span>
    </div>
  </div>
  </div>
</div>

<div class="content4">

  <div class="card">
    <img src={img13} alt="img13"/>

  <div class="content5">
    <div class="top3">
      <h2 class="tit1">Party Plex</h2>
      <span class="rating3">★ 4.3</span>
    </div>

    <div class="down5">
      <span>MG Road, Bangalore</span>
      <span>₹ 1,200 for two</span>
    </div>

    <div class="down6">
      <span class="time3">Open on 39 Minutes</span>
      <span>71 km</span>
    </div>
  </div>
  </div>
</div>

<div class="content6">

  <div class="card">
    <img src={img14} alt="img14"/>

  <div class="content7">
    <div class="top4">
      <h2 class="tit1">SPA Paragon</h2>
      <span class="rating4">★ 4.3</span>
    </div>

    <div class="down7">
      <span>MG Road, Bangalore</span>
      <span>₹ 1,800 for two</span>
    </div>

    <div class="down8">
      <span class="time4">Open on 12 Minutes</span>
      <span>2.1 km</span>
    </div>
  </div>
  </div>
</div>


 <div class="content8">

  <div class="card">
    <img src={img15} alt="img15"/>

  <div class="content9">
    <div class="top5">
      <h2 class="tit1">Arbor Brewing Company</h2>
      <span class="rating5">★ 4.3</span>
    </div>

    <div class="down9">
      <span>MG Road, Bangalore</span>
      <span>₹ 1,800 for two</span>
    </div>

    <div class="down10">
      <span class="time5">Open on 34 Minutes</span>
      <span>2.1 km</span>
    </div>
  </div>
  </div>
</div>



<div class="content10">

  <div class="card">
    <img src={img16} alt="img16"/>

  <div class="content11">
    <div class="top6">
      <h2 class="tit1">Cool Beans</h2>
      <span class="rating6">★ 4.3</span>
    </div>

    <div class="down11">
      <span>MG Road, Bangalore</span>
      <span>₹ 1,800 for two</span>
    </div>

    <div class="down12">
      <span class="time6">Open on 43 Minutes</span>
      <span>2.1 km</span>
    </div>
  </div>
  </div>
</div>


<div class="content12">

  <div class="card">
    <img src={img17} alt="img17"/>

  <div class="content13">
    <div class="top7">
      <h2 class="tit1">Arbor Brewing Company</h2>
      <span class="rating7">★ 3.8</span>
    </div>

    <div class="down13">
      <span>MG Road, Bangalore</span>
      <span>₹ 1,900 for two</span>
    </div>

    <div class="down14">
      <span class="time7">Open on 34 Minutes</span>
      <span>34.1 km</span>
    </div>
  </div>
  </div>
</div>



<div class="content14">

  <div class="card">
    <img src={img18} alt="img18"/>

  <div class="content15">
    <div class="top8">
      <h2 class="tit1">Arbor Brewing Company</h2>
      <span class="rating8">★ 4.3</span>
    </div>

    <div class="down13">
      <span>MG Road, Bangalore</span>
      <span>₹ 1,800 for two</span>
    </div>

    <div class="down14">
      <span class="time8">Open on 23 Minutes</span>
      <span>2.1 km</span>
    </div>
  </div>
  </div>
</div>

<div class="content16">

  <div class="card">
    <img src={img19} alt="img19"/>

  <div class="content17">
    <div class="top9">
      <h2 class="tit1">Obsessed Opportunities</h2>
      <span class="rating9">★ 5.0</span>
    </div>

    <div class="down15">
      <span>MG Road, Bangalore</span>
      <span>₹ 2,800 for two</span>
    </div>

    <div class="down16">
      <span class="time9">Open on 38 Minutes</span>
      <span>16.1 km</span>
    </div>
  </div>
  </div>
</div>


<div class="content18">
 <div class="card">
    <img src={img20} alt="img20"/>

  <div class="content19">
    <div class="top10">
      <h2 class="tit1">TCS Company</h2>
      <span class="rating10">★ 4.0</span>
    </div>

    <div class="down17">
      <span>MG Road, Covai</span>
      <span>₹ 1,800 for two</span>
    </div>

    <div class="down18">
      <span class="time10">Open on 33 Minutes</span>
      <span>2.1 km</span>
    </div>
  </div>
</div>
</div>


  <div class="content20">

  <div class="card">
    <img src={img21} alt="img21"/>

  <div class="content21">
    <div class="top11">
      <h2 class="tit1">Beyond Belief</h2>
      <span class="rating11">★ 4.3</span>
    </div>

    <div class="down19">
      <span>MG Road, Bangalore</span>
      <span>₹ 1,800 for two</span>
    </div>

    <div class="down20">
      <span class="time11">Open on 3 Minutes</span>
      <span>7.1 km</span>
    </div>
  </div>
  </div>
</div>

<div class="content22">

  <div class="card">
    <img src={img22} alt="img22"/>

  <div class="content23">
    <div class="top12">
      <h2 class="tit1">Yellow Essence</h2>
      <span class="rating12">★ 4.1</span>
    </div>

    <div class="down21">
      <span>MG Road, Bangalore</span>
      <span>₹ 1,400 for two</span>
    </div>

    <div class="down22">
      <span class="time12">Open on 30 Minutes</span>
      <span>15.1 km</span>
    </div>
  </div>
  </div>
</div>
</div>
</div>  


<div class="full">
  <img src={img23} alt="23"/>
</div>

<div class="full2">
  <p>This contemporary dining room brings together the warmth of natural wood and the charm of deep blue seating, creating a cosy and stylish space. The centrepiece is a solid wooden dining table with a rich grain that adds texture and depth. Surrounding it are plush blue velvet chairs that offer a bold contrast, making the dining area stand out with elegance. The pendant lights above the table give off a soft, warm glow, enhancing the inviting atmosphere. Large windows allow natural light to flood the room, highlighting the wooden flooring and greenery that adds a touch of freshness. This dining room design is perfect for anyone who loves a mix of modern and natural elements, offering comfort and a striking visual appeal</p>
</div>

<div class="next">
  <button>Next Page <i class="fa-solid fa-right-long"></i></button>
</div>

<div class="under">
</div>

<div>
  <h1 class="untit">Anvitha Kitchens</h1>
</div>

<div class="locol">
    <input type="text" placeholder="india"/>
    <input type="text" placeholder="english"/>
</div>

<div class="dong">
    <i class="fa-solid fa-angle-down"></i>
    <i class="fa-solid fa-angle-down"></i>
</div>


   <div class="dawn">
    <h3 class="HH">About Anvitha Kitchens</h3>
    <h5 class="dawn1">Who We Are
        Blog
        Work With Us
        Investor Relations
        Report Fraud
        Press Kit
        Contact Us</h5>
  </div>

<div class="dawn2">
    <h3 class="HH">Zomaverse</h3>
    <h5 class="dawn3">About Anvitha Kitchens
              Blinkit
            District
            Feeding India
            Hyperpure
            Anvitha Live
            Anvithaland
            Weather Union</h5>
  </div>



    <div class="dawn4">
    <h3 class="HH">For Restaurants</h3>
    <h5 class="dawn5">
      Partner With Us
      Website For You
    </h5>
  </div>

    <div class="dawn6">
    <h3 class="HH">Learn More</h3>
    <h5 class="dawn7">
     Partner With Us
    Website For You
    </h5>
  </div>

   <div class="dawn8">
    <h3 class="HH">SOCIAL LINKS</h3>
  </div>



  <div class="dawn9">
    <img src={img24} class="image24" alt="24"/>
    <img src={img25} class="image25"alt="25"/>
  </div>


   <div class="dawn10">
    <i class="fa-brands fa-youtube"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-telegram"></i>
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-brands fa-instagram"></i>
  </div>



   <div class="dawn11">
    <img src={img26} class="flag" alt="26"/>
    <i class="fa-solid fa-globe"></i>
  </div>






















































        </>
    )
}

export default Homepage;