import BannerSearch, { CardStudies, ClientSay, CompanyLogo, LatestNews } from "./case-studies-comp";
import "./style.sass";  

export default function Studies(){
  return <>
  <BannerSearch  title={"Case Studies"} text={" > Case Studies"} desc={"We help our clients get better results with our creative and data-driven approach to online advertising. View our case study portfolio and learn more about the process that sets us apart."}/>
  <div>
        <div className="study_cat">
            <span>All case studies</span>
            <span>Social Media</span>
            <span>SEO</span>
            <span>Research</span>
            <span>Content & PR</span>
            <span>Payed Traffic</span>
        </div>
        <div className="card_studies_main">
        <CardStudies img={"src/pages/case-studies/img/plate.png"} title={"Createx SEO Agency helped JNational Inc. increase their MQL to SQL conversion rate by 300%."}/>
        <CardStudies img={"src/pages/case-studies/img/ship.png"} title={"Createx SEO Agency helped JNational Inc. increase their MQL to SQL conversion rate by 300%."}/>
        <CardStudies img={"src/pages/case-studies/img/lamp.png"} title={"Createx SEO Agency helped JNational Inc. increase their MQL to SQL conversion rate by 300%."}/>
        <CardStudies img={"src/pages/case-studies/img/plate.png"} title={"Createx SEO Agency helped JNational Inc. increase their MQL to SQL conversion rate by 300%."}/>
        <CardStudies img={"src/pages/case-studies/img/ship.png"} title={"Createx SEO Agency helped JNational Inc. increase their MQL to SQL conversion rate by 300%."}/>
        <CardStudies img={"src/pages/case-studies/img/lamp.png"} title={"Createx SEO Agency helped JNational Inc. increase their MQL to SQL conversion rate by 300%."}/>

        </div>
    </div>
    <CompanyLogo/>
    <ClientSay/>
    <LatestNews/>
  </>
}