import React from 'react'
import('./services.css')
import call from '../service/images/call (1).png'
import brad from '../service/images/breadcrumb.png'
import ill5 from '../service/images/illustration (5).png'
import ill6 from '../service/images/illustration (6).png'
import ill7 from '../service/images/illustration (7).png'
import ill8 from '../service/images/illustration (8).png'
import ill9 from '../service/images/illustration (9).png'
import iconboxes from '../service/images/icon-boxes (1).png'
import clients from '../service/images/Clients.png'
import { Banner2, ClientCase, LatestNews, RewerseDiv } from '../services/small-components/comp'
export function Banner1(props) {
  return <div className="banner-1">
    <img src={props.src} alt="" />
    <h1>{props.text}</h1>
    <p>We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.</p>
    <div>
      <button>Start now</button>
      <img src={call} alt="" />
    </div>
  </div>
}
const Services = () => {
  return <>
    <Banner1 text="Our services" src={brad} />
    <RewerseDiv src={ill5} p='Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. ' h2='Social Media Marketing' />


    <RewerseDiv src={ill6} p='Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing. Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.' h2='Search Engine Optimization' rewers='row-reverse' />


    <RewerseDiv src={ill7} p='Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget. ' h2='Research Service' />


    <RewerseDiv src={ill8} p='Consequat pharetra elit posuere fringilla luctus sit. Curabitur accumsan fermentum magna amet. Sed nec amet posuere tellus pellentesque vitae. Pulvinar nulla sem risus diam volutpat. Amet, sit aliquet magna in viverra at elit nullam.' h2='Content & PR Service' rewers='row-reverse' />


    <RewerseDiv src={ill9} p='Tortor vitae orci hendrerit lobortis eu. Metus aliquam sem tellus ut fringilla purus nisl, consectetur netus. Velit ac feugiat ut mattis dis nullam ultrices amet. Lacus eu neque arcu arcu curabitur at sapien. Id sed aliquet id sit nibh ornare massa scelerisque.' h2='Payed Traffic Management' />



    <Banner2 />

    <div className='icon-boxes-div'>
      <h1>Markets in which we operate</h1>
      <img src={iconboxes} alt="" />
    </div>


    <ClientCase />

    <ClientsImg />


    <LatestNews />
  </>
}
export function ClientsImg() {
  return <div className='clients-img'>
    <img src={clients} alt="" />
  </div>

}

export default Services
