import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Order from './Order';
import Complete from './Complete';
import Login from './Login';

import firebase from 'firebase';
import base from '../base';
import { firebaseApp } from '../base';


class App extends React.Component {

  state ={
    orders: {},
    loggedIn: '',
    email: ''
  }


  componentDidMount() {
    this.ref = base.syncState('orders', {
      context: this,
      state: 'orders'
    })

    firebaseApp.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
        this.setState({ loggedIn: firebaseUser.uid, email: firebaseUser.email });
      } else {
        console.log('Not Logged In')
        this.setState({ loggedIn: '', email: '' });
      }
    })

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  removeFromOrders = (id) => {
    const orders = {...this.state.orders};
    orders[id] = null;
    this.setState({ orders: orders})
  }

  addToComplete = (order) => {
    this.ref = base.push('complete', {
      data: order
    }).then(() => {
      //Router.transitionTo('dashboard');
    }).catch(err => {
      // handle error
      console.log(err)
    })
  }


  signOut = () => {
    firebase.auth().signOut();
  }


authenticate = (email, password) => {
  console.log(email, password)
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((e) => {console.log(e)})
}

createUser = (email, password) => {
  console.log('NEW USER: ', email, password)
  firebaseApp
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .catch((e) => {console.log(e)})
}


  render() {
   if (!this.state.loggedIn) {
    return <Login authenticate={this.authenticate} createUser={this.createUser} loggedIn={this.state.loggedIn}/>;
   }
    
    return (
      <div className="App">
        <Header logOut={this.signOut}/>
          <div className="content">
            <div className="inner">
              <div className="orders-display">
                <div className="orders">
                  {Object.keys(this.state.orders).map((res, i) => {
                    return <Order 
                              key={i} 
                              number={i} 
                              id={res}
                              details={this.state.orders[res]}
                              removeFromOrders={this.removeFromOrders}
                              addToComplete={this.addToComplete}
                              driver={this.state.loggedIn}
                              email={this.state.email}
                            />
                  }).reverse()}
                  </div>
                <div className="orders complete">
                  <Complete/>
                </div>
              </div>
            </div>
          </div>

        <Footer />

      </div>
    );
  }
}

export default App;