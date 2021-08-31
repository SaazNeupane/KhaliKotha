import { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import AdCard from './AdCard'
import Carousel from './Carousel'


class Home extends Component {
    render() {
        if (localStorage.getItem("usertype") === 'Admin') {
            return window.location.href = '/admin'
          }
          else{
            var redirect =
            <div className="container">
                    <Carousel></Carousel>
                    <AdCard></AdCard>
                </div>
          }
        return (
            <div>
                {redirect}

            </div>
        )
    }
}
export default Home;