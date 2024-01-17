import { Box, Button, } from "@mpv-easy/ui"
import * as ICON from "firacode-icon"
import React, { useState } from "react"

const red = "0000FF"
const green = "00FF00"
const blue = "FF0000"
const yellow = "00FFFF"

// stack overflow
// import { AssColor } from "e-color"
// const red = AssColor.Colors.Red.toHex()
// const green = AssColor.Colors.Green.toHex()
// const blue = AssColor.Colors.Blue.toHex()
// const yellow = AssColor.Colors.Yellow.toHex()

export default function Counter() {
  const [count, setCount] = useState(0)

  console.log("============count: ", count)
  return (
    <Box
      font="FiraCode Nerd Font Reg"
      fontSize={128}
      flexDirection="column"
      justifyContent="end"
    >
      <Button
        text={ICON.Minus}
        onMouseDown={() => {
          console.log("minus: ", count)
          setCount((c) => --c)
        }}
        backgroundColor={red}
        backgroundColorHover={green}
        colorHover={yellow}
      />
      <Box text={count.toString()} backgroundColor={blue} />
      <Button
        backgroundColor={green}
        backgroundColorHover={blue}
        colorHover={yellow}
        onMouseDown={() => {
          console.log("plus: ", count)
          setCount((c) => ++c)
        }}
        text={ICON.Plus}
      />
    </Box>
  )
}
