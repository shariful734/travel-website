import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Pages/Home/Banner/Banner';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="">

      <Router>
        <Header></Header>
        <Switch>
          <Route path="/Home">
            <Banner></Banner>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>





    </div>
  );
}

export default App;
