import { work } from "../Data/Data"


const Working = () => {
  return (
    <div className="p-4">
        <div className="flex items-center justify-center bg-mine-shaft-900 "> 
            {work.map((item, index) => <div key={index}>
                <div  className="hover:cursor-pointer hover:bg-bright-sun-400 flex items-center justify-center pt-10 bg-mine-shaft-700 m-2 rounded-xl ">
                    <div className="text-white text-2xl font-bold p-4">
                        {item.name}
                    </div>
                    <div className="text-white p-9 px-4">
                        {item.desc}
                    </div>
                </div>
            </div>)}
        
        </div>
        <div className="flex items-center justify-center bg-mine-shaft-900 w-fit border-bright-sun-200 border-2 rounded-xl p-4 m-4 font-extrabold text-bright-sun-400 hover:cursor-pointer hover:bg-bright-sun-400 hover:text-mine-shaft-900">
            <div>complete profile</div>
            <div>70% completed</div>
        </div>
    </div>
  )
}

export default Working