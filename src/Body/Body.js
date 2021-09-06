import {Component} from "react";
import {Container, Row, Col } from 'react-bootstrap'
import {Route} from 'react-router-dom'
import Register from './Signup'
import Login from './Login'
import Home from './Home'
import Admin from './Admin'
import AddAd from './AddAd'
import ViewAd from './ViewAd'
import UpdateAd from './UpdateAd'
import UpdateDetails from './UpdateDetails'
import Terms from './Terms'
import Rules from './AdRule'
import Profile from './Profile'
import Contact from './Contactus'

class Body extends Component{
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Route path='/admin' exact component={Admin}/>
                        <Route path='/signup' exact component={Register}/>
                        <Route path='/login' exact component={Login}/>
                        <Route path='/' exact component={Home}/>
                        <Route path='/addad' exact component={AddAd}/>
                        <Route path='/ad/:id' exact component={ViewAd}/>
                        <Route path='/updatead/:id' exact component={UpdateAd}/>
                        <Route path='/updatedetail/:id' exact component={UpdateDetails}/>
                        <Route path='/profile' exact component={Profile}/>
                        <Route path='/terms' exact component={Terms}/>
                        <Route path='/rules' exact component={Rules}/>
                        <Route path='/contactus' exact component={Contact}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Body;