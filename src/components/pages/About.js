import React from "react";
import "../css/style.css";
import Photo from "../images/Brice_Boutet.jpg"
const About = () => (
  <div>
     <section>
        <h2> <strong>My backgound...</strong></h2>
    </section>
   <section className="aboutMe">
            <picture>
                <img className="profile_image" src={Photo} alt="Brice Boutet"></img>
                <div className="card ">
                    <div className="float-left w-100">
                        <i className="fa fa-map-marker "></i>
                        <p>
                            Brampton,Ontario
                        </p>
                    </div>
                    <div className="float-left w-100">
                        <i className="fa fa-envelope-o "></i>
                        <p>
                            boutetlb@gmail.com
                        </p>
                    </div>
                    <div className="float-left w-100">
                        <i className={"fa fa-mobile-phone "}></i>
                        <p>
                            (+1)647-678-1662
                        </p>
                    </div>
                    <div className="float-left w-100">
                        <i className="fa fa-github"></i>
                        <a href={"https://github.com/BBoutet1 "}>
                            BBoutet1
                            </a>
                    </div>
                    <div className="float-left w-100">
                        <i className="fa fa-linkedin-square "></i>
                        <a href={"https://www.linkedin.com/in/brice-boutet/"}>
                                Linkdin profile
                            </a>
                    </div>
                </div>
            </picture>
            <h3><strong>Education and work experience</strong></h3>
            <p> Engineer-In-Training, international-trained (France). Bilingual: French-English. Currently learning full-stack web development at the University of Toronto while developing my developer portfolio.</p>
            <p>Work experience in operations and maintenance of data acquisition equipment (MLWD telemetry measurements).</p>
            <p>More details in my resume {' '}
                <a className="resume" href={"#"}>here</a>.
            </p>
            <h3><strong>In my dream job</strong> </h3>
            <p> I will be using my problem solving skills to bring solution to real world numeric problems and learn continuously. I am fascinated by algorithms, codes and calculations behind the user interface of a software or web applications. </p>
        </section>
  </div>
);

export default About;
