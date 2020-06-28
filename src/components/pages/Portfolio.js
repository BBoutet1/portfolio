import React from "react";

const Portfolio = () => (
        <main className="container bg-white portfolio">
            <h2> <strong>Portfolio</strong></h2>
            <section className="portfolioWrap">
                <div className="box">
                    <div className="bg-image"> </div>
                    <div className="text-block ">
                        <p><strong> Weather Dashboard</strong></p>
                        <ul>
                            <li>
                                <a href="https://bboutet1.github.io/Weather_Dashboard/">Deployed application</a>
                            </li>
                            <li>
                                <a href="https://github.com/BBoutet1/Weather_Dashboard">Github repository</a>
                            </li>
                            <li className="page-image" id="st1">
                                <a>screenshot</a>
                                <a href="../Assets/Images/Weather_dashboard.jpg">
                                    <img className="screenshot" src="../Assets/Images/Weather_dashboard.jpg" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="box ">
                    <div className="bg-image"> </div>
                    <div className="text-block ">
                        <p><strong>  Code Quiz Challenge</strong></p>
                        <ul>
                            <li>
                                <a href="https://bboutet1.github.io/Code_quiz/">Deployed application</a>
                            </li>
                            <li>
                                <a href="https://github.com/BBoutet1/Code_quiz">Github repository</a>
                            </li>
                            <li className="page-image" id="st2">
                                <a>screenshot</a>
                                <a href="../Assets/Images/code_quiz.jpg">
                                    <img className="screenshot" src="../Assets/Images/code_quiz.jpg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="box">
                    <div className="bg-image"> </div>
                    <div className="text-block ">
                        <p><strong>  Project: ReciPlease</strong></p>
                        <ul>
                            <li>
                                <a href="https://mg-cpu90.github.io/project1/">Deployed application</a>
                            </li>
                            <li>
                                <a href="https://github.com/MG-cpu90/project1">Github repository</a>
                            </li>
                            <li className="page-image" id="st3">
                                <a>screenshot</a>
                                <a href="../Assets/Images/ReciPlease.jpg">
                                    <img className="screenshot" src="../Assets/Images/ReciPlease.jpg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="box ">
                    <div className="bg-image"> </div>
                    <div className="text-block ">
                        <p><strong> Day Planner</strong></p>
                        <ul>
                            <li>
                                <a href="https://bboutet1.github.io/Day_planner/">Deployed application</a>
                            </li>
                            <li>
                                <a href="https://github.com/BBoutet1/Day_planner">Github repository</a>
                            </li>
                            <li className="page-image" id="st4">
                                <a>screenshot</a>
                                <a href="../Assets/Images/Day_planner.jpg">
                                    <img className="screenshot" src="../Assets/Images/Day_planner.jpg" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
);

export default Portfolio;
