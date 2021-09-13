import { Component, state, logout } from "react";
import 'font-awesome/css/font-awesome.min.css';
import logo from '../media/wlogo.png'
import axios from 'axios';


class Header extends Component {
    state = {
        image:'',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    logout = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    componentDidMount() {
        axios.get("http://localhost:90/profile", this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    image: response.data.data.image
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        if (localStorage.getItem("token")) {
            var menu =
                <div className="navigationbar">
                    <nav className="navbar navbar-expand-lg text-center">
                        <a className="navbar-brand" href="/">
                            <img src={logo} height="40" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* <div className="col-sm-11" id="nav-search">
                            <form className="navbar-form navbar-left my-2 my-lg-0 ml-auto">
                                <input type="text" className="form-control" placeholder="Search Room" />
                            </form>
                        </div> */}
                            <ul className="navbar-nav ml-auto navbar-center">
                                <li className="nav-item">
                                    <a className="nav-link " href="/search">Search</a>
                                </li>

                                {/* <li className="nav-item">
                                <a className="nav-link" onClick={this.logout}>LogOut</a>
                            </li> */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src={'http://localhost:90/image/' + this.state.image} width="30" height="30" className="rounded-circle" alt="Alter" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="/profile">Dashboard</a>
                                        <a className="dropdown-item" href="/profile">My Wishlist</a>
                                        <a className="dropdown-item " href="/#" onClick={this.logout}>Log Out</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
        }

        else {
            // eslint-disable-next-line
             menu =
                <div className="navigationbar">
                    <nav className="navbar navbar-expand-lg text-center">
                        <a className="navbar-brand" href="/">
                            <img src={logo} height="40" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* <div className="col-sm-11" id="nav-search">
                            <form className="navbar-form navbar-left my-2 my-lg-0 ml-auto">
                                <input type="text" className="form-control" placeholder="Search Room" />
                            </form>
                        </div> */}
                            <ul className="navbar-nav ml-auto navbar-center">
                                <li className="nav-item">
                                    <a className="nav-link " href="/login">Search</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " href="/login">SignIn</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
        }
        return (
            <div>
                {menu}
            </div>
        )
    }
}
export default Header;