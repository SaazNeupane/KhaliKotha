import { Component, state, registerClient, registerhandler } from "react";
import axios from 'axios';

class Register extends Component {
  state = {
    checksignup: false,
    name: "",
    mobile: "",
    email: "",
    password: "",
  }

  registerClient = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  registerhandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:90/client/register", this.state)
      .then((response) => {
        console.log(response)
        this.setState({
          checksignup: true,
          message: response.data.message
        })
      })
      .catch(err => {
        console.log(err)
      })

  }
  render() {
    if (this.state.checksignup === true) {
      return window.location.href = '/login'
    }
    else {
      var redirect =
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card card-signin flex-row my-5">
                <div className="card-img-left d-none d-md-flex">
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center"><b>Register</b></h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input type="text" id="inputName" className="form-control" placeholder="Name"
                        name="name" value={this.state.name}
                        onChange={this.registerClient}
                        required autoFocus />
                      <label htmlFor="inputName">Name</label>
                    </div>

                    <div className="form-label-group">
                      <input type="text" id="inputMobile" className="form-control" placeholder="Mobile"
                        name="mobile" value={this.state.mobile}
                        onChange={this.registerClient}
                        required />
                      <label htmlFor="inputMobile">Mobile</label>
                    </div>

                    <div className="form-label-group">
                      <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                        name="email" value={this.state.email}
                        onChange={this.registerClient}
                        required />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                        name="password" value={this.state.password}
                        onChange={this.registerClient}
                        required />
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="form-label-group">
                      <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Confirm Password" required />
                      <label htmlFor="inputConfirmPassword">Confirm Password</label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" href="/login" onClick={this.registerhandler}>Register</button>
                    <a className="d-block text-center mt-2 small" href="/login" styles="margin bottom: 10px;">Sign In</a>
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
export default Register;