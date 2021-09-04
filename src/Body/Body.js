import {Component} from "react";
import {Container, Row, Col } from 'react-bootstrap'
import {Route} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Profile from './Profile'
import AddAd from './AddAd'
import UpdateAd from './UpdateAd'
import Terms from './Terms'
import Rules from './AdRule'
import Contact from './Contactus'
import ViewAd from './ViewAd'





class Body extends Component{
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Route path='/signup' exact component={Signup}/>
                        <Route path='/login' exact component={Login}/>
                        <Route path='/' exact component={Home}/>
                        <Route path='/profile' exact component={Profile}/>
                        <Route path='/addad' exact component={AddAd}/>
                        <Route path='/updatead/:id' exact component={UpdateAd}/>
                        <Route path='/terms' exact component={Terms}/>
                        <Route path='/rules' exact component={Rules}/>
                        <Route path='/contactus' exact component={Contact}/>
                        <Route path='/ad/:id' exact component={ViewAd}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Body;