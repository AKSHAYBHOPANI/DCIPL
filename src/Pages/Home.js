
   
import React, { useState } from "react";
import "./CSS/Home.css";
import { useHistory } from "react-router-dom";
import derivebox from "../assests/deriveup.svg";
import Postmodal from "../Pages/modal/Postmodal";
import image28 from "../assests/tax1.png";
import image29 from "../assests/cash1.png";
import image31 from "../assests/bank111.png";
import image33 from "../assests/hm1.png";
import image27 from "../assests/planning1.png";
import gplay from "../assests/g-play.png";
import image4 from "../assests/grid-1.svg";
import { Link } from "react-router-dom";
import image10 from "../assests/grid-5.svg";
import image26 from "../assests/budget1.png";
import arrow from "../assests/arrow.svg";
import tripv from "../assests/tripv.mp4";
import image6 from "../assests/grid-2.svg";
import image12 from "../assests/grid-6.svg";
import logo from "../assests/logo.jpg";
import Machine from "../assests/big-img.svg";
import Carousel from "react-elastic-carousel";
import card from "../assests/card.png";
import image8 from "../assests/grid-3.svg";
import piggy from "../assests/piggy.png";
import estimate from "../assests/esti.svg";
import happy from "../assests/happy.svg";
import atm from "../assests/atm.png";
import mobile from "../assests/money1.png";
import hdfc from "../assests/a-hdfc.svg";
import icici from "../assests/a-icici.svg";
import sbi from "../assests/a-sbi.svg";
import image17 from "../assests/big-img9.svg";
import bajaj from "../assests/bajaj.jpeg";
import man2 from "../assests/man2.jpg";
import man3 from "../assests/man3.jpg";
import woman1 from "../assests/woman1.jpg";
import man from "../assests/man-p.png";
import kotak from "../assests/a-kotak.svg";
import grow from "../assests/idea3.png";
import google from "../assests/idea1.png";
import men from "../assests/taxreturn.svg";

import save from "../assests/idea2.png";
import idfc from "../assests/a-idfc.svg";
import sriram from "../assests/sriram.png";

// import Postmodal from "../Pages/modal/Postmodal";s

// Progress Bar
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
    document.body.style.setProperty(
      "--scroll-per",
      `${(window.pageYOffset / document.body.offsetHeight) * 110}%`
    );
  },
  false
);

