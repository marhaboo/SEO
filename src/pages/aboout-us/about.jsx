import './about.css'

import HomeLogo from '../aboout-us/images/breadcrumb (4).png'
import iconBoxes from '../aboout-us/images/icon-boxes (1).png'
import figuresImg from '../aboout-us/images/Figures (2).png'
import Video from '../aboout-us/images/Video.png'
import CoreImg1 from '../aboout-us/images/left11.png'
import CoreImg2 from '../aboout-us/images/left (2).png'
import CoreImg3 from '../aboout-us/images/left (3).png'
import CoreImg4 from '../aboout-us/images/left (4).png'
import gallerImg from '../aboout-us/images/Gallery.png'
import WomenImg from '../aboout-us/images/illustration (13).png'
import awardsOmg from '../aboout-us/images/awards (2).png'
import clientsImg from '../aboout-us/images/clients (6).png'
import UserImg1 from '../aboout-us/images/image (7).png'
import UserImg2 from '../aboout-us/images/image (2).png'
import UserImg3 from '../aboout-us/images/user3.png'
import userImg4 from '../aboout-us/images/user4.png'
import UserImg5 from '../aboout-us/images/image (3).png'
import UserImg6 from '../aboout-us/images/image (4).png'
import UserImg7 from '../aboout-us/images/image (5).png'
import UserImg8 from '../aboout-us/images/image (6).png'
import accardionImg from '../aboout-us/images/accordion (1).png'
import ImgThinking from '../aboout-us/images/illustration (14).png'
import runPersonImg from '../aboout-us/images/illustration (15).png'
import { LatestNews } from "./components/latest-news/latest-news";

const About = () => {
  return (<>

<div className="HeaderDivv">
            <div className='HomeLogoDiv'><img src={HomeLogo} alt="" /></div>
            <h1 className='H1About'>About Us</h1>
            <p className='POur'>Our agency has been successfully operating in digital marketing since 2012. We are proud to <br /> offer you quality and exemplary service. We help our clients get better results with our <br /> creative and data-driven approach to online advertising. </p>
            <div className='IconBoxesDiv'><img src={iconBoxes} alt=""/></div>
        </div>

        <div className='DivFigureImg'><img src={figuresImg} alt="" /></div>
        <div className="VideoDiv"><img src={Video} alt="" /></div>

        <div className="CoreDiv">

            <div className="CoreText">
                <h1>The core values <br /> we stand for</h1>
            </div>

            <div className="CoreImages">

                <div className="CoreImg1">
                    <img src={CoreImg1} alt="" />
                </div>
                <div className="CoreImg1">
                    <img src={CoreImg2} alt="" />
                </div>
                <div className="CoreImg1">
                    <img src={CoreImg3} alt="" />
                </div>
                <div className="CoreImg1">
                    <img src={CoreImg4} alt="" />
                </div>

            </div>

        </div>

        <div className='DivGallery'><img src={gallerImg} alt="" /></div>

        <div className="Proud">
            <div className='ProudImg'>
                <img src={WomenImg} alt="" />
            </div>
            <div className="ProudText">
                <h1>We are proud of our awards</h1>
                <img src={awardsOmg} alt="" />
            </div>
        </div>




        <div className='GetFreeDiv'>
            <h1 className='H1GetFree'>Get a Free SEO Analysis!</h1>
            <div className='InpDivs'>
                <div>
                    <p className='PnameInp'>Name</p>
                    <input className='inputsGetFree' type="text" placeholder='name' />
                </div>
                <div>
                    <p className='PnameInp'>Email</p>
                    <input className='inputsGetFree' type="text" placeholder='email' />
                </div>
                <div>
                    <p className='PnameInp'>Your web-site</p>
                    <input className='inputsGetFree' placeholder='your web-site' type="text" />
                </div>
                <div>
                    <br /><br />
                    <p className='Panalis'>Analyse your site</p>
                </div>

            </div>
        </div>

        <h1 className='h1240'>240+ satisfied clients</h1>

        <div className='DivClients'>
            <img src={clientsImg} alt="" />
        </div>

        <h1 className='MeeH1'>Meet our team</h1>

        <div className="PersonsDiv">

            <div className="Person1">
                <img src={UserImg1} alt="" />
                <p className='pName'>Courtney Alexander</p>
                <p className='pName'>Founder and CEO</p>
            </div>

            <div className="Person1">
                <img src={UserImg2} alt="" />
                <p className='pName'>Courtney Alexander</p>
                <p className='pName'>Founder and CEO</p>
            </div>

            <div className="Person1">
                <img src={UserImg3} alt="" />
                {/* <p>Courtney Alexander</p>
                <p>Founder and CEO</p> */}
            </div>

            <div className="Person1">
                <img src={userImg4} alt="" />
                <p className='pName'>Courtney Alexander</p>
                <p className='pName'>Founder and CEO</p>
            </div>

            <div className="Person1">
                <img src={UserImg5} alt="" />
                <p className='pName'>Courtney Alexander</p>
                <p className='pName'>Founder and CEO</p>
            </div>

            <div className="Person1">
                <img src={UserImg6} alt="" />
                <p className='pName'>Courtney Alexander</p>
                <p className='pName'>Founder and CEO</p>
            </div>

            <div className="Person1">
                <img src={UserImg7} alt="" />
                <p className='pName'>Courtney Alexander</p>
                <p className='pName'>Founder and CEO</p>
            </div>

            <div className="Person1">
                <img src={UserImg8} alt="" />
                <p className='pName'>Courtney Alexander</p>
                <p className='pName'>Founder and CEO</p>
            </div>
        </div>

        <div className="DivFrequent">

            <div className="FrequentText">
                <h1>Freequently Ask Questions</h1>
                <img src={accardionImg} alt="" />
            </div>

            <div className="FrequentDivImg">
                <img src={ImgThinking} alt="" />
            </div>

        </div>


        <div className="RunDiv">
            <div className="RunImg">
                <img src={runPersonImg} alt="" />
            </div>
            <div className='runDivText'>
                <h1 className='h1Career'>Careers at Createx Agency</h1>
                <p className='pReady'>Ready to join us on our mission to deliver the best sales development <br /> services to businesses around the globe? We’re hiring!</p><br />
                <span className='SeeSpan'>See careers</span>
            </div>
        </div>


        <div className='LatestDiv'>

            <LatestNews />
        </div>

  </>
  );
};

export default About;
