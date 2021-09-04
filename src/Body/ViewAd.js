import { Component, state, commenthandler, wishlistthandler, applyhandler } from "react";
import axios from 'axios';
import Moment from 'react-moment';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class ViewAd extends Component {
    state = {
        checkwishlist: false,
        checkapply: false,
        checkcomment: false,
        clientid: "",
        id: this.props.match.params.id,
        ads: [],
        comment: "",
        rentoffered: "",
        description: "",
        comments: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {
        axios.get("http://localhost:90/ad/fetch/" + this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    ads: [response.data]
                })
            })
            .catch((err) => {
                console.log(err)
            })

        axios.get("http://localhost:90/comment/" + this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    comments: response.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    commenthandler = (e) => {
        e.preventDefault();
        const Data = {
            comment: this.state.comment,
            clientid: localStorage.getItem("clientid"),
            adid: this.props.match.params.id
        }
        axios.post("http://localhost:90/comment/add", Data, this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    checkcomment: true,
                    message: response.data.message
                })
            })
            .catch(err => {
                console.log(err)
            })
        toast.error(this.state.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
    applyhandler = (e) => {
        e.preventDefault();
        const Data = {
            rent: this.state.rent,
            description: this.state.description,
            clientid: localStorage.getItem("clientid"),
            adid: this.props.match.params.id
        }
        axios.post("http://localhost:90/apply/add", Data, this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    checkapply: true,
                    message: response.data.message
                })
            })
            .catch(err => {
                console.log(err)
            })
        toast.error(this.state.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
    wishlistthandler = (e) => {
        e.preventDefault();
        const Data = {
            clientid: localStorage.getItem("clientid"),
            adid: this.props.match.params.id
        }
        axios.post("http://localhost:90/wishlist/add", Data, this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    checkwishlist: true,
                    message: response.data.message
                })
            })
            .catch(err => {
                console.log(err)
            })
        toast.error(this.state.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
    render() {
        if (this.state.checkapply === true) {
            return window.location.href = '/profile'
          }
        if (this.state.checkcomment === true) {
            return window.location.href = '/ad/' + this.state.id
          }
        if (this.state.checkwishlist === true) {
            return window.location.href = '/profile'
          }
          else{
              var redirect = 
              <div className="section">
                    <div className="container">
                        <div className="product-page">
                            {/* <div class="row"> */}
                            {
                                this.state.ads.map((ad) => {
                                    return (
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="d-block w-100" src={'http://localhost:90/image/' + ad.photo} alt="First" />
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-md-5">
                                                <div className="product-details">
                                                    <h1 className="product-name">{ad.adtitle}</h1>
                                                    <div>
                                                        <h3 className="product-price">Nrs {ad.rent}</h3>
                                                    </div>
                                                    <p>{ad.description}</p>
                                                    <h5>Renter Details</h5>
                                                    <p>Name: {ad.clientid.name} </p>
                                                    <p>Email: {ad.clientid.email} </p>
                                                    <p>Mobile: {ad.clientid.mobile}</p>

                                                    <div className="add-to-cart">
                                                        <button className="add-to-cart-btn" data-toggle="modal" data-target="#apply"><i className="fa fa-check"></i> Apply</button>
                                                        {/* Modal */}
                                                        <div class="modal fade" id="apply" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLongTitle">Apply for Room</h5> &nbsp;
                                                                        <p class="modal-title">You cannot update or delete it later.</p>
                                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <div class="col-md-12 col-lg-10 col-12">
                                                                            <label for="first-name">Offered Rent /month</label>
                                                                            <input type="text" class="form-control" id="first-name"
                                                                                value={this.state.rent}
                                                                                onChange={(event) => { this.setState({ rent: event.target.value }) }} />

                                                                            <label for="exampleFormControlTextarea2">Description(Tell About Yourself)</label>
                                                                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="5"
                                                                                name="description" value={this.state.description}
                                                                                onChange={(event) => { this.setState({ description: event.target.value }) }}></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                                                                        <button type="button" className="btn btn-outline-success btn-sm" onClick={this.applyhandler}>Apply</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <ul className="product-btns">
                                                        <li><a href="/#" type="submit" onClick={this.wishlistthandler}><i className="fa fa-heart-o"></i> add to wishlist</a></li>
                                                    </ul>

                                                    <ul className="product-links">
                                                        <li>Category:</li>
                                                        <li><a href="/#">{ad.category}</a></li>
                                                    </ul>

                                                    <ul className="product-links">
                                                        <li>Share:</li>
                                                        <li><a href="/#"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="/#"><i className="fa fa-twitter"></i></a></li>
                                                    </ul>

                                                </div>
                                            </div>

                                        </div>
                                    )
                                })

                            }

                            <div className="col-md-12">
                                <div id="product-tab">
                                    <ul className="tab-nav">
                                        <li className="active"><a data-toggle="tab" href="#tab3">Comment</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="tab3" className="tab-pane active">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    {
                                                        this.state.comments.map((comment) => {
                                                            return (
                                                                <div id="reviews">
                                                                    <ul className="reviews">
                                                                        <li>
                                                                            <div className="review-heading">
                                                                                <h5 className="name">{comment.clientid.name}</h5>
                                                                                <p className="date"><Moment format="YYYY-MM-DD HH:mm">{comment.commentedAt}</Moment></p>
                                                                            </div>
                                                                            <div className="review-body">
                                                                                <p>{comment.comment}</p>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>

                                                <div className="col-md-5">
                                                    <div id="review-form">
                                                        <form className="review-form">
                                                            <textarea className="input" placeholder="Your Comment"
                                                                value={this.state.comment}
                                                                onChange={(event) => { this.setState({ comment: event.target.value }) }}></textarea>
                                                            <button className="primary-btn" type="submit" onClick={this.commenthandler}>Comment</button>
                                                        </form>
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
export default ViewAd;