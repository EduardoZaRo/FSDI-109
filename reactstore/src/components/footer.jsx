import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <footer className="text-center text-white footer" style={{backgroundColor: 'green',}}>
            {/* <!-- Grid container --> */}
            <div className="container pt-4">
                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                {/* <!-- Facebook --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} /> </a>

                {/* <!-- Twitter --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}}/></a>

                {/* <!-- Google --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><FontAwesomeIcon icon={faGoogle} style={{color: "#ffffff",}}/></a>

                {/* <!-- Instagram --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}}/></a>

                {/* <!-- Linkedin --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    
                    ><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}}/></a>
                {/* <!-- Github --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}}/></a>
                </section>
                {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center text-light p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2023 Copyright:

                <a className="text-light" style={{margin:'0 10px'}} href="/">IoT Market</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    );
}

export default Footer;