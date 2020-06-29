import React from "react";
import "../css/style.css";
const Contact = () => (
  <main className="container bg-white">

        <h2> <strong>Contact</strong></h2>
        <section className="aboutMe">
            <form action="mailto:boutetlb@gmail.com" method="post">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" id="usr" name="name"/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="form-group">
                    <label>Comment:</label>
                    <textarea className="form-control" rows="5" id="comment" name="message"></textarea>
                </div>
                <div>
                    <input type="submit" className="btn" value="Send"/>
                </div>
            </form>
        </section>
    </main>
);

export default Contact;
