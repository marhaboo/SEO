import './latest-news.css'
import newsImg1 from '../latest-news/images/small.png'
import newsImg2 from '../latest-news/images/small (2).png'
export function LatestNews() 
{
    return <>
    
        <div className="MainNews">

            <div className="NewsText">
                <h1 className="H1Latest">Latest news</h1>
                <p className='Plorem'>Check more posts in our blog for <br /> featured news and advertising <br /> insights</p>
                <p className='PGoto'>Go to blog</p>
            </div>

            <div className='NewsImg1'>
                <img src={newsImg1} alt="" />
            </div>
            <div className='NewsImg1'>
                <img src={newsImg2} alt="" />
            </div>

        </div>

    </>    
}