import('./comp.css')
import hover from '../../service/images/hover (2).png'
import casecart from '../../service/images/case-card.png'
import casecar2 from '../../service/images/hover (3).png'
import pic from '../../service/images/pic.png'
import ill2 from '../../service/images/illustration (2).png'

export function Circles(props) {
    return <div className='circles'>
        <img src={props.src} alt="" />
        <p>{props.text}</p>
    </div>
}

export function Button(props) {
    return <button className='viyoletBtn'>{props.text}</button>
}


export function ClientCase() {
    return <div className='client-div'>
        <div className='header-div-cl'>
            <h2>Read our clients' case studies</h2>
            <img src={hover} alt="" />
        </div>
        <div className='img-div'>
            <img src={casecart} alt="" />
            <img src={casecar2} alt="" />
            <img src={casecart} alt="" />
        </div>
        <div className='last-div-cl'>
            <h2>Explore more case studies</h2>
            <Button text="View all case studies" />
        </div>
    </div>
}


export function PricingCart(props) {
    return <div className='Carts'>
        <b>{props.header}</b>
        <p className='price'><span>{props.price}</span>/mon</p>
        <div className='p-text'>
            <p>Advanced Analytics <br /></p>
            <p>Change Management <br /></p>
            <p>Corporate Finance <br /></p>
            <p>One Way Link Building <br /></p>
            <p>Social Media Marketing <br /></p>
            <p>Strategy & Marketing <br /></p>
            <p>Information Technology <br /></p>
        </div>
        <div>
            <button>Choose plan</button>
        </div>
    </div>
}


export function LatestNews() {
    return <div className='latest-div'>
        <div>
            <h2>Latest news</h2>
            <p>Check more posts in our blog for featured news and advertising insights</p>
            <Button text="Go to blog" />
        </div>
        <div className='div-1cl'>
            <img src={pic} alt="" />
            <p>SEO | July 5, 2020 | By Diane Mccoy</p>
            <b>The Basics of Blogging Search Engine Optimization.</b>
            <p>Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit...</p>
            <button>Read more</button>
        </div>
        <div className='div-2cl'>
            <img src={pic} alt="" />
            <p>SEO | July 5, 2020 | By Diane Mccoy</p>
            <b>The Basics of Blogging Search Engine Optimization.</b>
            <p>Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit...</p>
            <button>Read more</button>
        </div>
    </div>
}


export function RewerseDiv(props) {
    return <div className='rew-div' style={{ flexDirection: `${props.rewers}` }}>
        <div>
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
            <div>
                <div className='btn-1-v'><Button text="Learn more" /></div>
                <Button text="Try SEO toolkit" />
            </div>
        </div>
        <img src={props.src} alt="" />
    </div>
}


export function Banner2() {
    return <div className='banner2-div'>
        <img src={ill2} alt="" />
        <div className='inp-bn2'>
            <h2>Get a Free SEO Analysis!</h2>
            <div className='inps'>
                <input type="text" />
                <input type="text" />
                <input className='inp3' type="text" />
            </div>
            <div className='check-div'>
                <p>I agree to receive communications from Createx SEO Agency</p>
                <Button text="Get a free analysis" />
            </div>
        </div>
    </div>
}


export function Bgcards(props) {
    return <div className='cards-bg'>
        <div className='div1-cards'>
            <img className='bg' src={props.bg} alt="" />
            <img className='cl-logo' src={props.src} alt="" />
            <p className='cl-text'>{props.text1}</p>
        </div>
        <div className='div-2card'>
            <img src={props.src2} alt="" />
            <p>{props.text2}</p>
            <button>View case</button>
        </div>
    </div>
}