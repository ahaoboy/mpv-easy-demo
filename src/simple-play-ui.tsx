import { usePropertyBool } from "@mpv-easy/hook"
import { PropertyBool } from "@mpv-easy/tool"
import { Box } from "@mpv-easy/ui"
import React, { useEffect, useState } from "react"

const pauseProp = new PropertyBool("pause")
export default function Play() {
  const pauseIcon = "⏸"
  const playIcon = "⏵"
  const [pause, setPause] = usePropertyBool("pause", pauseProp.value)
  const iconColor = "0000FF"
  const iconHoverColor = "00FFFF"
  const [color, setColor] = useState(iconColor)

  useEffect(() => {
    pauseProp.observe((v) => {
      console.log("pause change: ", v)
    })
  }, [])

  return (
    <Box
      backgroundColor="00FF00"
      onMouseDown={() => {
        setPause(c => !c)
        pauseProp.value = !pause
      }}
      onMouseEnter={() => {
        setColor(iconHoverColor)
      }}
      onMouseLeave={() => {
        setColor(iconColor)
      }}
      fontSize={64}
      color={color}
      text={pause ? pauseIcon : playIcon}
    />
  )
}
