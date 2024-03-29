import React from 'react'; 
import {Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './redux/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import setCurrentUser from '../src/redux/user/user.action';
import { selectCurrentUser} from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import checkoutPage from './pages/checkout/checkout.component';




class App extends React.Component {
   unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userref = await createUserProfileDocument(userAuth);
        userref.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          }); 
           
       });
      }
      setCurrentUser(userAuth);
    
    });
  }

  componentWillUnmount() { 
    this.unsubscribeFromAuth();
  }

  render(){
  return  (
   <div>
     <Header />
     <Switch>
       <Route exact path='/' component = {HomePage} />
       <Route path='/shop' component = {ShopePage} />
       <Route exact path='/checkout' component = {checkoutPage} />
       <Route path='/signin' render = {() => this.props.currentUser ? (<Redirect to = '/' />) : (<SignInAndSignUpPage />)} />
     </Switch>
   </div>
  )}
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
