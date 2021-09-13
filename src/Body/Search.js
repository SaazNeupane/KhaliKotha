import { Component, state, searchtext } from "react";
import axios from 'axios';

class Search extends Component {
    state = {
        searchtext: "",
        ads: [],
    }

    search = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    searchhandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.get(`http://localhost:90/search?post=${this.state.searchtext}`)
            .then((response) => {
                console.log(response)
                this.setState({
                    message: response.data.message,
                    ads: response.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return (
            <div>
                <h2>Search Advertisement</h2>
                <div className="row">
                        <div class="col-sm-7" id="nav-search">
                            <form class="navbar-form navbar-left my-2 my-lg-0 ml-auto">
                                <input type="text" class="form-control" placeholder="Search Ads"
                                    name="searchtext" value={this.state.searchtext}
                                    onChange={this.search}
                                    required autoFocus />
                            </form>
                        </div>
                        <button id="tag-button" className="btn btn-outline-success btn-tag" 
                        onClick={this.searchhandler}> Search </button>
                    <div className="topic">
                        <div className="line" id="line"></div>
                        <b className="title">Search Result Added</b> </div>
                    {
                        this.state.ads.slice(0, 3).map((ad) => {
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
export default Search;