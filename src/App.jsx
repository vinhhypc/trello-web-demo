import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material"
import { useColorScheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useState } from "react"

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light")
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  )
}

const SelectMode = () => {
  const { mode, setMode } = useColorScheme("dark")
  const handleChange = (event) => {
    setMode(event.target.value)
  }
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Theme</InputLabel>
      <Select value={mode} label="Theme" onChange={handleChange}>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </FormControl>
  )
}
function App() {
  return (
    <>
      <ModeToggle />
      <SelectMode />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
