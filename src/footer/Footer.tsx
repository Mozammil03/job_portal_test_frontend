import { Link } from "react-router-dom"
import { footerLinks } from "../Data/Data"


const Footer = () => {
  return (
    <div className="flex items-center justify-center text-white gap-2 bg-mine-shaft-900 p-4">
        {footerLinks.map((item, index) => (<div key={index}>
            <div className="p-4 m-2 rounded-xl bg-mine-shaft-700">
            <div className="font-semibold text-bright-sun-400">{item.title}</div>
            {item.links.map((link, index) => <div className="hover:cursor-pointer hover:text-bright-sun-400 " key={index}>
                <Link to={'/'+link.route} key={index} className="px-4">
                {link.title}
                </Link>
                </div>)}
            </div>
            
        </div>))}
    </div>
  ) 
}

export default Footer
