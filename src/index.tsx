// import polyfill
import "@mpv-easy/tool"

import React from "react"
import { command } from "@mpv-easy/tool"
import { render } from "@mpv-easy/ui"
import Element from "./counter-ui"
command("set osc no")

render(<Element />)
