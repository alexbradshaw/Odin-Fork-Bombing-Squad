import { Icon } from '@iconify/react';
import './Footer.css'
import { useContext } from 'react';
import { RoutesContext } from '../../main';

const members = [
    { name: "Alex", linkedin: "alexander-bradshaw", github: "alexbradshaw" },
    { name: "Sammy", linkedin: "sammy-beard-0a2980194", github: "sam8beard" },
    { name: "Venn", linkedin: "venn-reddy", github: "vennreddy490" },
    { name: "Yushus", linkedin: "yushuskomarlu", github: "ykomarlu" }
]

const MemberContainer = ({ user }) => {
    const { name, linkedin, github } = user;

    return (
        <div>
            <h3>{name}</h3>
            <div className='footerLinks'>
                <div>
                <a href={`https://www.linkedin.com/in/${linkedin}/`}>
                        <Icon height={"30px"} icon={"devicon:github"}/>
                    </a>
                    <a href={`https://github.com/${github}?tab=repositories`}>
                        <Icon height={"30px"} icon={"skill-icons:linkedin"} style={{"marginLeft": "5px"}}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {

    const { routes } = useContext(RoutesContext);
    console.log(routes);
    return (
        <div className='footer'>
            <div>
                <div className='column' id='foot1'>
                    <img className='footerLogo' src={"/full.png"} />
                </div>
                <div className='column' id='foot2'>
                    <h2>Devs</h2>
                    <div className='memberList'>
                        <div>
                            <div>
                                <MemberContainer user={members[0]} />
                                <MemberContainer user={members[1]} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <MemberContainer user={members[2]} />
                                <MemberContainer user={members[3]} />
                            </div>
                        </div>
                    </div>
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