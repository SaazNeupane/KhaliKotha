import { Component, state, sendAdData, updateadhandler } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();


class UpdateAd extends Component {
  state = {
    checkupdate: false,
    clientid: "",
    adtitle: "",
    primarymobile: "",
    email: "",
    pradesh: "",
    district: "",
    city: "",
    street: "",
    category: "",
    rent: "",
    negotiable: "",
    description: "",
    message: "",
    id: this.props.match.params.id,
    config: {
      headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    }
  }

  sendAdData = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  updateadhandler = (e) => {
    e.preventDefault();
    axios.put("http://localhost:90/ad/update/", this.state, this.state.config)
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
    axios.get("http://localhost:90/ad/fetch/" + this.state.id)
      .then((response) => {
        console.log(response)
        this.setState({
          adtitle: response.data.adtitle,
          pradesh: response.data.pradesh,
          district: response.data.district,
          city: response.data.city,
          street: response.data.street,
          category: response.data.category,
          rent: response.data.rent,
          negotiable: response.data.negotiable,
          description: response.data.description,
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
                <h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Update your Room </h3>
              </div>
            </div>
            <div class="row justify-content-center round">
              <div class="col-lg-10 col-md-12 ">
                <div class="card shadow-lg card-1">
                  <div class="card-body inner-card">
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-10 col-12">
                        <label for="first-name">Ad Title</label>
                        <input type="text" class="form-control" id="first-name"
                          name="adtitle"
                          value={this.state.adtitle}
                          onChange={this.sendAdData} />
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-10 col-12">
                        <h3 class="t">Address</h3>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-lg-5 col-md-6 col-sm-12">
                        <div class="form-group"><label for="first-name">Pradesh</label>
                          <input type="text" class="form-control" id="first-name"
                            name="pradesh" value={this.state.pradesh}
                            onChange={this.sendAdData} />
                        </div>
                        <div class="form-group"> <label for="Mobile-Number">City</label>
                          <input type="text" class="form-control" placeholder=""
                            name="city" value={this.state.city}
                            onChange={this.sendAdData} /> </div>
                      </div>
                      <div class="col-lg-5 col-md-6 col-sm-12">
                        <div class="form-group"> <label for="last-name">District</label>
                          <input type="text" class="form-control" id="last-name" placeholder=""
                            name="district" value={this.state.district}
                            onChange={this.sendAdData} />
                        </div>
                        <div class="form-group"> <label for="phone">Street</label>
                          <input type="text" class="form-control" id="phone" placeholder=""
                            name="street" value={this.state.street}
                            onChange={this.sendAdData} /> </div>
                      </div>
                    </div>

                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-10 col-12">
                        <h3 class="t">Details</h3>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-lg-5 col-md-6 col-sm-12">
                        <div class="form-group"> <label for="inputEmail4">Room Category</label>
                          <select class="form-control"
                            name="category" onChange={this.sendAdData}>
                            <option value="none" selected disabled hidden>
                              Select a category
                            </option>
                            <option value="Room">Room</option>
                            <option value="Hostel">Hostel</option>
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>
                            <option value="Office">Office</option>
                            <option value="Shop">Shop</option>
                          </select> </div>
                        <div class="form-group">
                          <label for="Mobile-Number">Negotiable?</label>
                          <select class="form-control"
                            name="negotiable" onChange={this.sendAdData}>
                            <option value="none" selected disabled hidden>
                              Select a option
                            </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-5 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="last-name">Rent (per month) </label>
                          <input type="text" class="form-control" id="last-name" placeholder=""
                            name="rent" value={this.state.rent}
                            onChange={this.sendAdData} /> </div>
                        <div class="form-group"> <label for="inputEmail4">Status</label>
                          <select class="form-control"
                            name="category" onChange={this.sendAdData}>
                            <option value="Room" selected="selected">Available</option>
                            <option value="Hostel">Booked</option>
                            <option value="Apartment">Unavailable</option>
                          </select> </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-10 col-12">
                        <div class="form-group"> <label for="exampleFormControlTextarea2">Description</label>
                          <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="5"
                            name="description" value={this.state.description}
                            onChange={this.sendAdData}></textarea></div>
                        <div class="row justify-content-end mb-5">
                          <div class="col-lg-4 col-auto ">
                            <button type="button" class="btn btn-primary btn-block" onClick={this.updateadhandler}>
                              <small class="font-weight-bold">Update Room</small>
                            </button>
                          </div>
                        </div>
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
export default UpdateAd;