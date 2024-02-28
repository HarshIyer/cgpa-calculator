"use client"
import InputForm from "./components/InputForm"
import { MantineProvider } from "@mantine/core";
const app = () => {
  return(
    <MantineProvider >
    <div>
      <InputForm />
      <div style={{marginTop:'10px',display:'flex',justifyContent:'center'}}>
        Made by Harsh.<pre> </pre> <a href="https://github.com/HarshIyer/cgpa-calculator">Github</a>
      </div>
    </div>
    </MantineProvider>
  )
}

export default app