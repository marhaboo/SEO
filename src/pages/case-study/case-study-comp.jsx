import { Button } from "../case-studies/case-studies-comp"

export default function LampBanner({nav,logo,title,img}){
    return <>
    <div  className={`lamp_banner ${img}`}>
        <div className="lamp_nav"><span>{nav}</span></div>
        <div>
            <img src={logo} alt="" />
            </div>
        <div>
         <h1>{title}</h1>
        </div>
    </div>
    </>
}
export function CompLamp() {
    return <>
        <div className="comp_lamp_diagram">
            <div className="comp_lamp_block">
                <div className="card_logo_container">
                    <div className="card_logo_box">
                        <span><img src="src/pages/case-study/img/circle(1).png" alt="" /></span>

                        <span className="card_logo">70%<span>Open Rate</span></span>
                    </div>
                    <div className="card_logo_box">
                    <span><img src="src/pages/case-study/img/circle.png" alt="" /></span>

                        <span className="card_logo">200%<span>Growth in sales</span></span>
                    </div>
                    <div className="card_logo_box">
                        <span className="card_logo">8,000<span>DAU</span></span>
                    </div>
                </div>
                <div>
                    <p>The Company has been with us for 3 months. They are in our optimal package for SEO & our premium package for SEM plus Ad spend ($1,000). The client’s goal was to get growth in sales. We helped exceeding the client’s goals in generating new clients.</p>
                    <span>At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.</span>
                    <br /><br />
                    <span><img src="src/pages/case-study/img/diagram.png" alt="" /></span>
                    <div>
                        <h2>Strategies</h2>
                        <p><span>✓</span>Gravida elit et libero, varius congue risus quisque enim.</p>
                        <p><span>✓</span>Sit quis vitae, gravida aliquam condimentum.</p>
                        <p><span>✓</span>Praesent et facilisis nam mus senectus massa dignissim.</p>
                        <p><span>✓</span>Fermentum diam elementum viverra proin.</p>
                    </div>
                    <br />
                    <span>Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.</span>
                    <span><img src="src/pages/case-study/img/illustration.png" alt="" /></span>
                    <div>
                <h2>Resieved goals</h2>
                <p><span className="ok">✓</span>Bibendum malesuada mauris, id nisl enim diam.</p>
                <p><span className="ok">✓</span>Sit quis vitae, gravida aliquam condimentum.</p>
                <p><span className="ok">✓</span>Praesent et facilisis nam mus senectus massa dignissim.</p>
                <p><span className="ok">✓</span>Fermentum diam elementum viverra proin.</p>
             </div>
             <div>
                <h2>Results</h2>
                <p><span>✓</span>Gravida elit et libero, varius congue risus quisque enim.</p>
                <p><span>✓</span>Sit quis vitae, gravida aliquam condimentum.</p>
                <p><span>✓</span>Praesent et facilisis nam mus senectus massa dignissim.</p>
                <p><span>✓</span>Fermentum diam elementum viverra proin.</p>
             </div>
                </div>
            </div>
            <div className="comp_lamp_box">
                <div className="comp_lamp_box_elem">
                    <h3>About the client</h3>
                    <span>At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum.</span>
                    <h3>Industry</h3>
                    <span>Electric company - B2B</span>
                    <h3>Services rendered</h3>
                    <div>
                        <p><span>✓</span>Remarking</p>
                        <p><span>✓</span>Conversion Rate Optimization</p>
                        <p><span>✓</span>User Testing</p>
                        <p><span>✓</span>PPC Management</p>
                        <p><span>✓</span>Usability Testing</p>
                        <p></p>
                    </div>
                   
                </div>
                <div className="media_btn">
                    <GrayBtn title={"#SEO"} />
                    <GrayBtn title={"#research"} />
                    <Button title={"#payed_traffic"} />
                </div>
                <p className="media_btn">Share <span><img src="src/assets/img/socials2.png" alt="" /></span></p>
            </div>
        </div>
    </>
}
export  function Seo() {
    return <>
        <div className="seo_container">
            <div className="seo_img">
                <span><img src="src/pages/case-study/img/group.png" alt="" /></span>
            </div>
            <div className="seo_start">
                <h2>Get a Free SEO Analysis!</h2>
                <div className="seo_input_box">
                    <span className="seo_start_box">
                        <label htmlFor="">Name</label>
                        <input placeholder="Your name" type="text" />
                        </span>
                       <span className="seo_start_box"> 
                        <label htmlFor="">Email</label>
                       <input placeholder="Your working email" type="text" /></span>
                   
                </div>
                <input type="text" />
                <div className="seo_apply">
                    <span className="seo_apply_check"><span><input type="checkbox" /></span>
                        <span>I agree to receive communications from <br /> Createx SEO Agency</span></span>
                    <Button title={"Get a free analysis"} />
                </div>
            </div>
        </div>
    </>
}
export function GrayBtn({title}){
    return <>
    <button className="btn_gray">{title}</button>
    </>
}
export function OurClient({ name }) {
    return <>
        <div className="btn_more_box">
            <div className="btn_more">
                <h1>{name ? name : "Related case studies"}</h1>
                <span><img src="src/assets/img/hover1.png" alt="" /></span>
            </div>
            <div className="card_box">
                <CardRead img={"src/pages/case-study/img/circle.png"} im2={"src/pages/case-study/img/circle(1).png"} ptext={"90%"} ptext2={"100%"} pdesc2={"Deliverability"} pdesc={"Engagement"} text={"Charity organisation"} logo={"src/assets/img/client-logo2.png"} desc={"Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."} />
                <CardRead img={"src/pages/case-study/img/circle.png"} im2={"src/pages/case-study/img/circle(1).png"} ptext={"90%"} ptext2={"100%"} pdesc2={"Deliverability"} pdesc={"Engagement"} text={"Charity organisation"} logo={"src/assets/img/client-logo2.png"} desc={"Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."} />
                <CardRead im2={"src/pages/case-study/img/circle.png"} img={"src/pages/case-study/img/circle(1).png"} ptext={"70%"} ptext2={"200%"} pdesc2={"Deliverability"} pdesc={"Engagement"} text={"Charity organisation"} logo={"src/assets/img/client-logo123.png"} desc={"Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."} />
            </div>
        </div>
    </>
}
export function CardRead({ logo, text, desc, ptext, ptext2, pdesc, pdesc2, img, im2 }) {
    return <>
        <div className="card_read">
            <div className="card_text">
                <img src={logo} alt="" />
                <span>{text}</span>
            </div>
            <p className="card_desc">
                <p>{desc}</p>
            </p>
            <div className="card_logo_container">
                <div className="card_logo_box">
                    <span><img src={img} alt="" /></span>
                    <span className="card_logo">{ptext} <span>{pdesc}</span></span>
                </div>
                <div className="card_logo_box">
                    <span><img src={im2} alt="" /></span>
                    <span className="card_logo">{ptext2} <span>{pdesc2}</span></span>
                </div>
            </div>
        </div>
    </>
}