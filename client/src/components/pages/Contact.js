import React from "react";
import axios from "axios";
import "../css/style.css";

class Contact extends React.Component {
	state = {
  	name: '',
    email: '',
    subject:'',
  	message: ''
	}
  
    
 
  
  handleChange = event => {
    event.preventDefault()
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value })
  
  }

  handleSubmit = e => {
 
    e.preventDefault();
        console.log(this.state)
    axios({
      method: "POST", 
      url:"/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        console.log(response.data)
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', subject:'', message: ''})
  }

  render() {
    console.log(this.state)
    return (<main className="container">
      <section className="hTwo">
        <h2> <strong>I would like to hear from you...</strong></h2>
      </section>
      <section className="aboutMe">
        <form id="contact-form" onSubmit={this.handleSubmit} method="post">
          <div className="form-group">
            <input type="text" name="name" className="form-control" value={this.state.name} placeholder="Full Name" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="email" name="email" className="form-control" placeholder="Email" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="text" name="subject" className="form-control" placeholder="Subject" value={this.state.subject} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <textarea name="message" className="form-control" placeholder="Your message here..." rows="5" value={this.state.message} onChange={this.handleChange} ></textarea>
          </div>
          <div>
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </section>
    </main>
    );
  }



}



export default Contact;
