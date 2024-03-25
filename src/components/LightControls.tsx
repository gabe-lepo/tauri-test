import "bulma";
import { useCallback } from "react";

import {
   usePostLightsOn,
   usePostLightsBoost,
   usePostLightsOff,
} from "../api/usePostLightsControls";

function LightControls() {
   const { createItem: setLightsDim } = usePostLightsOn();
   const { createItem: setLightsBoost } = usePostLightsBoost();
   const { createItem: setLightsOff } = usePostLightsOff();

   const onLightsDim = useCallback(async () => {setLightsDim({})}, [setLightsDim]);
   const onLightsBoost = useCallback(async () => {setLightsBoost({})}, [setLightsBoost]);
   const onLightsOff = useCallback(async () => {setLightsOff({})}, [setLightsOff]);
   return(
      <div className="block container">
         <div className="box">
            <p className="title">LEDs</p>
            <table className="table">
               <thead><tr>
                  <td>
                     <p className="subtitle">Controls</p>
                  </td>
                  <td>
                     <p className="subtitle">Results</p>
                  </td>
               </tr></thead>
               <tbody><tr>
                  <td>
                     <button className="button is-success" onClick={onLightsDim}>DIM</button>
                  </td>
                  <td>
                     <p className="subtitle">
                        {typeof usePostLightsOn().data?.code}: {usePostLightsOn().data?.code}
                     </p>
                  </td>
               </tr>
               <tr>
                  <td>
                     <button className="button is-success" onClick={onLightsBoost}>BOOST</button>
                  </td>
                  <td>
                     <p className="subtitle">
                        {typeof usePostLightsBoost().data?.code}: {usePostLightsBoost().data?.code}
                     </p>
                  </td>
               </tr>
               <tr>
                  <td>
                     <button className="button is-success" onClick={onLightsOff}>OFF</button>
                  </td>
                  <td>
                     <p className="subtitle">
                        {typeof usePostLightsOff().data?.code}: {usePostLightsOff().data?.code}
                     </p>
                  </td>
               </tr></tbody>
            </table>
         </div>
      </div>
   );
}

export default LightControls;
