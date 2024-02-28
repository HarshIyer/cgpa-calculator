"use client"
import InputForm from "./components/InputForm"
import { MantineProvider } from "@mantine/core";
const app = () => {
  return(
    <MantineProvider >
    <div>
      <InputForm />
    </div>
    </MantineProvider>
  )
}

export default app