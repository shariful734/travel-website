import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Pages/Home/Banner/Banner';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import TopPlaces from './Pages/Home/TopPlaces/TopPlaces';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import LogIn from './Pages/LogIn/LogIn';

function App() {
  return (
    <div className="">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/Home">
              <Banner></Banner>
              <About></About>
              <TopPlaces></TopPlaces>
            </Route>

            <Route path="/LogIn">
              <LogIn></LogIn>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>





    </div>
  );
}

export default App;
