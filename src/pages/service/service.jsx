import img34 from '../service/images/image (34).png'
import left2 from '../service/images/left (2).png'
import left3 from '../service/images/left (3).png'
import left4 from '../service/images/left (4).png'
import line from '../service/images/line.png'
import brad3 from '../service/images/breadcrumb (5).png'

import './service.css'


import { Banner1, ClientsImg } from "../services/services";
import { ClientCase } from './small-components/comp'
import { Ourservice, PricingDiv } from './small-components/comp'
const Service = () => {
  return <>
    <Banner1 text="Search Engine Optimization" src={brad3} />
    <ClientsImg />

    <div className="div-before-seo">
      <img src={img34} alt="" />
      <div>
        <h1>We go above and beyond to ensure successful SEO</h1>
        <p>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
      </div>
    </div>


    <div className="div-Seo">
      <h1>SEO services include</h1>
      <div>
        <img src={left2} alt="" />
        <img src={left3} alt="" />
        <img src={left4} alt="" />
        <img src={left3} alt="" />
        <img src={left2} alt="" />
        <img src={left4} alt="" />
      </div>
    </div>


    <div className="viyolet-div">
      <h1>Get a Free SEO Analysis!</h1>
      <div>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your working email" />
        <input type="text" placeholder="http://yoursite.com" />
        <button>Analyse your site</button>
      </div>
    </div>

    <div className="line-div">
      <h1>That’s how it works</h1>
      <div className="line-boxes">
        <div className="box1">
          <div>
            <p>STEP 2</p>
            <b>Technical SEO Optimizations</b>
            <p>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</p>
          </div>
          <div>
            <p>STEP 4</p>
            <b>Content Marketing</b>
            <p>Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor. Faucibus in leo, nulla odio nulla imperdiet quis faucibus neque.</p>
          </div>
        </div>
        <img src={line} alt="" />
        <div className="box2">
          <div>
            <p>STEP 1</p>
            <b>Off-Site SEO Analysis</b>
            <p>Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
          </div>
          <div className="top-box">
            <p>STEP 3</p>
            <b>Usability Check</b>
            <p>Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. Varius praesent pretium in leo, accumsan, in ultricies. </p>
          </div>
        </div>
      </div>
    </div>

    <div style={{ margin: "100px 0px 200px 0px" }}><PricingDiv /></div>

    <ClientCase />

    <div style={{ margin: "100px 0px 200px 0px" }}><Ourservice /></div>
  </>
}

export default Service
