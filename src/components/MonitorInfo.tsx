import "../main.css";

import { useEffect, useState } from "react";
import { currentMonitor, Monitor } from "@tauri-apps/api/window";
import CardTitle from "./CardTitle";

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
      <>
         <CardTitle title="Monitor Info" subtitle={monitorInfo?.name?.toString()} />
         <div className="table w-full">
            <div className="table-header-group">
               <div className="table-row">
                  <div className="table-cell">Properties</div>
                  <div className="table-cell">Data</div>
               </div>
            </div>
            <div className="table-row-group">
               <div className="table-row">
                  <div className="table-cell">{monitorInfo?.size.type} Width</div>
                  <div className="table-cell">{monitorInfo?.size.width} px</div>
               </div>
               <div className="table-row">
                  <div className="table-cell">{monitorInfo?.size.type} Height</div>
                  <div className="table-cell">{monitorInfo?.size.height} px</div>
               </div>
               <div className="table-row">
                  <div className="table-cell">Scale Factor</div>
                  <div className="table-cell">{monitorInfo?.scaleFactor.toString()}x</div>
               </div>
            </div>
         </div>
      </>
   );
}

export default MonitorInfo;