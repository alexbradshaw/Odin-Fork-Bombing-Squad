import './Footer.css'
import { useContext } from 'react';
import { RoutesContext } from '../../main';

const Footer = () => {

    const { routes } = useContext(RoutesContext);
    console.log(routes);
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
                                            <a href={href} key={"link " + index}>{route.name}</a>
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