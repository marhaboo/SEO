import Header from './header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  )
}

export default Layout
