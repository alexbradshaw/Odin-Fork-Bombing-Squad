import './Footer.css'

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { RoutesContext } from '../../main';

const Footer = () => {

    const { routes } = useContext(RoutesContext);

    return (
        <div className='footer'>
            <div>
                <div className='column' id='foot1'>
                    <img className='footerLogo' src={"/motto.png"} />
                </div>
                <div className='column' id='foot2'>

                </div>
                <div className='column' id='foot3'>
                    <div className='currentRoutes'>
                        <h2>Pages</h2>
                        <div>
                            {
                                routes.map((route, index) => {
                                    if (route.name) {
                                        let href = route.path;
                                        if (route.index) {
                                            href = '/';
                                        }
                                        return (
                                            <Link to={href} key={"link " + index}>{route.name}</Link>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;