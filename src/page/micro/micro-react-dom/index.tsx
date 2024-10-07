import WujieReact from "wujie-react";
import {MicroUrl} from "../../../service/dto/micro";

export const MicroReactDom = () => {

  return (
    <WujieReact
      name="micro-react-dom"
      width="100%"
      height="100%"
      url={MicroUrl.ReactDom}
      sync={true}
    />
  )
}