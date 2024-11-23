
export default function BannerSearch({ text, title, desc }) {  
    return (  
        <div className="banner_phone">  
            <span>  
                <img src="src/assets/img/home.png" alt="" />  
                {text}  
            </span>  
            <h1>{title}</h1>  
            <span>{desc}</span>  
            <div className="banner_btn">  
                <div className="name">  
                    <div className="name_box_search">  
                        <span className="name_box">  
                            <label htmlFor="website-url">Your website URL</label>  
                            <input id="website-url" placeholder="http://yoursite.com" type="text" />  
                        </span>  
                        <button>Subscribe</button>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
}
export  function CardStudies({img,title}){
    return <>
    <div className="card_studies_container">
        <div className="card_studies_box_img" style={{backgroundImage:`url(${img})`}}>
            <span><img src="src/assets/img/client-logo1.png" alt="" /></span>
            <span>Charity organisation</span>
        </div>
        <div className="card_studies_box">
         <div className="how_box">
            <CircleImg  text={"Engagement"} num={"90%"} img={"src/pages/case-studies/img/circle.png"}/>
            <CircleImg  text={"Deliverability"} num={"100%"} img={"src/pages/case-studies/img/circles.png"}/>
         </div>
         <span className="gray">{title}</span>  
        </div>
    </div>
    </>
    }
    export function CircleImg({img,num,text}){
        return <>
        <div className="card_logo_box">
            <span><img src={img} alt="" /></span>
            <div className="card_logo">
                <span>{num}</span>
                <span>{text}</span>
            </div>
        </div>
        </>
    }
    export function CompanyLogo() {
        return <>
            <div className="company_logo">
                <span><img src="src/pages/case-studies/img/client-logo123.png" alt="" /></span>
                <span><img src="src/pages/case-studies/img/client-logos.png" alt="" /></span>
                <span><img src="src/pages/case-studies/img/client-logo.png" alt="" /></span>
                <span><img src="src/pages/case-studies/img/client-logo1.png" alt="" /></span>
                <span><img src="src/pages/case-studies/img/client-logo2.png" alt="" /></span>
                <span><img src="src/pages/case-studies/img/client-logo1.png" alt="" /></span>
            </div>
        </>
    }
    export function ClientSay() {
        return <>
            <div className="client_say">
                <h2>What our clients say</h2>
                <div className="say_card">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</span>
                    <div className="name">
                        <span><img src="src/pages/case-studies/img/avatar.png" alt="" /></span>
                        <div className="name_box">
                            <p>Courtney Alexander</p>
                            <span>Position, Company name</span>
                        </div>
                    </div>
                </div>
            </div></>
    }
    export function LatestNews() {
        return <>
            <div className="latest_news">
                <div className="latest_news_box">
                    <h1>Latest news</h1>
                    <span>Check more posts in our blog for featured news and advertising insights</span>
                    <span><Button title={"Go to blog"} /></span>
                </div>
                <div>
    
                </div>
                <div className="news_new">
                    <News text={"The Basics of Blogging Search Engine Optimization."} desc={"Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit..."} img={"src/pages/case-studies/img/pic.png"} />
                    <News img={"src/pages/case-studies/img/pic2.png"} desc={"Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit..."} text={"The Basics of Blogging Search Engine Optimization."}  />
    
                </div>
            </div>
        </>
    }
    export function News({ img, text, desc }) {
        return <>
            <div className="news">
                <span className="news_img"><img src={img} alt="" /></span>
                <span className="gray">Marketing | July 2, 2020 | By Diane Mccoy</span>
                <div className="news_text">
                    <h2>{text}</h2>
                    <p>{desc}</p>
                </div>
                <button>Read more</button>
            </div>
        </>
    }
    export function Button({title}){
        return <>
        <button className="btn_custom">{title}</button>
        </>
    }