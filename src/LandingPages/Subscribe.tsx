import { Button,  TextInput } from "@mantine/core"


export const Subscribe = () => {
  return (
    <div className="flex flex-row items-center gap-2 justify-center p-4">
        <Button className="!bg-bright-sun-200 hover:!bg-bright-sun-300 !text-mine-shaft-900 font-bold text-2xl p-4 rounded-full">
            Subscribe
        </Button>
        <TextInput
        className="[&_input]:!bg-mine-shaft-900 [&_input]:p-4 [&_input]:!text-white [&_input]:!placeholder:text-white [&_input]:!border-bright-sun-200 [&_input]:!border-2"
        variant="unstyled"
        placeholder="your@mail.com" />
    </div>
  )
}
