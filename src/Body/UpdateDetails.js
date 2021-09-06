import { Component, state, sendData, updatehandler } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();


class UpdateDetails extends Component {
  state = {
    checkupdate: false,
    name: '',
    mobile: '',
    id: this.props.match.params.id,
    config: {
      headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    }
  }

  sendData = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  updatehandler = (e) => {
    e.preventDefault();
    axios.put("http://localhost:90/client/update/", this.state, this.state.config)
      .then((response) => {
        console.log(response)
        this.setState({
          checkupdate: true,
          message: response.data.message
        })
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

  componentDidMount() {
    axios.get("http://localhost:90/profile",this.state.config)
      .then((response) => {
        console.log(response)
        this.setState({
          name: response.data.data.name,
          mobile: response.data.data.mobile,
        })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
  render() {
    if (this.state.checkupdate === true) {
      return window.location.href = '/profile'
    }
    else {
      var redirect =
        <div class="container card-0 justify-content-center ">
          <div class="card-body px-sm-4 px-0">
            <div class="row justify-content-center mb-5">
              <div class="col-md-10 col">
                <h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Update your Detail </h3>
              </div>
            </div>
            <div class="row justify-content-center round">
              <div class="col-lg-10 col-md-12 ">
                <div class="card shadow-lg card-1">
                  <div class="card-body inner-card">
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-10 col-12">
                        <label for="first-name">Name</label>
                        <input type="text" class="form-control" id="first-name"
                          name="name"
                          value={this.state.name}
                          onChange={this.sendData} />
                      </div>
                      <div class="col-md-12 col-lg-10 col-12">
                        <label for="first-name">Mobile</label>
                        <input type="text" class="form-control" id="mobile"
                          name="mobile"
                          value={this.state.mobile}
                          onChange={this.sendData} />
                      </div>
                    </div>
                    <div class="row justify-content-end mb-5">
                      <div class="col-lg-4 col-auto ">
                        <button type="button" class="btn btn-primary btn-block" onClick={this.updatehandler}>
                          <small class="font-weight-bold">Update Details</small>
                        </button>
                      </div>
                    </div>
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
export default UpdateDetails;