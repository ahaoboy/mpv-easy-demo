import { AssDraw } from "@mpv-easy/assdraw"
import { PropertyBool, OsdOverlay } from "@mpv-easy/tool"

const overlay = new OsdOverlay()
new PropertyBool("pause").observe((v) => {
  console.log("pause: ", v)
  overlay.data = new AssDraw()
    .fontSize(32)
    .redText("pause: ")
    .blueText(v ? "pause" : "play")
    .toString()
  overlay.update()
})
