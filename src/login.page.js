import React from "react";
import auth from "./auth";
import GoogleLogin from 'react-google-login';

export const LandingPage = props => {
    return (
        <div id="page-wrapper">

            <section id="banner">
                <div className="inner">
                    <div className="logo"><span className="icon fa-gem"></span></div>
                    <h2>This is Solid State</h2>
                    <p>Another free + fully responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
                    <GoogleLogin
                        clientId="85357354801-oe7amo7cnqmam9vs5dsgbase3qvvis6e.apps.googleusercontent.com"

                        buttonText="Login"
                        className="button"
                        onClick={props.onClick}
                        disabled={props.disabled}


                        render={renderProps => (
                            <button
                                className="button"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            >
                                Log in with Google
                            </button>
                        )}


                        onSuccess={(res) => {
                            console.log(res)
                            console.log(res.profileObj)

                            auth.authObj = res;

                            auth.login(() => {
                                props.history.push("/app");
                            });
                        }}

                        onFailure={() => {
                            auth.logout(() => {
                                props.history.push("/");
                            });
                        }}
                    />
                </div>
            </section>



        </div>
    );
};
