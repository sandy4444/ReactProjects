import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = {
    acount: { username: "", password: "" },
    error: {},
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //console.clear();
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errorMessage = this.validate(input);
    const error = { ...this.state.error};
    if (errorMessage != null) error[input.name] = errorMessage;
    else delete error[input.name];

    const account = { ...this.state.acount };
    account[input.name] = input.value;
    this.setState({ acount: account, error: error || {} });
  };
  
  validate = (input) => {
    if (input.name == "username" && input.value.trim().length == 0) {
      return "Username is required";
    }
    if (input.name == "password" && input.value.trim().length == 0) {
      return "Password is required";
    }
    return null;
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
        <p class="font-weight-bold text-center" >Login Form</p>
          <form onSubmit={this.handleSubmit} className = "border border-danger p-3 mb-4 bg-dark text-white">
            <Input
              value={this.state.acount.username.value}
              inputName="username"
              classType="form-control"
              Type="email"
              placeHolder="Enter Email"
              Id="email"
              Label="Email : "
              onChangeEvent={this.handleChange}
              inputError={this.state.error.username}
            ></Input>
            <Input
              value={this.state.acount.password.value}
              classType="form-control"
              inputName="password"
              Type="password"
              placeHolder="Enter Password"
              Id="psw"
              Label="Password : "
              onChangeEvent={this.handleChange}
              inputError={this.state.error.password}
            ></Input>

            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" /> Remember
                me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
