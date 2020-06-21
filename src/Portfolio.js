import React from 'react'
import Stock from './StockChart'
import auth from './auth'

export const Portfolio = () => {
    return (
        <div>
            <div id="page-wrapper">

                <header id="header">
                    <h1><a href="index.html">Solid State</a></h1>
                    <nav>
                        <a href="/app">Inicio</a>
                    </nav>
                </header>

                <nav id="menu">

                </nav>

                <section id="wrapper">
                    <header>
                        <div className="inner">
                            <h2>Generic</h2>
                            <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
                            <div className="inner" >
                                <Stock />
                            </div>
                        </div>
                    </header>

                    <div className="wrapper">
                        <div className="inner">

                            <h3 className="major">Lorem ipsum dolor</h3>
                            <p>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</p>

                            <p>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius.</p>

                        </div>
                    </div>

                </section>


                <section id="footer">
                    <div className="inner">
                        <h2 className="major">Get in touch</h2>
                        <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>

                        <ul className="contact">
                            <li className="icon solid fa-home">
                                Untitled Inc<br />
									1234 Somewhere Road Suite #2894<br />
									Nashville, TN 00000-0000
								</li>
                            <li className="icon solid fa-phone">(000) 000-0000</li>
                            <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                            <li className="icon brands fa-facebook-f"><a href="#">facebook.com/untitled-tld</a></li>
                        </ul>
                        <ul className="copyright">
                            <li>&copy; Untitled Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    )
}
