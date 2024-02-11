import "@mpv-easy/tool"
import React from "react"
import { command, setPropertyBool } from "@mpv-easy/tool"
import { render } from "@mpv-easy/ui"

import Element from "./snake"

command("set osc no")
command("set window-dragging no")
setPropertyBool("pause", true)
render(<Element />)

// import "./simple-play"
