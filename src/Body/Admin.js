import { Component, state, deletead } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();


class Admin extends Component {
    state = {
        ads: [],
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
    render() {
        return (
            <div className="admin">
                <h1>ADMIN PANEL</h1>
                <p>Welcome, you can View, Update and Delete All the user's Ads</p>
                <div className="topic">
                    <b className="title">All Ads</b>
                </div>
                <div className="row">
                    {
                        this.state.ads.map((ad) => {
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
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>


            </div>
        )
    }
}
export default Admin;