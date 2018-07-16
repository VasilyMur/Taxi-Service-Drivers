import React from 'react';
import firebase from 'firebase';

class Login extends React.Component {

    signInEmailRef = React.createRef();
    signInPassRef = React.createRef();

    signUpEmailRef = React.createRef();
    signUpPassRef = React.createRef();

    formSignIn = (e) => {
        e.preventDefault();
        const email = this.signInEmailRef.current.value;
        const password = this.signInPassRef.current.value;

        console.log('Sign IN: ', email, password)
        this.props.authenticate(email, password);
    }

    formSignUp = (e) => {
        e.preventDefault();
        const email = this.signUpEmailRef.current.value;
        const password = this.signUpPassRef.current.value;

        console.log('Sign UP: ', email, password)
        this.props.createUser(email, password);
    }

    signOut = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div className="login">

                <div className="login__item">
                    <h2>Sign In</h2>
                    <form className="login-form" onSubmit={this.formSignIn}>
                        <input ref={this.signInEmailRef} type="email" placeholder="Email.."/>
                        <input ref={this.signInPassRef} type="text" placeholder="Password.."/>
                        <button type="submit">Sign In</button>
                    </form>
                    </div>

                <div className="login__item">
                    <h2>Sign Up</h2>
                    <form className="login-form" onSubmit={this.formSignUp}>
                        <input ref={this.signUpEmailRef} type="email" placeholder="Email.."/>
                        <input ref={this.signUpPassRef} type="text" placeholder="Password.."/>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Login;