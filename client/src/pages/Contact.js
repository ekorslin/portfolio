import React, { Component } from "react";
import nodemailer from 'nodemailer';


class Contact extends Component {

  submit = (event) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'eric.korslin@gmail.com',
        pass: 'Cubs2016!'
      }
    });
    
    var mailOptions = {
      from: this.refs.email.value,
      to: 'eric.korslin@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
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
      <form>
       Name:*<br/><input type="text" ref="name"/><br/>
       Email:*<br/><input columns="100" type="email" ref="email"/><br/>
       Message:*<br/><textarea rows="5" columns="1000" type="text" ref="message"/><br/>
       <button className="btn2" onClick={this.submit.bind(this)}>S U B M I T</button>
      </form><br/></div></div>
      <div className="col-md-2"></div>
      </div><br/>
      </div>
    );
  }
}

export default Contact;
