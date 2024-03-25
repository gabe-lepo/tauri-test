import { currentMonitor, Monitor } from "@tauri-apps/api/window";
import "bulma";
import { useEffect, useState } from "react";

function MonitorInfo() {
   const [monitorInfo, setMonitorInfo] = useState<Monitor | null>(null);

   useEffect(() => {
      currentMonitor().then((info) => {
         setMonitorInfo(info);
      }).catch((err) => {
         console.error("@@@ MonitorInfo: Error -", (err));
      });
   }, []);

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
                  <td>Position Type</td>
                  <td>{monitorInfo?.position.type}</td>
               </tr>
               <tr>
                  <td>Position X</td>
                  <td>{monitorInfo?.position.x}</td>
               </tr>
               <tr>
                  <td>Position Y</td>
                  <td>{monitorInfo?.position.y}</td>
               </tr>
               <tr>
                  <td>Scale Factor</td>
                  <td>{monitorInfo?.scaleFactor.toString()}</td>
               </tr>
               <tr>
                  <td>{monitorInfo?.size.type} Width</td>
                  <td>{monitorInfo?.size.width}</td>
               </tr>
               <tr>
                  <td>{monitorInfo?.size.type} Height</td>
                  <td>{monitorInfo?.size.height}</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}

export default MonitorInfo;