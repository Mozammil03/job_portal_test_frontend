import { TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"



const DreamJob = () => {
  return (
    <div className="flex flex-col items-center text-center justify-between p-8 leading-loose gap-4 bg-mine-shaft-950">
        <div className="flex flex-col items-center justify-center  bg-mine-shaft-950">
            <h1 className="text-4xl font-bold text-bright-sun-400">Find Your Dream Job</h1>
            <p className="mt-4 text-lg text-white">Discover the best job opportunities tailored just for you.</p>
            <button className="mt-6 px-6 py-3 bg-bright-sun-400 text-white rounded-lg hover:bg-bright-sun-500 transition duration-300">
            Get Started
            </button>
        </div>
        <div className="items-center bg-bright-sun-50 flex rounded-xl  p-4">
            <TextInput
            className="[&_input]:!text-mine-shaft-400"
      variant="unstyled"
      label="Job title"
      placeholder="Software Engineer"
    />
     <TextInput
      variant="unstyled"
      label="Job type"
      placeholder="full-time"
    />
    <IconSearch className="text-bright-sun-400" size={24} />


        </div>
    </div>
  )
}

export default DreamJob