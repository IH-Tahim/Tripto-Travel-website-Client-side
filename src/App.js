import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/Login/PrivateRoute/PeivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddTour from './Pages/AddTour/AddTour';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import Tours from './Pages/Tours/Tours';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/tours">
              <Tours></Tours>
            </Route>

            <PrivateRoute path="/placeorder/:orderId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path="/addtour">
              <AddTour></AddTour>
            </PrivateRoute>

            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <Route path="/Blogs">
              <Blogs></Blogs>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

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
