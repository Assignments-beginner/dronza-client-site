import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AuthProvider from "./Context/AuthProvider";
import LogIn from "./Components/LogIn/LogIn";
import Registration from "./Components/Registration/Registration";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";
import Greetings from "./Components/Greetings/Greetings";
import Dashboard from "./Components/Dashboard/Dashboard";
import Products from "./Components/Products/Products";
import BuyProduct from "./Components/Products/BuyProduct/BuyProduct";

function App() {
  return (
    <AuthProvider>
      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/products">
                <Products></Products>
              </Route>

              <Route path="/singleproduct/:id">
                <BuyProduct></BuyProduct>
              </Route>

              <Route path="/dashboard">
                <Dashboard></Dashboard>
              </Route>
              <Route path="/signin">
                <LogIn></LogIn>
              </Route>
              <Route path="/registration">
                <Registration></Registration>
              </Route>
              <Route path="/greetings">
                <Greetings></Greetings>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
        <Footer></Footer>
      </div>
    </AuthProvider>
  );
}

export default App;
