import { AssDraw } from "@mpv-easy/assdraw"
import { Overlay, PropertyBool, } from "@mpv-easy/tool"
import * as ICON from "firacode-icon"

const overlay = new Overlay()
new PropertyBool("pause").observe((v) => {
  console.log("pause: ", v)
  overlay.data = new AssDraw()
    .font("FiraCode Nerd Font Reg")
    .fontSize(32)
    .redText("pause: ")
    .blueText(v ? ICON.Pause : ICON.Play)
    .toString()
  overlay.update()
})
