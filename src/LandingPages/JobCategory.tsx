import { jobCategory } from "../Data/Data"


const JobCategory = () => {
  return (
    <div>
        <div className="flex items-center justify-center w-[90%] bg-mine-shaft-900 h-20">
            {jobCategory.map((category, index) => (
                <div key={index} className="text-white text-2xl font-bold p-9 px-4">
                    {category}
                </div>
            ))}
        </div>
    </div>
  )
}

export default JobCategory