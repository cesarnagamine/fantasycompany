import React from "react";
import auth from "./auth";
import GoogleLogout from 'react-google-login';
import MailForm from './MailForm'


export const AppLayout = props => {
    return (
        <div>

            <div id="page-wrapper">

                <header id="header" className="alt">
                    <h1><a href="index.html">Solid State</a></h1>
                    <nav>
                    </nav>
                </header>

                <nav id="menu">
                    <div className="inner">
                        <h2>Menu</h2>
                        <ul className="links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="elements.html">Elements</a></li>
                            <li><a href="#">Log Out</a></li>

                        </ul>

                    </div>
                </nav>

                <section id="banner">
                    <div className="inner">
                        <div className="logo"><span className="icon fa-gem"></span></div>
                        <h2>This is Solid State</h2>
                        <p>Bienvenido, {auth.authObj.profileObj.givenName}{" "}
                            {auth.authObj.profileObj.familyName}!</p>
                        <GoogleLogout

                            buttonText="Logout"

                            render={renderProps => (
                                <button
                                    className="logout-button"
                                    onClick={renderProps.onClick}
                                >
                                    Log Out
                                </button>
                            )}

                            onSuccess={() => {
                                auth.logout(() => {
                                    props.history.push("/");
                                });
                            }}
                        />
                    </div>
                </section>

                <section id="wrapper">

                    <section id="one" className="wrapper spotlight style1">
                        <div className="inner">
                            <a href="#" className="image"><img src="images/pic01.jpg" alt="" /></a>
                            <div className="content">
                                <h2 className="major">Magna arcu feugiat</h2>
                                <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                                <a href="#" className="">Más detalles</a>
                            </div>
                        </div>
                    </section>

                    <section id="four" className="wrapper alt style1">
                        <div className="inner">
                            <h2 className="major">Vitae phasellus</h2>
                            <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
                            <section className="features">
                                <article>
                                    <a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>
                                    <h3 className="major">Sed feugiat lorem</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                    <a href="#" className="special">Learn more</a>
                                </article>
                                <article>
                                    <a href="#" className="image"><img src="images/pic05.jpg" alt="" /></a>
                                    <h3 className="major">Nisl placerat</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                    <a href="#" className="special">Learn more</a>
                                </article>

                            </section>

                        </div>
                    </section>

                </section>


                <section id="footer">
                    <div className="inner">
                        <h2 className="major">Get in touch</h2>
                        <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
                        <MailForm />
                        <ul className="contact">
                            <li className="icon solid fa-home">
                                Untitled Inc<br />
                    1234 Somewhere Road Suite #2894<br />
                    Nashville, TN 00000-0000
                </li>
                            <li className="icon solid fa-phone">(000) 000-0000</li>
                            <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                            <li className="icon brands fa-twitter"><a href="#">twitter.com/untitled-tld</a></li>
                            <li className="icon brands fa-facebook-f"><a href="#">facebook.com/untitled-tld</a></li>
                            <li className="icon brands fa-instagram"><a href="#">instagram.com/untitled-tld</a></li>
                        </ul>
                        <ul className="copyright">
                            <li>&copy; Untitled Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    );
};



