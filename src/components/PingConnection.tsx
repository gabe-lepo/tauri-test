import "bulma";
import { useCallback } from "react";

import { usePostPing } from "../api/usePostPing";

function PingConnection() {
   const { createItem: postPing } = usePostPing();
   const onPing = useCallback(async () => {postPing({})}, [[postPing]]);

   return(
      <div className="block container">
         <div className="box">
            <span className="title">Test Connection</span>
            <table className="table">
               <thead><tr>
                  <td>
                     <span className="subtitle">Controls</span>
                  </td>
                  <td>
                     <span className="subtitle">Results</span>
                  </td>
               </tr></thead>
               <tr>
                  <td>
                     <button className="button is-success" onClick={onPing}>Ping</button>
                  </td>
                  <td>
                     <p className="subtitle">
                        {typeof usePostPing().data?.code}: {usePostPing().data?.code}
                     </p>
                  </td>
               </tr>
            </table>
         </div>
      </div>
   );
}

export default PingConnection;