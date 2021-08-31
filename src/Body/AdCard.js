import { Component, state } from "react";
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css';

class AdCard extends Component {

    state = {
        ads: [],
        roomads:[],
        hostelads:[],
        shopads:[],
        houseads:[],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:90/ad/fetch")
            .then((response) => {
                console.log(response)
                this.setState({
                    ads: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })

        axios.get("http://localhost:90/adfilter/Room")
            .then((response) => {
                console.log(response)
                this.setState({
                    roomads: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
        axios.get("http://localhost:90/adfilter/Hostel")
            .then((response) => {
                console.log(response)
                this.setState({
                    hostelads: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
        axios.get("http://localhost:90/adfilter/Shop")
            .then((response) => {
                console.log(response)
                this.setState({
                    shopads: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
        axios.get("http://localhost:90/adfilter/House")
            .then((response) => {
                console.log(response)
                this.setState({
                    houseads: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div>
                <div className="topic">
                    <div className="line" id="line"></div>
                    <b className="title">Recently Added</b><a className="view" href="/#" styles=" ">More</a>
                </div>
                <div className="row">
                    {
                        this.state.ads.slice(0,3).map((ad) => {
                            return (
                                <a className="col-md-4" href={'/ad/' + ad._id}>
                                    <div className="profile-card-2">
                                        <img src={'http://localhost:90/image/' + ad.photo} alt="Product Img" className="img img-responsive" />
                                        <section>
                                            <div className="profile-name">{ad.adtitle}</div>
                                            <div className="profile-username">Nrs. {ad.rent}</div>
                                            <div className="profile-icons"><i className="fa fa-map-marker" aria-hidden="true"></i>{ad.district}</div>
                                        </section>
                                    </div>
                                </a>

                            )
                        })
                    }
                </div>

                <div className="topic">
                    <div className="line" id="line"></div>
                    <b className="title">Room</b><a className="view" href="/#" styles=" ">More</a>
                </div>
                <div className="row">
                    {
                        this.state.roomads.map((ad) => {
                            return (
                                <a className="col-md-4" href={'/ad/' + ad._id}>
                                    <div className="profile-card-2">
                                        <img src={'http://localhost:90/image/' + ad.photo} alt="Product Img" className="img img-responsive" />
                                        <section>
                                            <div className="profile-name">{ad.adtitle}</div>
                                            <div className="profile-username">Nrs. {ad.rent}</div>
                                            <div className="profile-icons"><i className="fa fa-map-marker" aria-hidden="true"></i>{ad.district}</div>
                                        </section>
                                    </div>
                                </a>

                            )
                        })
                    }
                </div>

                <div className="topic">
                    <div className="line" id="line"></div>
                    <b className="title">Hostel</b><a className="view" href="/#" styles=" ">More</a>
                </div>
                <div className="row">
                    {
                        this.state.hostelads.map((ad) => {
                            return (
                                <a className="col-md-4" href={'/ad/' + ad._id}>
                                    <div className="profile-card-2">
                                        <img src={'http://localhost:90/image/' + ad.photo} alt="Product Img" className="img img-responsive" />
                                        <section>
                                            <div className="profile-name">{ad.adtitle}</div>
                                            <div className="profile-username">Nrs. {ad.rent}</div>
                                            <div className="profile-icons"><i className="fa fa-map-marker" aria-hidden="true"></i>{ad.district}</div>
                                        </section>
                                    </div>
                                </a>

                            )
                        })
                    }
                </div>

                <div className="topic">
                    <div className="line" id="line"></div>
                    <b className="title">Shop</b><a className="view" href="/#" styles=" ">More</a>
                </div>
                <div className="row">
                    {
                        this.state.shopads.map((ad) => {
                            return (
                                <a className="col-md-4" href={'/ad/' + ad._id}>
                                    <div className="profile-card-2">
                                        <img src={'http://localhost:90/image/' + ad.photo} alt="Product Img" className="img img-responsive" />
                                        <section>
                                            <div className="profile-name">{ad.adtitle}</div>
                                            <div className="profile-username">Nrs. {ad.rent}</div>
                                            <div className="profile-icons"><i className="fa fa-map-marker" aria-hidden="true"></i>{ad.district}</div>
                                        </section>
                                    </div>
                                </a>

                            )
                        })
                    }
                </div>

                <div className="topic">
                    <div className="line" id="line"></div>
                    <b className="title">House</b><a className="view" href="/#" styles=" ">More</a>
                </div>
                <div className="row">
                    {
                        this.state.houseads.map((ad) => {
                            return (
                                <a className="col-md-4" href={'/ad/' + ad._id}>
                                    <div className="profile-card-2">
                                        <img src={'http://localhost:90/image/' + ad.photo} alt="Product Img" className="img img-responsive" />
                                        <section>
                                            <div className="profile-name">{ad.adtitle}</div>
                                            <div className="profile-username">Nrs. {ad.rent}</div>
                                            <div className="profile-icons"><i className="fa fa-map-marker" aria-hidden="true"></i>{ad.district}</div>
                                        </section>
                                    </div>
                                </a>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default AdCard;