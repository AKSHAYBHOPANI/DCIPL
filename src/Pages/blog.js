import React from "react";
import "./CSS/blog.css";
import sky from "../assests/bannersky.png";
import blogx from "../assests/blogimage1.gif";
import blogw1 from "../assests/blogway1.gif";
import blogw2 from "../assests/blogway2.gif";
import blogw3 from "../assests/blogway3.gif";

import blogw4 from "../assests/blogway4.gif";
import blogw5 from "../assests/blogway5.gif";
import blogw6 from "../assests/blogway6.gif";
import blogw7 from "../assests/blogway7.gif";

import blogw8 from "../assests/blogway8.gif";

const blog = () => {
  return (
    <div>
      <div className="header121">
        <h2>Our Blog </h2>
      </div>
      <div className="row121">
        <div className="leftcolumn">
          <div className="card121">
            <h2>Monitor your Money on real-time dashboard</h2>
            <h5>Title description, Jan 7, 2021</h5>
            <img src={sky} className="fakeimg" style={{ height: 400 }} />

            <p>
              We frequently publish new articles about how to master your money
              — and your life. Here are a few of our most recent pieces.
            </p>
            <p>
              Just Start Investing is a money blog that’s on a mission to make
              investing simple and easy. Much of the content relates to
              investing strategies, but there’s plenty of other posts on
              budgeting, banking, and credit cards. There’s also a useful list
              of resources to help kickstart your search for financial services.
            </p>
          </div>
          <div className="card121">
            <h2>Get Rich Slowly - Personal finance that makes sense</h2>
            <h5>Title description, Sep 7, 2021</h5>
            <img src={blogw1} className="fakeimg" style={{ height: 400 }} />

            <p>
              How The 50-30-20 Budget Really Works,A Wealth of Common Sense.
            </p>
            <p>
              Women Who Money is one of the best financial blogs for women. It
              was created to empower women with the knowledge and skills needed
              to make better financial decisions. All of the content is geared
              around the nuances of being a woman in today’s financial world.{" "}
            </p>
          </div>
          <div className="card121">
            <h2>
              Why does Derive Capital collect your Money Stories on the DC
              Wall???
            </h2>
            <h5>Title description, Sep 2, 2021</h5>
            <img src={blogx} className="fakeimg" style={{ height: 400 }} />

            <p>
              {" "}
              Almost all of us come across financial problems and challenges at
              some point in time in our lives. At DC Finance, we are
              constantly….
            </p>
            <p>
              Any time you make a financial decision, whether it’s deciding to
              follow a specific investment strategy or opening a new checking
              account, there will be pros and cons that should be considered.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card121">
            <h3>Giving your savings the opportunity to grow!!!</h3>
            <img src={blogw6} className="fakeimg" style={{ height: 200 }} />

            <p>Ten Steps To Creating A Solid Financial Plan For Yourself.</p>
          </div>
          <div className="card121">
            <h3>Popular Post</h3>
            <img
              src={blogw2}
              className="fakeimg"
              style={{ height: 200 }}
            />{" "}
            <p>
              Derive Capital is serious about your Financial Well Being and Data
              Security!
            </p>
            <br /> <br />
            <h3>Giving your savings the opportunity to grow!!!</h3>
            <img
              src={blogw7}
              className="fakeimg"
              style={{ height: 200 }}
            />{" "}
            <p>Money-Savings Charts To Save More Money.</p>
            <br /> <br />
            <h3>Giving your savings the opportunity to grow!!!</h3>
            <img
              src={blogw8}
              className="fakeimg"
              style={{ height: 200 }}
            />{" "}
            <p>
              {" "}
              How To Build Generational Wealth.Earning More and Saving Less?
            </p>
          </div>{" "}
          <br />
          <div className="card121">
            <h3>Follow Me</h3>

            <div className="col22">
              <a href="#">
                <i class="fab fa-facebook fa-fw"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter fa-fw"></i>
              </a>
              <a href="#">
                <i className="fab fa-google fa-fw"></i>
              </a>
            </div>
            <p>Connect with us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
