import "bulma";
import { useCallback } from "react";

import {
   usePostLightsOn,
   usePostLightsBoost,
   usePostLightsOff,
} from "../api/usePostLightsControls";

function BasicControls() {
   const { createItem: setLightsDim } = usePostLightsOn();
   const { createItem: setLightsBoost } = usePostLightsBoost();
   const { createItem: setLightsOff } = usePostLightsOff();

   const onLightsDim = useCallback(async () => {setLightsDim({})}, [setLightsDim]);
   const onLightsBoost = useCallback(async () => {setLightsBoost({})}, [setLightsBoost]);
   const onLightsOff = useCallback(async () => {setLightsOff({})}, [setLightsOff]);
   return(
      <div className="block container">
         <div className="box">
            <button className="button is-success" onClick={onLightsDim}>
               DIM
            </button>
            <button className="button is-success" onClick={onLightsBoost}>
               BOOST
            </button>
            <button className="button is-success" onClick={onLightsOff}>
               OFF
            </button>
         </div>
      </div>
   );
}

export default BasicControls;
