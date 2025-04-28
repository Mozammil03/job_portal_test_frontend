
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
        { name: "Find Jobs", url: "find-jobs" },
        { name: "Find Talent", url: "find-talent" },
        { name: "Upload Job", url: "upload-job" },
        { name: "About Us", url: "about" },
        { name:"Sign Up", url:"sign-up"},
    ];

    const location = useLocation();

  return (
    <div className="flex items-center gap-4 text-white">
        {links.map((link,index) => (
            
            <div className={`p-4 ${location.pathname=== '/'+link.url?"text-bright-sun-400":""}`} key={index}>
                
                <Link to={'/'+link.url} key={index} className="px-4">
                {link.name}
                </Link>
            </div>
        ))}
        
        
    </div>
  )
}

export default NavLinks