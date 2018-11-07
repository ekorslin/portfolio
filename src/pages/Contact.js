import React, { Component } from "react";
import axios from "axios";


class Contact extends Component {

  submit = (event) => {
    event.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3000/submit", 
      data: {
          name: this.refs.name.value,   
          email: this.refs.email.value,  
          messsage: this.refs.message.value
      }
  }).then((response)=>{
      if (response.data.msg === 'success'){
          alert("Message Sent."); 
          this.resetForm()
      }else if(response.data.msg === 'fail'){
          alert("Message failed to send.")
      }
  })
}

  render() {
    return (
      <div>
 <br/>
 <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
      <div className="card"><br/>
      <h3>Contact Eric Today</h3><p>---</p>
 <p>Have a question for Eric?  <br/>Send him a quick note.  He will respond to you A.S.A.P.</p>
      <form id="form">
       Name:*<br/><input type="text" ref="name"/><br/>
       Email:*<br/><input columns="100" type="email" ref="email"/><br/>
       Message:*<br/><textarea rows="5" columns="1000" type="text" ref="message"/><br/>
       <button className="btn2" method="POST" onClick={this.submit.bind(this)}>S U B M I T</button>
      </form><br/></div></div>
      <div className="col-md-2"></div>
      </div><br/>
      </div>
    );
  }
}

export default Contact;
