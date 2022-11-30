import * as bitecs from "bitecs";
import * as bitComponents from "./bit-components";

declare global {
  interface Window {
    $B: typeof bitecs;
    $C: typeof bitComponents;
  }
}

export function exposeBitECSDebugHelpers() {
  window.$B = bitecs;
  window.$C = bitComponents;
}
