import { Outlet } from "react-router-dom";
import Nav from "../componenets/includes/Nav";
import Footer from "../componenets/includes/Footer";


export default function MainLayout() {
    return (
      <>

<header>
<div className="container">
   <Nav/>
</div>
</header>

<Outlet/>

<Footer/>

</>
    );
}