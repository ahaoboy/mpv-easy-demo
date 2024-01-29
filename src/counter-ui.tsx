import { Box, Button } from "@mpv-easy/ui"
import React, { useState } from "react"

const White = "FFFFFF"
const Gray = "cccccc"
const Black = "000000"
const Yellow = "00FFFF"

const boxSize = 200
const padding = 10
function Counter() {
  const [count, setCount] = useState(0)

  console.log("============count: ", count)
  return (
    <Box
      id="counter-main"
      font="FiraCode Nerd Font Mono Reg"
      fontSize={boxSize / 4}
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
    >
      <Button
        id="counter-minus"
        text={"-"}
        onMouseDown={() => {
          console.log("minus: ", count)
          setCount((c) => --c)
        }}
        height={boxSize}
        width={boxSize}
        backgroundColor={Gray}
        backgroundColorHover={White}
        color={Black}
        colorHover={Yellow}
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <Box
        id="counter-text"
        text={count.toString()}
        backgroundColor={Gray}
        color={Black}
        height={boxSize}
        width={boxSize}
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <Button
        id="counter-plus"
        backgroundColor={Gray}
        backgroundColorHover={White}
        color={Black}
        colorHover={Yellow}
        onMouseDown={() => {
          console.log("plus: ", count)
          setCount((c) => ++c)
        }}
        text={"+"}
        height={boxSize}
        width={boxSize}
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
    </Box>
  )
}

export default Counter
