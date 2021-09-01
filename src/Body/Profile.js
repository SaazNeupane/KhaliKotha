import { Component, state, filehandler, updateimagehandler, deletead, deletewishlist,logout } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class Profile extends Component {

    state = {
        checkaddelete: false,
        checkwishlistdelete: false,
        message: '',
        name: '',
        mobile: '',
        email: '',
        image: '',
        myads: [],
        mywishlist: [],
        myapply: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {
        axios.get("http://localhost:90/profile", this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    name: response.data.data.name,
                    mobile: response.data.data.mobile,
                    email: response.data.data.email,
                    image: response.data.data.image
                })
            })
            .catch((err) => {
                console.log(err)
            })

        axios.get("http://localhost:90/myad", this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    myads: response.data.data
                })
            })
            .catch((err) => {
                console.log(err)
            })

        axios.get("http://localhost:90/mywishlist", this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    mywishlist: response.data.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
        axios.get("http://localhost:90/ownapply", this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    myapply: response.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    deletead = (adid) => {
        axios.delete("http://localhost:90/ad/delete/" + adid, this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    checkaddelete: true,
                    message: response.data.message
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    message: err.response.data.message
                })
            })
        toast.error(this.state.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
    deletewishlist = (wishlistid) => {
        axios.delete("http://localhost:90/wishlist/delete/" + wishlistid, this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    checkwishlistdelete: true,
                    message: response.data.message
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    message: err.response.data.message
                })
            })
        toast.error(this.state.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }

    filehandler = (e) => {
        this.setState({
            image: e.target.files
        })
    }

    updateimagehandler = (e) => {
        e.preventDefault();
        const data = new FormData()
        console.log(this.state.image)
        data.append('image', this.state.image)

        axios.post("http://localhost:90/client/imagechange", data, this.state.config)
            .then((response) => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    logout = () => {
        localStorage.clear()
        window.location.href = '/'
    }
    render() {
        if (localStorage.getItem("token")) {
            if (this.state.checkaddelete === true) {
                return window.location.href = '/profile'
            }
            if (this.state.checkwishlistdelete === true) {
                return window.location.href = '/profile'
            }
            else {
                var redirect =
                    <div className="Container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="text-center card-box">
                                    <div className="member-card">
                                        <div className="thumb-xl member-thumb m-b-10 center-block">
                                            <img src={'http://localhost:90/image/' + this.state.image} className="img-circle img-thumbnail" alt="alternative" />
                                        </div>

                                        <div className="">
                                            <h4 className="m-b-5">{this.state.name}</h4>
                                            <p className="text-muted">{this.state.email}</p>
                                        </div>
                                        <a type="button" className="btn btn-info btn-sm" href='/addad'>Add Room</a>&nbsp;
                                    <a type="button" href="/" className="btn btn-danger btn-sm " onClick={this.logout}>Logout</a>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-8 col-lg-9">
                                <div className="">
                                    <div className="">
                                        <ul className="nav nav-tabs navtab-custom">
                                            <li className="active">
                                                <a href="#ads" data-toggle="tab" aria-expanded="true">
                                                    <span className="visible-xs"><i className="fa fa-photo"></i></span>&nbsp;
                                    <span className="hidden-xs">My Ads</span>
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="#wishlist" data-toggle="tab" aria-expanded="true">
                                                    <span className="visible-xs"><i className="fa fa-photo"></i></span>&nbsp;
                                    <span className="hidden-xs">My wishlist</span>
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="#ownapply" data-toggle="tab" aria-expanded="true">
                                                    <span className="visible-xs"><i className="fa fa-photo"></i></span>&nbsp;
                                    <span className="hidden-xs">Your Apply</span>
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="#settings" data-toggle="tab" aria-expanded="false">
                                                    <span className="visible-xs"><i className="fa fa-cog"> </i></span>&nbsp;
                                    <span className="hidden-xs">Settings</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            
                                            <div className="tab-pane active" id="ads">
                                                <div className="row">
                                                    {
                                                        this.state.myads.map((ad) => {
                                                            return (
                                                                <div className="col-lg-4 mb-4">

                                                                    <div className="card">
                                                                        <img img src={'http://localhost:90/image/' + ad.photo} alt="" class="img-circle img-thumbnail" />
                                                                        <div className="card-body">
                                                                            <h5 className="card-title">{ad.adtitle}</h5>
                                                                            <p className="card-text">{ad.rent}</p>
                                                                            <a href={'/ad/' + ad._id} className="btn btn-outline-success btn-sm">View</a>&nbsp;
                                                                        <a href onClick={this.deletead.bind(this.setState, ad._id)} className="btn btn-outline-success btn-sm">Delete</a>&nbsp;
                                                                        <a href={'/updatead/' + ad._id} className="btn btn-outline-success btn-sm">Update</a>&nbsp;<br />

                                                                        &nbsp;
                                                                        <a href="/#" className="btn btn-outline-success btn-sm">Change Ad Image</a>&nbsp;
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="wishlist">
                                                <div className="row">
                                                    {
                                                        this.state.mywishlist.map((wishlist) => {
                                                            return (
                                                                <div className="col-lg-4 mb-4">

                                                                    <div className="card">
                                                                        <div className="profileadimage"><img src={'http://localhost:90/image/' + wishlist.adid.photo} alt="w" class="img-circle img-thumbnail" /></div>
                                                                        <div className="card-body">
                                                                            <h5 className="card-title">{wishlist.adid.adtitle}</h5>
                                                                            <p className="card-text">{wishlist.adid.rent} per month</p>
                                                                            <p className="card-text">{wishlist.adid.district}</p>
                                                                            <a href={"/ad/" + wishlist.adid._id} className="btn btn-outline-success btn-sm">View</a>&nbsp;
                                                                        <a href onClick={this.deletewishlist.bind(this.setState, wishlist._id)} className="btn btn-outline-success btn-sm">Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>

                                            <div className="tab-pane" id="ownapply">
                                                <div className="row">
                                                    {
                                                        this.state.myapply.map((apply) => {
                                                            return (
                                                                <div className="col-lg-4 mb-4">

                                                                    <div className="card">
                                                                        <div className="profileadimage"><img src={'http://localhost:90/image/' + apply.adid.photo} alt="w" class="img-circle img-thumbnail" /></div>
                                                                        <div className="card-body">
                                                                            <h5 className="card-title">{apply.adid.adtitle}</h5>
                                                                            <p className="card-text">Your Offer: {apply.rentoffered}/month</p>
                                                                            <p className="card-text">{apply.description}</p>
                                                                            <a href={"/ad/" + apply.adid._id} className="btn btn-outline-success btn-sm">View</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>

                                            <div className="tab-pane" id="settings">
                                                <ul class="list-group">
                                                    <li class="list-group-item">
                                                        <a href="/#">Update Profile Picture</a></li>
                                                    <li class="list-group-item"><a href={'/updatedetail/' + localStorage.getItem('clientid')}>Update Your Details</a></li>
                                                    <li class="list-group-item"><a href="/#">Change Password</a></li>
                                                </ul>
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
export default Profile;