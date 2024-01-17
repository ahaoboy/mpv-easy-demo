import { usePropertyBool } from "@mpv-easy/hook"
import { PropertyBool } from "@mpv-easy/tool"
import { Box } from "@mpv-easy/ui"
import { AssColor } from "e-color"
import React, { useEffect, useState } from "react"
import * as ICON from "firacode-icon"

const pauseProp = new PropertyBool("pause")
export default function Play() {
  const pauseIcon = ICON.Pause
  const playIcon = ICON.Play
  const [pause, setPause] = usePropertyBool("pause", pauseProp.value)
  const iconColor = AssColor.Colors.Yellow
  const iconHoverColor = AssColor.Colors.Yellow
  const [color, setColor] = useState(iconColor.toHex())

  useEffect(() => {
    pauseProp.observe((v) => {
      console.log("pause change: ", v)
    })
  }, [])

  return (
    <Box
      onMouseDown={() => {
        setPause(!pause)
      }}
      onMouseEnter={() => {
        setColor(iconHoverColor.toHex())
      }}
      onMouseLeave={() => {
        setColor(iconColor.toHex())
      }}
      fontSize={64}
      color={color}
      text={pause ? pauseIcon : playIcon}
    />
  )
}
