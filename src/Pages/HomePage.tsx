import { IconBriefcase2 } from "@tabler/icons-react"
import Header from "../header/Header"
import DreamJob from "../LandingPages/DreamJob"
import JobCategory from "../LandingPages/JobCategory"
import Working from "../LandingPages/Working"
import Companies from "../LandingPages/Companies"
import Testimonials from "../LandingPages/Testimonials"
import { Subscribe } from "../LandingPages/Subscribe"
import Footer from "../footer/Footer"


const HomePage = () => {
  return (
    <div className="bg-mine-shaft-950 font-['poppins']" >
       
        <DreamJob/>
        <Companies/>
        <JobCategory/>
        <Working/>
        <Testimonials/>
        <Subscribe/>
       
        </div>
  )
}

export default HomePage