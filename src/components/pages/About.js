import React from "react";
import "../css/style.css";
const About = () => (
  <div>
     <section>
        <h2> <strong>About Me</strong></h2>
    </section>
    <section>
        <img src={require('../images/Brice_Boutet.jpg')} alt="Brice Boutet"/>
        <h3><strong>Bakground</strong></h3>
        <p> Mechanical Engineering degre from the University of Tours, France and currently attending the University of Toronto coding boot camp.</p>
        <p>Work experience in operations and maintenance of telemetry data acquisition and processing equipment.</p>
        <h3><strong>My dream job</strong> </h3>
        <p> I would like to start career in software or web development, where I will be using problem solving skills to bring solution to real world numeric problems and learn continuously.</p>
        <h3><strong>Why developer</strong></h3>
        <p> I am fascinated by algorithms, codes and calculation behind the user interface of a software or web applications.  </p>
        <h3><strong>Where I live</strong></h3>
        <p>I am in Brampton in Great Toronto Area. </p>
    </section>
  </div>
);

export default About;
