import React, { Component } from "react";
import SocialButton from "../components/SocialButton";

class Login extends Component {

  handleSocialLogin = async user => {
    const data = await fetch(
      "https://book-a-desk-api.herokuapp.com/api/v1/auth/github/callback",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }
    ).then(res => res.json(res));

    if (data.message === "Invalid username or password") {
      alert("nope");
    } else {
      localStorage.setItem("token", data.jwt);
      this.props.updateToken(data.jwt);
    }
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
          gatekeeper="https://flatiron-gate.herokuapp.com"
          onLoginSuccess={this.handleSocialLogin}
          redirect="https://book-a-desk.herokuapp.com"
          onLoginFailure={this.handleSocialLoginFailure}
        >
          Login with Github
        </SocialButton>
      </div>
    );
  }
}

export default Login;
