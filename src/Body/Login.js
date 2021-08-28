import { Component, state, loginClient, loginhandler,notify } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class Login extends Component {
  state = {
    email: "",
    password: "",
    checklogin: false,
    message: ''
  }

  notify = () => {

  };

  loginClient = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loginhandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:90/client/login", this.state)
      .then((response) => {
        console.log(response)
        this.setState({
          checklogin: true,
          message: response.data.message
        })
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('clientid', response.data.clientid);
        localStorage.setItem('usertype', response.data.usertype);
      })
      .catch(err => {
        console.log(err)
        this.setState({
          message: err.response.data.message
        })
      })
      toast.error(this.state.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
  }
  render() {
    if (this.state.checklogin === true) {
      return window.location.href = '/'
    }
    if (localStorage.getItem("token")) {
      return window.location.href = '/profile'
    }
    else{
      var redirect =
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h2 className="card-title text-center"><b>Sign In </b></h2>
                  {/* <p>{message}</p> */}
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input type="email" id="inputEmail" className="form-control" placeholder="Email Address"
                        name="email" value={this.state.email}
                        onChange={this.loginClient}
                        required autoFocus />
                      <label htmlFor="inputEmail">Email Address</label>
                    </div>

                    <div className="form-label-group">
                      <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                        name="password" value={this.state.password}
                        onChange={this.loginClient}
                        required />
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.loginhandler}>Sign in</button>
                    <a className="d-block text-center mt-2 small" href="/signup">Create New Account</a>
                  </form>
                  <div className="social_media">
                    <a className="btn btn-lg btn-google btn-block text-uppercase" href="https://accounts.google.com">Sign up with Google</a>
                    <a className="btn btn-lg btn-facebook btn-block text-uppercase" href="https://www.facebook.com/">Sign up with Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    }
    return (
      <div>
        {redirect}
      </div>
    )
  }
}
export default Login;