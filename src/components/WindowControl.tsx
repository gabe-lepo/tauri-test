import "../main.css";

import { useEffect, useState } from "react";
import { appWindow } from "@tauri-apps/api/window";
import CardTitle from "./CardTitle";
import Button from "./Button";

export default function WindowControl() {
   const [ windowHeight, setWindowHeight ] = useState(-1);
   const [ windowWidth, setWindowWidth ] = useState(-1);
   const [ isLoading, setIsLoading ] = useState(false);
   const [ isMax, setIsMax ] = useState(false);

   useEffect(() => {
      const updateWindowSize = () => {
         appWindow.innerSize().then((info) => {
            setWindowHeight(info.height);
            setWindowWidth(info.width);
         }).catch((err) => {
            console.error("@@@ WindowControl: Error -", (err));
         });
      };

      updateWindowSize();

      window.addEventListener("resize", updateWindowSize);

      return () => {
         window.removeEventListener("resize", updateWindowSize);
      };
   }, []);

   useEffect(() => {
      appWindow.isMaximized().then((maximized) => {
         setIsMax(maximized);
      }).catch((err) => {
         console.error("@@@ WindowControl: Error -", (err));
      });
   }, []);

   const centerWindow = () => {
      setIsLoading(true);

      appWindow.center().then(() => {
         console.log("@@@ WindowControl: Centered window");
      }).catch((err) => {
         console.error("@@@ WindowControl: Error -", (err));
      }).finally(() => {
         setIsLoading(false);
      });
   };

   const toggleMaximize = () => {
      setIsLoading(true);

      if (!isMax) {
         appWindow.maximize().then(() => {
            setIsMax(true);
            console.log("@@@ WindowControl: Maximized window");
         }).catch((err) => {
            console.error("@@@ WindowControl: Error -", (err));
         }).finally(() => {
            setIsLoading(false);
         });
      } else {
         appWindow.unmaximize().then(() => {
            setIsMax(false);
            console.log("@@@ WindowControl: Unmaximized window");
         }).catch((err) => {
            console.error("@@@ WindowControl: Error -", (err));
         }).finally(() => {
            setIsLoading(false);
         });
      }
   };

   return(
      <>
         <CardTitle title="Window" subtitle={"Info & Controls"} />
         <div className="table w-full">
            <div className="table-header-group">
               <div className="table-row">
                  <div className="table-cell">Property</div>
                  <div className="table-cell">Data</div>
               </div>
            </div>
            <div className="table-row-group">
               <div className="table-row">
                  <div className="table-cell">Width</div>
                  <div className="table-cell">{windowWidth}</div>
               </div>
               <div className="table-row">
                  <div className="table-cell">Height</div>
                  <div className="table-cell">{windowHeight}</div>
               </div>
            </div>
            <div className="table-row-group">
               <div className="table-row">
                  <div className="table-cell">
                     <Button
                        type={"warning"}
                        text={"Center"}
                        onClick={centerWindow}
                        disabled={isLoading}
                     />
                  </div>
                  <div className="table-cell">
                     <Button
                        type={"warning"}
                        text={isMax ? "Unmax" : "Max"}
                        onClick={toggleMaximize}
                        disabled={isLoading}
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}