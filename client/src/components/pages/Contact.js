import React from "react";
import axios from "axios";
import "../css/style.css";

class Contact extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }
    
      handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3000/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        console.log(response)
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', message: ''})
  }

render() {
 return(    <main className="container">
        <section className="hTwo">
            <h2> <strong>I would like to hear from you...</strong></h2>
        </section>
        <section className="aboutMe">
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="post">
                <div className="form-group">
                    <input type="text" className="form-control" value={this.state.name} placeholder="Full Name"  onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} ></textarea>
                </div>
                <div>
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </section>
    </main>
);
}

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }

}



export default Contact;
