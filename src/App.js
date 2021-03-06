import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import AuthProvider from "./Context/AuthProvider";
import Registration from "./Components/Registration/Registration";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";
import Greetings from "./Components/Greetings/Greetings";
import Dashboard from "./Components/Dashboard/Dashboard";
import Products from "./Components/Products/Products";
import BuyProduct from "./Components/Products/BuyProduct/BuyProduct";
import Contact from "./Components/Home/Pages/Contact/Contact";
import About from "./Components/Home/Pages/About/About";
import Guideline from "./Components/Home/Pages/Guideline/Guideline";
import Payment from "./Components/Dashboard/Payment/Payment";
import Sorry from "./Components/Sorry/Sorry";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <AuthProvider>
      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
            <ScrollToTop />
            <Header></Header>
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

              <Route path="/products">
                <Products></Products>
              </Route>

              <Route path="/guideline">
                <Guideline></Guideline>
              </Route>

              <Route path="/contactus">
                <Contact></Contact>
              </Route>

              <Route path="/registration">
                <Registration></Registration>
              </Route>

              <Route path="/signin">
                <LogIn></LogIn>
              </Route>

              <PrivateRoute path="/payment/:paymentId">
                <Payment></Payment>
              </PrivateRoute>

              <PrivateRoute path="/singleproduct/:id">
                <BuyProduct></BuyProduct>
              </PrivateRoute>

              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>

              <PrivateRoute path="/greetings">
                <Greetings></Greetings>
              </PrivateRoute>

              <Route path="/registration">
                <Registration></Registration>
              </Route>

              <Route path="/sorry">
                <Sorry></Sorry>
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
