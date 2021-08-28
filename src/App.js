import './App.css';

//Bootstrap
import 'jquery/dist/jquery.slim.js'
import 'popper.js' 
import 'bootstrap/dist/js/bootstrap.min.js' 
import 'bootstrap/dist/css/bootstrap.min.css'


//router
import {BrowserRouter} from 'react-router-dom'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import $ from 'jquery'

//Others

function App() {

  $(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('#back-to-top').fadeIn();
        } else {
          $('#back-to-top').fadeOut();
        }
      });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 400);
        return false;
      });
  });
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
      <a id="back-to-top" href="/#" className="btn back-to-top" role="button"><i className="fa fa-chevron-up"></i></a>
    </div>
    </BrowserRouter>
  );
}

export default App;