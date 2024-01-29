import "@mpv-easy/tool"
import React from "react"
import { command } from "@mpv-easy/tool"
import { render } from "@mpv-easy/ui"

import Element from "./snake"

command("set osc no")
command("set window-dragging no")

render(<Element />)

// import "./simple-play"
