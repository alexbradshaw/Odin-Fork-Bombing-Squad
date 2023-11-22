import { Icon } from '@iconify/react';
import './Footer.css'

const Footer = () => {

    return (
        <div className='footer'>
            <div>
                <div className='column' id='foot1'>
                    <img className='footerLogo' src={"/full.png"} />
                </div>
                <div className='column' id='foot2'>
                    <h2>Members</h2>
                    <div className='memberList'>
                        <div>
                            <div>
                                <div>
                                    <h3 href="">Alex</h3>
                                    <div className='footerLinks'>
                                        <div>
                                            <a href="https://www.linkedin.com/in/alexander-bradshaw/">
                                                <Icon height={"30px"} icon={"skill-icons:linkedin"}/>
                                            </a>
                                            <a href="https://github.com/alexbradshaw?tab=repositories">
                                                <Icon height={"30px"} icon={"devicon:github"} style={{"marginLeft": "5px"}}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 href="">Sammy</h3>
                                    <div className='footerLinks'>
                                        <div>
                                        <a href="https://www.linkedin.com/in/sammy-beard-0a2980194/">
                                                <Icon height={"30px"} icon={"skill-icons:linkedin"}/>
                                            </a>
                                            <a href="https://github.com/sam8beard?tab=repositories">
                                                <Icon height={"30px"} icon={"devicon:github"} style={{"marginLeft": "5px"}}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h3 href="">Venn</h3>
                                    <div className='footerLinks'>
                                        <div>
                                        <a href="https://www.linkedin.com/in/venn-reddy/">
                                                <Icon height={"30px"} icon={"skill-icons:linkedin"}/>
                                            </a>
                                            <a href="https://github.com/vennreddy490?tab=repositories">
                                                <Icon height={"30px"} icon={"devicon:github"} style={{"marginLeft": "5px"}}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 href="">Yushus</h3>
                                    <div className='footerLinks'>
                                        <div>
                                        <a href="https://www.linkedin.com/in/yushuskomarlu/">
                                                <Icon height={"30px"} icon={"skill-icons:linkedin"}/>
                                            </a>
                                            <a href="https://github.com/ykomarlu?tab=repositories">
                                                <Icon height={"30px"} icon={"devicon:github"} style={{"marginLeft": "5px"}}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column' id='foot3'>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;