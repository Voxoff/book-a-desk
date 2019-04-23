import React, { Component } from "react";
import SocialButton from "../components/SocialButton";
import API from '../API'

class Login extends Component {

  handleSocialLogin = async user => {
    API.post(API.callbackURL, user)
    .then(data => {
      if (data.message === "Invalid username or password") {
        alert("nope");
      } else {
        localStorage.setItem("token", data.jwt);
        this.props.updateToken(data.jwt);
      }
    })

  };

   handleSocialLoginFailure = err => {
    console.error(err);
  };

  render() {

    return (
      <div className="Login">
        <SocialButton
          provider="github"
          appId="19afa3f5fa107ddca86a"
          gatekeeper={API.gatekeeperURL}
          onLoginSuccess={this.handleSocialLogin}
          redirect={API.reactURL}
          onLoginFailure={this.handleSocialLoginFailure}
        >
          Login with Github
        </SocialButton>
      </div>
    );
  }
}

export default Login;
