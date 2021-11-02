import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import LogIn from './Pages/LogIn/LogIn';
import AddCountry from './Pages/AddCountry/AddCountry';
import Booking from './Pages/Booking/Booking/Booking';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import MyBooking from './Pages/Booking/MyBooking/MyBooking';
import AllBooking from './Pages/Booking/AllBooking/AllBooking';
import Services from './Pages/Home/Services/Services';

function App() {
  return (
    <div className="body-container">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/LogIn">
              <LogIn></LogIn>
            </Route>

            <PrivateRoute path="/booking/:bookingId">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/AddCountry">
              <AddCountry></AddCountry>
            </PrivateRoute>

            <PrivateRoute path="/myBooking/:myBookingId">
              <MyBooking></MyBooking>
            </PrivateRoute>

            <PrivateRoute path="/AllBooking">
              <AllBooking></AllBooking>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>





    </div>
  );
}

export default App;
