import { AssDraw } from "@mpv-easy/assdraw"
import { Overlay, PropertyBool } from "@mpv-easy/tool"

const overlay = new Overlay()
new PropertyBool("pause").observe((v) => {
  console.log("pause: ", v)
  overlay.data = new AssDraw()
    .fontSize(32)
    .redText("pause: ")
    .blueText(v ? "pause" : "play")
    .toString()
  overlay.update()
})
