import WujieReact from "wujie-react";
import {MicroUrl} from "../../../service/dto/micro";

export const MicroWebrtc = () => {

  return (
    <WujieReact
      name="micro-webrtc"
      width="100%"
      height="100%"
      url={MicroUrl.Webrtc}
      sync={true}
    />
  )
}