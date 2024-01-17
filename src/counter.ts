import { AssDraw } from "@mpv-easy/assdraw"
import { Overlay, command } from "@mpv-easy/tool"
command("set osc no")

let c = 0
const counter = new Overlay()

setInterval(() => {
  counter.data = new AssDraw()
    .redText("count: ")
    .blueText((c++).toString())
    .toString()
  counter.update()
}, 1000)
