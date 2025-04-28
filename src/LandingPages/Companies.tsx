import Marquee from "react-fast-marquee"
import { companies } from "../Data/Data"


const Companies = () => {
  return (
    <div>
        <div>
            <Marquee pauseOnHover={true} speed={100} gradient={false} className="bg-mine-shaft-900">
                {companies.map((company, index) => (
                    <div key={index} className="text-white hover:cursor-pointer text-2xl font-bold px-4">
                        {company}
                    </div>
                ))}
            </Marquee>
        </div>
    </div>
  )
}

export default Companies