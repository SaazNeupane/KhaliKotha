import { Component, state, sendAdData, addadhandler, filehandler } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class AddAd extends Component {
  state = {
    checkadd: false,
    clientid: "",
    adtitle: "",
    pradesh: "",
    district: "",
    city: "",
    street: "",
    category: "",
    photo: "",
    rent: "",
    negotiable: "",
    description: "",
    message: "",
    config: {
      headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    },
  }

  sendAdData = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  filehandler = (e) => {
    this.setState({
      photo: e.target.files[0]
    })
  }

  addadhandler = (e) => {
    e.preventDefault();
    const data = new FormData()
    console.log(this.state.photo)
    data.append('clientid', localStorage.getItem('clientid'))
    data.append('adtitle', this.state.adtitle)
    data.append('pradesh', this.state.pradesh)
    data.append('district', this.state.district)
    data.append('city', this.state.city)
    data.append('street', this.state.street)
    data.append('category', this.state.category)
    data.append('photo', this.state.photo)
    data.append('rent', this.state.rent)
    data.append('negotiable', this.state.negotiable)
    data.append('description', this.state.description)

    axios.post("http://localhost:90/ad/insert", data, this.state.config)
      .then((response) => {
        console.log(response)
        this.setState({
          checkadd: true,
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
  render() {
    if (localStorage.getItem("token")) {
      if (this.state.checkadd === true) {
        return window.location.href = '/profile'
      }
      else {
        var redirect =
          <div class="container card-0 justify-content-center ">
            <div class="card-body px-sm-4 px-0">
              <div class="row justify-content-center mb-5">
                <div class="col-md-10 col">
                  <h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Add your Room </h3>
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
                        <div class="col-md-12 col-lg-10 col-12">
                          <div class="form-group files"><label class="my-auto">Photo </label>
                            <input type="file" class="form-control" name="photo" onChange={this.filehandler} multiple />
                          </div>
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
                                Select a Option
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
                              <button type="button" class="btn btn-primary btn-block" onClick={this.addadhandler}>
                                <small class="font-weight-bold">Add Room</small>
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
    }
    else {
      return window.location.href = '/login'
    }
    return (
      <div>
        {redirect}
      </div>
    )
  }
}
export default AddAd;