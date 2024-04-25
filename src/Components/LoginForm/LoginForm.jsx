// RegistrationForm.js

import React, { Component } from "react";

export default class RegistrationForm extends Component {
  state = {
    
    email: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({  email, password })
      });

      if (response.ok) {
        
        console.log("Login successful");
      } else {
      
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during Login:", error);
    }
  };

  render() {
    return (
      <div className="registration-form">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
       
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
