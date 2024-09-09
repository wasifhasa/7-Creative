import Agency from "./Components/Agency";
import Card from "./Components/Card";
import Clients from "./Components/Testimonials";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Team from "./Components/Team";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Project from "./Components/Project";

 const Page = () => {
  return (
   <div>
   <Navbar/>
   <Home/>
   <Agency/>
   <Services/>
   <Card/>
   <Clients/>
   <Team/>
   <Project/>
   <Contact/>
   <Footer/>
   </div>
  );
}
export default Page