import "bulma";

import { useEffect, useState } from "react";
import { currentMonitor, Monitor } from "@tauri-apps/api/window";

function MonitorInfo() {
   const [monitorInfo, setMonitorInfo] = useState<Monitor | null>();

   useEffect(() => {
      currentMonitor().then((info) => {
         setMonitorInfo(info);
      }).catch((err) => {
         console.error("@@@ MonitorInfo: Error -", (err));
      });
   }, [monitorInfo]);

   return(
      <div className="block container box">
         <p className="title">Monitor Info</p>
         <table className="table">
            <thead><tr>
               <td>
                  <p className="subtitle">Properties</p>
               </td>
               <td>
                  <p className="subtitle">Data</p>
               </td>
            </tr></thead>
            <tbody>
               <tr>
                  <td>Name</td>
                  <td>{monitorInfo?.name}</td>
               </tr>
               <tr>
                  <td>{monitorInfo?.size.type} Width</td>
                  <td>{monitorInfo?.size.width} px</td>
               </tr>
               <tr>
                  <td>{monitorInfo?.size.type} Height</td>
                  <td>{monitorInfo?.size.height} px</td>
               </tr>
               <tr>
                  <td>Scale Factor</td>
                  <td>{monitorInfo?.scaleFactor.toString()}x</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}

export default MonitorInfo;