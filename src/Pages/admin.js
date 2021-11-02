import React, { useState, useEffect } from "react";
import "./CSS/admin.css";
import Login from "./login";

function Admin(Profile) {
  const [IsSignIn, setIsSignIn] = useState(false);
  const [UsersCount, setUsersCount] = useState("");
  var [date, setDate] = useState(new Date());
  const GetUsers = () => {
    document.getElementById("logo").style.display = "block";
    fetch("https://server.yourtechshow.com/users")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        var txt = "";
        var i = "";
        txt += "<table>";
        txt += "<tr>";
        txt += "<th>ID</th>";
        txt += "<th>Name</th>";
        txt += "<th>Email</th>";
        txt += "<th>Joined</th>";
        txt += "</tr>";
        for (i = 0; i < response.length; i++) {
          txt += "<tr>";
          txt += "<td>" + response[i].id + "</td>";
          txt += "<td>" + response[i].name + "</td>";
          txt += "<td>" + response[i].email + "</td>";
          txt += "<td>" + response[i].joined + "</td>";
          txt += "</tr>";
        }
        txt += "</table>";
        document.getElementById("users").innerHTML = txt;
        document.getElementById("logo").style.display = "none";
      });
  };

  const GetResume = () => {
    document.getElementById("logo").style.display = "block";
    fetch("https://server.yourtechshow.com/resumes")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        var txt = "";
        var i = "";
        txt += "<table>";
        txt += "<tr>";
        txt += "<th>Name</th>";

        txt += "</tr>";
        for (i = 0; i < response.length; i++) {
          txt += "<tr>";

          txt +=
            "<td>" +
            `<a href=https://server.yourtechshow.com/Resumes/${response[i]}>` +
            response[i] +
            "</td>" +
            "</a>" +
            "</a>";

          txt += "</tr>";
        }
        txt += "</table>";
        document.getElementById("users").innerHTML = txt;
        document.getElementById("logo").style.display = "none";
      });
  };

  const GetOnboarding = () => {
    document.getElementById("logo").style.display = "block";
    fetch("https://server.yourtechshow.com/onboarding-data")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        var txt = "";
        var i = "";
        txt += "<table>";
        txt += "<tr>";
        txt += "<th>ID</th>";
        txt += "<th>Name</th>";
        txt += "<th>Email</th>";
        txt += "<th>Age</th>";
        txt += "<th>Assets</th>";
        txt += "<th>Liabilities</th>";
        txt += "<th>CIBIL</th>";
        txt += "<th>Fixed Income</th>";
        txt += "<th>Fixed Expenses</th>";
        txt += "<th>Expected DSAL</th>";
        txt += "<th>Debt By Income</th>";
        txt += "<th>FOIR</th>";
        txt += "<th>Debt By Assets</th>";
        txt += "<th>Recurring</th>";
        txt += "<th>Withdraw Principle</th>";
        txt += "<th>Period</th>";
        txt += "<th>Source Of Income</th>";
        txt += "<th>Major Expenses</th>";
        txt += "<th>Stock Invest</th>";
        txt += "<th>Bond Invest</th>";
        txt += "<th>Goal</th>";
        txt += "<th>Yearly Invested</th>";
        txt += "<th>Over Time</th>";
        txt += "<th>Yearly Expect</th>";
        txt += "<th>Long Term Growth</th>";
        txt += "<th>Portfolio</th>";
        txt += "<th>Outlook Short Term</th>";
        txt += "<th>Outlook Long Term</th>";
        txt += "<th>Objective</th>";
        txt += "<th>Risk Willingness</th>";
        txt += "<th>Risk Ability</th>";
        txt += "<th>Total Risk</th>";
        txt += "</tr>";
        for (i = 0; i < response.length; i++) {
          txt += "<tr>";
          txt += "<td>" + response[i].id + "</td>";
          txt += "<td>" + response[i].name + "</td>";
          txt += "<td>" + response[i].email + "</td>";
          txt += "<td>" + response[i].age + "</td>";
          txt += "<td>" + response[i].assets + "</td>";
          txt += "<td>" + response[i].liabilities + "</td>";
          txt += "<td>" + response[i].cibil + "</td>";
          txt += "<td>" + response[i].fixedincome + "</td>";
          txt += "<td>" + response[i].fixedexpense + "</td>";
          txt += "<td>" + response[i].expectedsal + "</td>";
          txt += "<td>" + response[i].debt_by_income + "</td>";
          txt += "<td>" + response[i].foir + "</td>";
          txt += "<td>" + response[i].debt_by_assets + "</td>";
          txt += "<td>" + response[i].reccuring + "</td>";
          txt += "<td>" + response[i].withdrawprincipal + "</td>";
          txt += "<td>" + response[i].period + "</td>";
          txt += "<td>" + response[i].sourceofincome + "</td>";
          txt += "<td>" + response[i].majorexpense + "</td>";
          txt += "<td>" + response[i].stockinvest + "</td>";
          txt += "<td>" + response[i].bondnvest + "</td>";
          txt += "<td>" + response[i].goal + "</td>";
          txt += "<td>" + response[i].yearsinvested + "</td>";
          txt += "<td>" + response[i].overtime + "</td>";
          txt += "<td>" + response[i].yearlyexpect + "</td>";
          txt += "<td>" + response[i].longtermgrowth + "</td>";
          txt += "<td>" + response[i].portfolio + "</td>";
          txt += "<td>" + response[i].outlookshorterm + "</td>";
          txt += "<td>" + response[i].outlooklongterm + "</td>";
          txt += "<td>" + response[i].objective + "</td>";
          txt += "<td>" + response[i].riskwillingness + "</td>";
          txt += "<td>" + response[i].riskability + "</td>";
          txt += "<td>" + response[i].totalrisk + "</td>";
          txt += "</tr>";
        }
        txt += "</table>";
        document.getElementById("users").innerHTML = txt;
        document.getElementById("logo").style.display = "none";
      });
  };

  const GetInvestment = () => {
    document.getElementById("logo").style.display = "block";
    fetch("https://server.yourtechshow.com/investment")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        var txt = "";
        var i = "";
        txt += "<table>";
        txt += "<tr>";
        txt += "<th>ID</th>";
        txt += "<th>Name</th>";
        txt += "<th>Email</th>";
        txt += "<th>Total Income</th>";
        txt += "<th>Total Expenses</th>";
        txt += "<th>Assests</th>";
        txt += "<th>Liabilities</th>";
        txt += "<th>Investable Amount</th>";
        txt += "<th>Target Amount</th>";
        txt += "<th>Time</th>";
        txt += "<th>Income Stability</th>";
        txt += "<th>Surplus</th>";
        txt += "<th>Margin</th>";
        txt += "<th>Break Even</th>";
        txt += "<th>Margin Of Safety</th>";
        txt += "<th>Margin Of Safety Rs</th>";
        txt += "<th>Burn Rate</th>";
        txt += "<th>Return</th>";
        txt += "<th>NetWorth</th>";
        txt += "<th>Risk Ability</th>";
        txt += "<th>Target Return</th>";
        txt += "</tr>";
        for (i = 0; i < response.length; i++) {
          txt += "<tr>";
          txt += "<td>" + response[i].id + "</td>";
          txt += "<td>" + response[i].name + "</td>";
          txt += "<td>" + response[i].email + "</td>";
          txt += "<td>" + response[i].totalincome + "</td>";
          txt += "<td>" + response[i].totalexpenses + "</td>";
          txt += "<td>" + response[i].assests + "</td>";
          txt += "<td>" + response[i].liabilities + "</td>";
          txt += "<td>" + response[i].investableamount + "</td>";
          txt += "<td>" + response[i].targetamount + "</td>";
          txt += "<td>" + response[i].time + "</td>";
          txt += "<td>" + response[i].incomestability + "</td>";
          txt += "<td>" + response[i].surplus + "</td>";
          txt += "<td>" + response[i].margin + "</td>";
          txt += "<td>" + response[i].breakeven + "</td>";
          txt += "<td>" + response[i].marginofsafety + "</td>";
          txt += "<td>" + response[i].marginofsafetyrs + "</td>";
          txt += "<td>" + response[i].burnrate + "</td>";
          txt += "<td>" + response[i].return + "</td>";
          txt += "<td>" + response[i].networth + "</td>";
          txt += "<td>" + response[i].riskability + "</td>";
          txt += "<td>" + response[i].targetreturn + "</td>";
          txt += "</tr>";
        }
        txt += "</table>";
        document.getElementById("users").innerHTML = txt;
        document.getElementById("logo").style.display = "none";
      });
  };

  const GetStats = () => {
    fetch("https://server.yourtechshow.com/stats-users")
      .then((response) => response.json())
      .then((response) => {
        setUsersCount(response.users);
        return;
      });
  };

  const GetUsersCSV = () => {
    document.getElementById("logo").style.display = "block";
    fetch("https://server.yourtechshow.com/getUserCsv").then((response) => {
      console.log(response);
      if (response.ok) {
        alert("Export Successfully");
        window.location.href = "https://server.yourtechshow.com/users.csv";
      } else {
        alert("Error");
      }
      document.getElementById("logo").style.display = "none";
    });
  };

  const GetOnboardingCSV = () => {
    document.getElementById("logo").style.display = "block";
    fetch("https://server.yourtechshow.com/getOnboardingCsv").then(
      (response) => {
        console.log(response);
        if (response.ok) {
          alert("Export Successfully");
          window.location.href =
            "https://server.yourtechshow.com/onboarding.csv";
        } else {
          alert("Error");
        }
        document.getElementById("logo").style.display = "none";
      }
    );
  };

  const GetInvestmentsCSV = () => {
    document.getElementById("logo").style.display = "block";
    fetch("https://server.yourtechshow.com/getInvestmentCsv").then(
      (response) => {
        console.log(response);
        if (response.ok) {
          alert("Export Successfully");
          window.location.href =
            "https://server.yourtechshow.com/investment.csv";
        } else {
          alert("Error");
        }
        document.getElementById("logo").style.display = "none";
      }
    );
  };
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      {Profile.Profile.IsSignIn ? (
        <>
          <div className="overall_admin">
            {console.log(Profile)}
            <h2>
              Welcome, <span className="admin">Admin</span> <br />
              Today is {date.toLocaleString()}
            </h2>

            <h2 className="register">Total Registered Users = {UsersCount}</h2>

            <div className="sidebar_admin">
              <div className="logo-details">
                <span className="logo_name">DC Ikigai</span>
              </div>
              <ul className="nav-links">
                <li>
                  <a href="#" className="active">
                    <i className="bx bx-grid-alt"></i>
                    <span className="links_name">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-box"></i>
                    <span className="links_name">Product</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-list-ul"></i>
                    <span className="links_name">Order list</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-pie-chart-alt-2"></i>
                    <span className="links_name">Analytics</span>
                  </a>
                </li>
                <li>
                  <a href="/scheduler">
                    <i class="bx bx-coin-stack"></i>
                    <span class="links_name">Scheduler</span>
                  </a>
                </li>
                <li>
                  <a onClick={GetResume}>
                    <i className="bx bx-book-alt"></i>
                    <span className="links_name">Resumes</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-user"></i>
                    <span className="links_name">Team</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-message"></i>
                    <span className="links_name">Messages</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-heart"></i>
                    <span className="links_name">Address</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bx-cog"></i>
                    <span className="links_name">Setting</span>
                  </a>
                </li>
              </ul>
            </div>
            <section className="home-section">
              <div class="home-content">
                <div class="overview-boxes">
                  <div class="box_home">
                    <div class="right-side">
                      <div class="box-topic">Export Users Data</div>
                    </div>
                    <a onClick={GetUsersCSV}>
                      {" "}
                      <i class="bx bxs-download  cart"></i>
                    </a>
                  </div>
                  <div class="box_home">
                    <div class="right-side">
                      <div class="box-topic"> Export Onboarding Data</div>
                    </div>
                    <a onClick={GetOnboardingCSV}>
                      {" "}
                      <i class="bx bxs-download cart two"></i>
                    </a>
                  </div>
                  <div class="box_home">
                    <div class="right-side">
                      <div class="box-topic"> Export Investments Data</div>
                    </div>
                    <a onClick={GetInvestmentsCSV}>
                      {" "}
                      <i class="bx bxs-download cart three"></i>{" "}
                    </a>
                  </div>
                  <div class="box_home">
                    <div class="right-side">
                      <div class="box-topic"> Export Tax Data</div>
                    </div>{" "}
                    <a onClick={GetInvestmentsCSV}>
                      {" "}
                      <i className="bx bxs-download cart four"> </i>
                    </a>
                  </div>
                </div>

                <div class="sales-boxes">
                  <div class="recent-sales box-tit">
                    <div class="title123">Recent Transactions</div>
                    <div class="sales-details">
                      <ul class="details">
                        <li class="topic">ID</li>
                        <li>
                          <a href="#">1109</a>
                        </li>
                        <li>
                          <a href="#">1149</a>
                        </li>
                        <li>
                          <a href="#">1169</a>
                        </li>
                        <li>
                          <a href="#">1109</a>
                        </li>
                        <li>
                          <a href="#">6756</a>
                        </li>
                        <li>
                          <a href="#">875</a>
                        </li>
                        <li>
                          <a href="#">986</a>
                        </li>
                      </ul>
                      <ul class="details">
                        <li class="topic">Date</li>
                        <li>
                          <a href="#">02 Jan 2021</a>
                        </li>
                        <li>
                          <a href="#">02 Jan 2021</a>
                        </li>
                        <li>
                          <a href="#">02 Jan 2021</a>
                        </li>
                        <li>
                          <a href="#">02 Jan 2021</a>
                        </li>
                        <li>
                          <a href="#">02 Jan 2021</a>
                        </li>
                        <li>
                          <a href="#">02 Jan 2021</a>
                        </li>
                        <li>
                          <a href="#">02 Jan 2021</a>
                        </li>
                      </ul>

                      <ul class="details">
                        <li class="topic">Status</li>
                        <li>
                          <a href="#">Delivered</a>
                        </li>
                        <li>
                          <a href="#">Pending</a>
                        </li>
                        <li>
                          <a href="#">Returned</a>
                        </li>
                        <li>
                          <a href="#">Delivered</a>
                        </li>

                        <li>
                          <a href="#">Delivered</a>
                        </li>
                        <li>
                          <a href="#">Pending</a>
                        </li>
                        <li>
                          <a href="#">Delivered</a>
                        </li>
                      </ul>
                      {/* <ul class="details">
                        <li class="topic">Total</li>
                        <li>
                          <a href="#">$204.98</a>
                        </li>
                        <li>
                          <a href="#">$170.66</a>
                        </li>
                        <li>
                          <a href="#">$56.56</a>
                        </li>
                        <li>
                          <a href="#">$44.95</a>
                        </li>
                        <li>
                          <a href="#">$67.33</a>
                        </li>
                        <li>
                          <a href="#">$23.53</a>
                        </li>
                        <li>
                          <a href="#">$46.52</a>
                        </li>
                      </ul> */}
                    </div>
                    {/* <div class="button">
                      <a href="#">See All</a>
                    </div> */}
                  </div>
                  <div class="top-sales box_home">
                    <div class="title123"> Portfolio Allocation</div>
                    <ul class="top-sales-details">
                      <li>
                        {/* <!--<img src="images/sunglasses.jpg" alt="">--> */}
                        <span class="product">
                          {" "}
                          Investment Portfolio Allocation
                        </span>

                        <a href="./features/PortfolioAllocation">
                          {" "}
                          <span class="price">Update</span>{" "}
                        </a>
                      </li>
                      <li>
                        <span class="product">Wealth Portfolio Allocation</span>

                        <a href="./features/wealthPortfolioAllocation">
                          {" "}
                          <span class="price">Update</span>{" "}
                        </a>
                      </li>
                      <li>
                        <span class="product">
                          Retirement Portfolio Allocation
                        </span>

                        <a href="./features/RetirementPortfolioAllocation">
                          {" "}
                          <span class="price">Update</span>{" "}
                        </a>
                      </li>
                      <li>
                        <span class="product">Tax Portfolio Allocation</span>

                        <a href="./features/TaxPortfolioAllocation">
                          {" "}
                          <span class="price">Update</span>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <div className="menu-container">
              <button className="button-a" onClick={GetUsers}>
                Users
              </button>
              <button className="button-a" onClick={GetOnboarding}>
                Onboarding
              </button>
              <button className="button-a" onClick={GetInvestment}>
                Investment
              </button>
              <button className="button-a" onClick={GetUsers}>
                Tax
              </button>
            </div>
            <br />
            <table>
              <div id="users"></div>
            </table>
            {/* <div className="menu-container">
              <a className="button" onClick={GetUsersCSV}>
                Export Users Data
              </a>
              <a className="button" onClick={GetOnboardingCSV}>
                Export Onboarding Data
              </a>
              <a className="button" onClick={GetInvestmentsCSV}>
                Export Investments Data
              </a>
              <a className="button" onClick={GetInvestmentsCSV}>
                Export Tax Data
              </a>
            </div> */}
          </div>
          <br />
          {/* <div className="menu-container">
            <a className="button" href="./features/PortfolioAllocation">
              Update Investment Portfolio Allocation
            </a>
            <a className="button" href="./features/wealthPortfolioAllocation">
              Update Wealth Portfolio Allocation
            </a>
            <a
              className="button"
              href="./features/RetirementPortfolioAllocation"
            >
              Update Retirement Portfolio Allocation
            </a>
            <a className="button" href="./features/TaxPortfolioAllocation">
              Update Tax Portfolio Allocation
            </a>
          </div> */}
          {GetStats()}
          <div id="logo" className="loadingio-spinner-rolling-kswyn6f3gj7">
            <div className="ldio-c9p079igqka">
              <div></div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Login Profile={Profile} setProfile={Profile.setProfile} />
        </div>
      )}
    </>
  );
}

export default Admin;
