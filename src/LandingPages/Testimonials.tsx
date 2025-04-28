import { testimonials } from "../Data/Data"


const Testimonials = () => {
  return (
    <div className="flex items-center justify-center bg-mine-shaft-900 p-4">
        {testimonials.map((item, index) => <div key={index} className="flex items-center justify-center  m-2 rounded-xl p-4 flex-col bg-bright-sun-200">
            <div className="font-bold">{item.name}</div>
            <div>{item.testimonial}</div>
        </div>)}
    </div>
  )
}

export default Testimonials