const Box_component = ({ Icon, Text }) => {
  const [isShown, setIsShown] = useState(false);
  let history = useHistory();

  function handleClick() {
    history.push("/register");
  }

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={handleClick}
      className="box33"
    >
      <img src={Icon} className="icon_design" alt="" />
      <h5 className="box_text">{Text}</h5>
      {isShown && (
        <div className="box-inner">
          <h5 className="box_text2">{Text}</h5>
          <button className="btnviewdoc">View Solutions</button>
        </div>
      )}
    </div>
  );
};
const breakPoints3 = [
  { width: 900, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 3 },
  { width: 1800, itemsToShow: 3 },
];
const breakPoints2 = [
  { width: 400, itemsToShow: 1 },
  { width: 600, itemsToShow: 1 },
  { width: 800, itemsToShow: 1},
  { width: 1000, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
  { width: 1400, itemsToShow: 3 },
];
const Home = () => {
  const [postIsOpen, setPostIsOpen] = useState(false);
  const [toggle, setToggle] = React.useState(true);
  const [appointmentIsOpen, setAppointmentIsOpen] = useState(false);
  function handleClick() {
    history.push("/register");
  }

  const img_arr = [
    bajaj,
    sriram,
    icici,
    kotak,
    idfc,
    sbi,
    bajaj,
    hdfc,
    icici,
    kotak,
    idfc,
    sbi,
  ];
  let history = useHistory();
  const img_arr3 = [estimate, atm, icici, sbi, kotak, hdfc, icici, sbi, kotak];
  const img_arr4 = [
    "EMI Calculator",
    "ICICI",
    "SBI",
    "KOTAK",
    "HDFC",
    "ICICI",
    "SBI",
    "KOTAK",
  ];

  // Statistics
  // var project = setInterval(projectDone, 10);
  // var clients = setInterval(happyClients, 10);
  // var service = setInterval(service, 10);

  // let count1 = 1;
  // let count2 = 1;
  // let count3 = 1;

  // function projectDone() {
  //   count1++;
  //   document.querySelector("#number1").innerHTML = count1;
  //   if (count1 == 500) {
  //     clearInterval(project);
  //   }
  // }

  // function happyClients() {
  //   count2++;
  //   document.querySelector("#number2").innerHTML = count2;
  //   if (count2 == 89) {
  //     clearInterval(clients);
  //   }
  // }

  // function service() {
  //   count3++;
  //   document.querySelector("#number3").innerHTML = count3;
  //   if (count3 == 359) {
  //     clearInterval(service);
  //   }
  // }

  return (
    <>
      <div className="progress"></div>
      <div className="overall">
        <section className="first-box">
          <div className="first-box-left">
            <h6> DERIVE CAPITAL</h6>
            <h3>
              The <span>smart </span>
              next gen <span> money app</span>
            </h3>
            {/* <img src={derivebox} alt="#"></img> */}
            <div className="s-box">
              <h4>
                <h1>#DERIVEUP  to begin saving 3X more than others!</h1>
              </h4>
            </div>{" "}
            {/* <img src={gplay} alt="#"></img> */}
            <div class="mobile-input p-1">
              {/* <label for="userMobile" class="sr-only">
                Enter your mobile number
              </label>{" "}
              <input
                id="userMobile"
                autofocus="autofocus"
                type="tel"
                name="user-mobile"
                placeholder="Enter your mobile number"
              />{" "} */}
              <Link to="/Subscribe">
                {" "}
                <button id="join-btn-top" class="btn theme-btn fo-sm-16">
                  Subscribe
                </button>
              </Link>
            </div>
          </div>

          <div className="first-box-right">
            <div className="wrapper-main1">
              <div className="carousel-home">
                <div className="carousel__item">
                  <div className="carousel__item-head">🚀</div>
                  <div className="carousel__item-body">
                    <p className="title-slide">Save money to buy the future.</p>
                    <p>Derive Capital</p>
                  </div>
                </div>
                <div className="carousel__item">
                  <div className="carousel__item-head">🏠</div>
                  <div className="carousel__item-body">
                    <p className="title-slide">Start earning more today.</p>
                    <p>Derive Capital</p>
                  </div>
                </div>
                <div className="carousel__item">
                  <div className="carousel__item-head">💴</div>
                  <div className="carousel__item-body">
                    <p className="title-slide">A better financial approach.</p>
                    <p>Derive Capital</p>
                  </div>
                </div>
                <div className="carousel__item">
                  <div className="carousel__item-head">💸</div>
                  <div className="carousel__item-body">
                    <p className="title-slide">
                      Towards a better financial future.
                    </p>
                    <p>Derive Capital</p>
                  </div>
                </div>
                <div className="carousel__item">
                  <div className="carousel__item-head">💹</div>
                  <div className="carousel__item-body">
                    <p className="title-slide">
                      Where your money lives and grows.
                    </p>
                    <p>Derive Capital</p>
                  </div>
                </div>
                <div className="carousel__item">
                  <div className="carousel__item-head">💱</div>
                  <div className="carousel__item-body">
                    <p className="title-slide">Five-star service guaranteed.</p>
                    <p>Derive Capital</p>
                  </div>
                </div>
                <div className="carousel__item">
                  <div className="carousel__item-head">💶</div>
                  <div className="carousel__item-body">
                    <p className="title-slide">Quality in everything we do.</p>
                    <p>Derive Capital</p>
                  </div>
                </div>
                <div className="carousel__item">
                  <div className="carousel__item-head">💰</div>
                  <div className="carousel__item-body">
                    <p className="title-slide">We know money.</p>
                    <p>Derive Capital</p>
                  </div>
                </div>
                <div className="carousel__item">
                  <div className="carousel__item-head">💷</div>
                  <div className="carousel__item-body">
                    <p className="title-slide">Start earning more today.</p>
                    <p>Derive Capital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Link to="" className="float56" onClick={() => setPostIsOpen(true)}>
          <i className="fa fa-info"></i>
        </Link>
        <Postmodal
          postIsOpen={postIsOpen}
          setPostIsOpen={setPostIsOpen}
        ></Postmodal>
        <div className="social-icons">
          <a className="s-icons" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="s-icons" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="s-icons" href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="s-icons" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="s-icons" href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        {/* page-2 */}
        <section className="second-box">
          <div className="second-box-left">
            <img className="grid-1" src={image4} alt="#"></img>

            <h1>
              ALL FINANCIAL SOLUTIONS
              <span> UNDER ONE ROOF</span>
            </h1>
            <p>
              Get all your financial footprint under one app without the hassle
              of juggling between different apps. Track your net worth with
              extreme ease.
            </p>
          </div>{" "}
          <div className="second-box-right">
            <div className="categories">
              <div className="row-home">
                <Box_component Icon={image28} Text={"Tax Planning"} />
                <Box_component Icon={image26} Text={"Investment Planning"} />
                <Box_component Icon={image29} Text={"Wealth Planning"} />
              </div>
              <div className="row-home">
                <Box_component Icon={image33} Text={"Retirement Planning"} />
                <Box_component Icon={image31} Text={"Estate Planning"} />
                <Box_component Icon={image27} Text={"Mutual Fund"} />
              </div>
            </div>
          </div>
        </section>{" "}
        <section className="thirteen-box">
          {" "}
          <div className="thirteen-box-left">
            <img className="grid-2" src={image6} alt="#"></img>

            <h1>
              UNDERSTAND YOUR
              <span id="text-3"> MONEY BETTER</span>
            </h1>
            <p>
              Because tracking it isn’t enough. Derive gives you helpful
              insights on how you can spend and save smarter. Pay bills and
              track subscriptions with automatic reminders to avoid nasty
              surprises.
            </p>
          </div>{" "}
          <div className="thirteen-box-right">
            <div className="box-animate">
              {" "}
              <div className="text-animate">
                <div>
                  <h3>
                    {" "}
                    Top-ranking financial services guaranteed. Financial advice
                    to get you back where you belong. We handle your money with
                    high standards. Our business is to understand your business.
                    {/* It’s time to seek financial advice from experts. We
                    guarantee the worthiness of every money transaction.
                    Creative financial solutions. Giving your savings the
                    opportunity to grow. */}
                  </h3>{" "}
                  <Link to="/AppointmentModal" >
                    Book Appointment
                  </Link>
                
                </div>{" "}
              </div>
            </div>
          </div>
        </section>
        <section className="third-box">
          <div className="third-box-left">
            <img className="grid-3" src={image8} alt="#"></img>

            <h1>
              BUILD YOUR
              <span> OWN CARD</span>
            </h1>
            <p className="text-11">
              A card that is as dynamic as you are. Choose offers that suit you
              the best and withdraw free credit limit on the same.
            </p>
          </div>
          <div className="third-box-right">
            <div className="wrapper-main">
              <div className="outer-main">
                <div className="card-main">
                  <div className="content-main">
                    <div className="img-main">
                      <img src={logo} alt="" />
                    </div>
                    <div className="details-main">
                      <span className="name-main">Derive Capital</span>
                      <p>Own Card</p>
                    </div>
                  </div>
                  {/* <a href="#">Follow</a> */}
                </div>
                <div className="card-main">
                  <div className="content-main">
                    <div className="img-main">
                      <img src={logo} alt="" />
                    </div>
                    <div className="details-main">
                      <span className="name-main">Derive Capital</span>
                      <p>Own Card</p>
                    </div>
                  </div>
                  {/* <a href="#">Follow</a> */}
                </div>
                <div className="card-main">
                  <div className="content-main">
                    <div className="img-main">
                      <img src={logo} alt="" />
                    </div>
                    <div className="details-main">
                      <span className="name-main">Derive Capital</span>
                      <p>Own Card</p>
                    </div>
                  </div>
                  {/* <a href="#">Follow</a> */}
                </div>
                <div className="card-main">
                  <div className="content-main">
                    <div className="img-main">
                      <img src={logo} alt="" />
                    </div>
                    <div className="details-main">
                      <span className="name-main">Derive Capital</span>
                      <p>Own Card</p>
                    </div>
                  </div>
                  {/* <a href="#">Follow</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fourth-box">
          <div className="fourth-box-left">
            <img className="grid-4" src={image10} alt="#"></img>
            <div className="box-16"></div>
            <h1>
              PUT SAVINGS ON
              <span> AUTOPILOT</span>
            </h1>
            <p>
              MacBook ? Bali trip with gang ? Derive makes it happen. We’ll set
              your extra money aside automatically. What’s more? You can share
              jars & save together with friends & family!
            </p>{" "}
          </div>

          <div className="fourth-box-right">
            <div id="slider12">
              <figure>
                <img src={piggy} alt="" height="350" width="250" />
                <img src={Machine} alt="" height="350" width="250" />
                <img src={atm} alt="" height="350" width="250" />
                <img src={card} alt="" height="350" width="250" />{" "}
                <img src={Machine} alt="" height="350" width="250" />
              </figure>
            </div>
            {/* <video loop autoPlay className="big-img5" muted>
              <source src={tripv} type="video/mp4" />
            </video> */}
          </div>
        </section>
        <section className="fifth-box">
          {" "}
          <div className="fifth-box-left">
            <img className="grid-5" src={image12} alt="#"></img>
            <div className="box-17"></div>
            <h1>
              DERIVE COACH TO THE
              <span> RESCUE!</span>
            </h1>
            <p>
              How to budget? Am I spending too fast? How can I sort my salary
              better? Derive coach will be the financial manager aka saviour
              sitting in your pocket. And it’s available 24x7.
            </p>
          </div>{" "}
          <div className="fifth-box-right">
            <div class="imgLoader"></div>

            <div class="container55">
              <div className="book55">
                <div className="gap55"></div>
                <div className="pages55">
                  <div className="page55"></div>
                  <div className="page55"></div>
                  <div className="page55"></div>
                  <div className="page55"></div>
                  <div className="page55"></div>
                  <div className="page55"></div>
                </div>
                <div className="flips">
                  <div className="flip flip1">
                    <div className="flip flip2">
                      <div className="flip flip3">
                        <div className="flip flip4">
                          <div className="flip flip5">
                            <div className="flip flip6">
                              <div className="flip flip7"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sixth-box">
          <div className="container-padding popular-sites">
            <h2>Useful Links</h2>

            <Carousel
              showArrows={true}
              breakPoints={
                window.innerWidth > 1230
                  ? breakPoints3
                  : window.innerWidth > 990
                  ? breakPoints2
                  : window.innerWidth > 900
                  ? breakPoints2
                  : breakPoints2
              }
            >
              {img_arr3.map((img1, index) => (
                <div onClick={handleClick} className="sites-card">
                  <img src={img1} alt="" />
                  <h3>{img_arr4[index]}</h3>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
        {/* <section className="seventh-box">
          <div className="control-container">
            <div className="scroller">
              <h1 className="others">Others</h1>{" "}
              <h1 className="derivers">DERIVERS</h1>{" "}
              <button className="dragger" toggle={toggle}>
                <img alt="mover" src={arrow} onClick={() => setToggle(true)}  />  
              </button>{" "}
              <img alt="Derive Capital" onClick={() => setToggle(false)} className="" src={happy} />
            </div>
          </div>
        </section> */}
        <section className="eighth-box">
          <div className="eighth-box-left">
            <img src={image17} alt="#" className="security-img"></img>
          </div>{" "}
          <div className="eighth-box-right">
            <h1>
              DERIVE GIVES SECURITY & <span>CONTROL ON THE GO!</span>
            </h1>
            <p>
              We’ve implemented the highest standards for fraud protection and
              compliance with bank-grade security of 256-bit encryption and
              promise to never sell your data.
            </p>
          </div>
        </section>
        <section className="ninth-box">
          <section id="client">
            <div className="client-heading">
              <span>Testimonials</span>
            </div>

            <div className="c-box-container">
              <div className="client-box">
                <img src={man2} alt="Derive Capital" />

                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>

                <p>
                  If you're looking for random paragraphs, you've come to the
                  right place. When a random word or a random sentence isn't
                  quite enough, the next logical step is to find a random
                  paragraph.{" "}
                </p>

                <a href="#">Read More</a>
              </div>

              <div className="client-box">
                <img src={man3} />

                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <p>
                  If you're looking for random paragraphs, you've come to the
                  right place. When a random word or a random sentence isn't
                  quite enough, the next logical step is to find a random
                  paragraph.{" "}
                </p>

                <a href="#">Read More</a>
              </div>

              <div class="client-box">
                <img src={woman1} />

                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <p>
                  If you're looking for random paragraphs, you've come to the
                  right place. When a random word or a random sentence isn't
                  quite enough, the next logical step is to find a random
                  paragraph.{" "}
                </p>

                <a href="#">Read More</a>
              </div>
            </div>
          </section>
        </section>{" "}
        <section className="tenth-box">
          <div className="tenth-box-left">
            <img src={man} alt="derive" className="man-img" />
          </div>
          <div className="tenth-box-right">
            <div className="text-right">
              <h2>Pricing ?</h2>
              <span>It's</span>
              <span>FREE</span>
              <h6>We say no to fees</h6>
            </div>
          </div>
        </section>{" "}
        <section className="eleventh-box">
          {/* <div className="site-register"> */}
          <h2 className="text-center3">Projects statistics</h2>
          <div class="project-counter-wrp">
            <ul>
              <li>
                <i className="fa fa-trophy fa-4x"></i>
                <p id="number1" className="number22">
                  500
                </p>
                <span></span>
                <p>Projects Done</p>
              </li>
              <li>
                <i className="fa fa-smile fa-4x"></i>
                <p id="number2" className="number22">
                  289
                </p>
                <span></span>
                <p>Happy Clients</p>
              </li>
              <li>
                <i className="fa fa-check-circle fa-4x"></i>
                <p id="number3" className="number22">
                  359
                </p>
                <span></span>
                <p>Service Quality</p>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </section>{" "}
        <section className="twelve-box">
          <div class="slider77">
            <div class="slide-track">
              {img_arr.map((img, index) => (
                <div class="slide55" key={index}>
                  <img src={img} height="70" width="250" alt="Derive Capital" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div></div>
    </>
  );
};

export default Home;
