import React from "react";
import EmployeeDirectory from "../images/employee-directory.gif";
import TeamGenerator from "../images/team-generator.gif";
import DeveloperProfil from "../images/developer-profil.gif";
import WeatherDashboard from "../images/weather-dashboard.gif";
import DailyCarpool from "../images/daily-carpool.gif";

const Portfolio = () => (
        <main>
            <h2> <strong>Make a tour through my web developer work...</strong></h2>
            <section className="portfolio row justify-content-center ">
            <div className="card d-inline-block m-2">
                <div className="card-header d-flex p-2">
                    <p><strong>Employee directory</strong></p>
                </div>
                <div className="summary card-body d-flex p-1">
                  <p>This app is an employee directory build with React to search or sort employees by name, role or department.</p>
                </div>
                <div className="card-body card-footer p-1 pt-2 pb-2">
                    <img className="w-100" src={EmployeeDirectory} alt=""/>
                </div> 
                <ul className="card-footer pt-1 pb-1 mb-1">
                    <li>
                        <a href={"https://bboutet1.github.io/employee-directory/"}>Deployed application</a>
                    </li>
                    <li>
                        <a href={"https://github.com/BBoutet1/employee-directory"}>Github repository</a>
                    </li>
                </ul>
            </div>
       
            <div className="card d-inline-block m-2">
                <div className="card-header d-flex p-2">
                    <p><strong>Employee template engine</strong></p>
                </div>
                <div className="summary card-body d-flex p-1">
                    <p>A Node CLI team generator that takes in information about employees and generates an HTML webpage.</p>
                </div>
                <div className="card-body card-footer p-1 pt-2 pb-2">
                    <img className="w-100" src={TeamGenerator} alt=""/>
                </div> 
                <ul className="card-footer pt-1 pb-1 mb-1">
                    <li>
                        <p> CLI Installation: <strong>node app.js </strong> inside /Develop </p>
                    </li>
                    <li>
                        <a href={"https://github.com/BBoutet1/employee-template-engine"}>Github repository</a>
                    </li>
                </ul>
            </div>

             <div className="card d-inline-block m-2">
                <div className="card-header d-flex p-2">
                    <p><strong>Developer profil generator</strong></p>
                </div>
                <div className="summary card-body d-flex p-1">
                    <p>A Node CLI team generator that takes in information about employees and generates an HTML webpage.</p>
                </div>
                <div className="card-body card-footer p-1 pt-2 pb-2">
                    <img className="w-100" src={DeveloperProfil} alt=""/>
                </div> 
                <ul className="card-footer pt-1 pb-1 mb-1">
                    <li>
                        <p> CLI Installation: <strong> node index.js.</strong> Follow README</p>
                    </li>
                    <li>
                        <a href={"https://github.com/BBoutet1/developer_profile_generator"}>Github repository</a>
                    </li>
                </ul>
            </div>

            <div className="card d-inline-block m-2">
                <div className="card-header d-flex p-2">
                    <p><strong>Weather dashboard</strong></p>
                </div>
                <div className="summary card-body d-flex p-1">
                    <p>This web application retrieves data from the OpenWeather Third-party API to build a weather dashboard that runs in the browser and feature dynamically updated HTML and CSS.</p>
              </div>
                <div className="card-body card-footer p-1 pt-2 pb-2">
                    <img className="w-100" src={WeatherDashboard} alt=""/>
                </div> 
                <ul className="card-footer pt-1 pb-1 mb-1">
                    <li>
                        <a href={"https://bboutet1.github.io/Weather_Dashboard/"}>Deployed application</a>
                    </li>
                    <li>
                        <a href={"https://github.com/BBoutet1/Weather_Dashboard"}>Github repository</a>
                    </li>
                </ul>
            </div>

            <div className="card d-inline-block m-2">
                <div className="card-header d-flex p-2">
                    <p><strong>Daily commute carpool</strong></p>
                </div>
                <div className="summary card-body d-flex p-1">
                    <p>Under construction and using google maps API, this project aims to match workers that have their daily commute (work) route and time close to share a daily ride.</p>
                </div>
                <div className="card-body card-footer p-1 pt-2 pb-2">
                    <img className="w-100" src={DailyCarpool} alt=""/>
                </div> 
                <ul className="card-footer pt-1 pb-1 mb-1">
                    <li>
                        <a href={"https://dashboard.heroku.com/apps/daily-commuter-carpool"}>Deployed application</a>
                    </li>
                    <li>
                        <a href={"https://github.com/BBoutet1/project2_daily-carpool"}>Github repository</a>
                    </li>
                </ul>
            </div>
            
            
      </section>
        </main>
);

export default Portfolio;
