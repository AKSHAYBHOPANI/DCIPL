import first from "../assests/first.jpg";
import second from "../assests/second.jpg";
import third from "../assests/third.jpg";
import "./CSS/careers.css";import { Link } from "react-router-dom";

function Careers() {
  return (
    <>
      <div class="pagecontainer">
        <div class="headerimagecontainer">
          <div class="headercontent">
            <h1>
              do what you{" "}
              <img
                src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1345984533_love_360.png"
                alt="Love"
                class="img-responsive"
              />{" "}
              everyday
            </h1>
            <p>
              Want to join the DC team? If you have a passion for planning &
              want to work for a rapidly growing entrepreneurial company, check
              out the listings below or send your resume to{" "}
              <span>careers@dcikigai.com</span>.
            </p>
            <a href="/applynow">Apply Now</a>
          </div>
        </div>
        <div class="benefitscontainer">
          <h2>Benefits of being Deriver</h2>
          <ul>
            <li>
              <img
                src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/501213759_insurance.jpg"
                alt="competitive insurance"
              />
              <h3>competitive Insurance</h3>
              <p>
                We provide health, dental and vision insurance options.
                Complementary life insurance is included too!
              </p>
            </li>
            <li>
              <img
                src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1960341131_pto.jpg"
                alt="paid time off"
              />
              <h3>paid time off</h3>
              <p>
                We believe that if you work hard, you get to play hard too.
                Enjoy paid time off in addition to all main holidays.
              </p>
            </li>
            <li>
              <img
                src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1367242323_retire.jpg"
                alt="retirement options"
              />
              <h3>retirement options</h3>
              <p>
                We care about your retirement and give you the freedom to
                customize your 401(k) options.
              </p>
            </li>
            <li>
              <img
                src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1766766672_attire.jpg"
                alt="casual attire"
              />
              <h3>casual attire</h3>
              <p>
                We keep it classy yet casual, so feel free to wear what you feel
                comfortable in!
              </p>
            </li>
          </ul>
          <ul id="ul2">
            <li>
              <img
                src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1553563634_coffee.jpg"
                alt="coffee and tea bar"
              />
              <h3 id="bottom-adjustment">coffee & tea bar</h3>
              <p>
                Get the juices flowing every morning with complimentary coffee
                and tea.
              </p>
            </li>
            <li>
              <img
                src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/546814012_community.jpg"
                alt="community"
              />
              <h3 id="bottom-adjustment">community</h3>
              <p>
                We host happy hours, employee appreciation events, and some
                awesome team building events.
              </p>
            </li>
            <li>
              <img
                src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/1242376693_cali.jpg"
                alt="california location"
              />
              <h3 id="location">
                <span>Meeting</span>
                <br />
                Online
              </h3>
              <p>
                Our location is located in the heart of sunny , just 15 minutes
                from the beach!
              </p>
            </li>
            <li>
              <img
                src="//s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/231731189_texas.jpg"
                alt="texas location"
              />
              <h3 id="location">
                <span>India location:</span>
                <br />
                Mumbai
              </h3>
              <p>
                Our large location has plenty of free parking away from the
                crowds. There’s a killer Donut shop down the road too.
              </p>
            </li>
          </ul>
        </div>
        <div className="overall-carousel">
          {/* <form onSubmit={onSubmit} enctype="multipart/form-data">
            <h3>Career Opportunities</h3>

            <div className="form-left">
              <label for="enter_email">Enter Email: </label>
              <input
                type="text"
                placeholder="Email"
                name="enter_email"
                id="enter_email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <label for="phone">Mobile No.</label>
              <input
                id="phone"
                name="phone"
                placeholder="Mobile No."
                type="text"
                maxlength="10"
                pattern="[0-9]{10}"
                required
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />

              <label for="upload_resume">Update Resume:</label>
              <input
                type="file"
                name="upload_resume"
                id="upload_resume"
                onChange={onFileChange}
              />

              <button
                className="btn-primary"
                type="submit"
                name="btn-submit"
                id="btn-submit"
              >
                Submit
              </button>
            </div>
          </form> */}
        </div>
        <div class="current-openings" id="joblistings">
          <h2>CURRENT OPENINGS</h2>
        </div>
        {/* <div class="job-labels">
          <h4>POSITION</h4>
          <h4 class="location">LOCATION</h4>
          <h4>POSTING DATE</h4>
        </div> */}
      
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>POSITION</th>
          <th>LOCATION</th>
          <th>POSTING DATE</th>
         
        </tr>
      </thead>
  
  {/* </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0"> */}
      <tbody>
        <tr>
        <td>  <Link to="">Consultants</Link></td>
          <td>Mumbai </td>
          <td>2021-10-09</td>
         
        </tr>
        <tr>
        <td><Link to="">Financial Expert</Link></td>
          <td>Mumbai </td>
          <td>2021-10-09</td>
        </tr>
       
        <tr>
        <td><Link to="">Developer</Link></td>
          <td>Mumbai </td>
          <td>2021-10-09</td>
        </tr>
       
      
      </tbody>
    </table>
  </div>



        {/* <div class="current-openings" id="joblistings">
          <h2>CURRENT OPENINGS</h2>
        </div>
        <div class="job-labels">
          <h4>POSITION</h4>
          <h4 class="location">LOCATION</h4>
          <h4>POSTING DATE</h4>
        </div>
        <div id="whr_embed_hook"></div> */}
      </div>
      
    </>
  );
}
 

export default Careers;
