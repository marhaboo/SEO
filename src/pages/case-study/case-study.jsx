import { Button, ClientSay } from "../case-studies/case-studies-comp";
import LampBanner, { CompLamp, OurClient, Seo } from "./case-study-comp";
import "./style-study.css"
import "../case-studies/style.sass"
export default function Study(){
  return <>
      <LampBanner title={"200% increase in conversion rate for Lovato Company"} nav={" Case Studies > 200% increase in conversion rate for Lovato Company"} logo={"src/pages/case-studies/img/client-logos.png"}/>
      <CompLamp/>
      <Seo/>
      <div style={{backgroundColor:"#F4F5F6",padding:"30px"}}>
    <ClientSay/>
    <OurClient name={"Check out our other case studies"}/>
    <div style={{display:"flex",justifyContent:"center"}}><h2>Explore more case studies</h2>
    <Button title={"View all case studies"}/></div>
    </div>
  </>
}