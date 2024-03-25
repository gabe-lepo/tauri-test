import "bulma";
import { useCallback } from "react";

import { usePostPing } from "../api/usePostPing";

function PingConnection() {
   const { createItem: postPing } = usePostPing();
   const onPing = useCallback(async () => {postPing({})}, [[postPing]]);

   return(
      <div className="block container">
         <div className="box">
            <p className="title">Test Connection</p>
            <div className="block">
               <input
                  className="input is-info"
                  type="text"
                  placeholder="Enter IP Address"
               />
            </div>
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
                     <button className="button is-success" onClick={onPing}>Ping</button>
                  </td>
                  <td>
                     <p className="subtitle">
                        {typeof usePostPing().data?.code}: {usePostPing().data?.code}
                     </p>
                  </td>
               </tr></tbody>
            </table>
         </div>
      </div>
   );
}

export default PingConnection;