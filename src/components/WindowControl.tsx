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

   const minimizeWindow = () => {
      setIsLoading(true);

      appWindow.minimize().then(() => {
         console.log("@@@ WindowControl: Minimized window");
      }).catch((err) => {
         console.error("@@@ WindowControl: Error -", (err));
      }).finally(() => {
         setIsLoading(false);
      });
   };

   return(
      <>
         <CardTitle title="Window Controls" subtitle={windowWidth.toString() + " x " + windowHeight.toString()} />
         <div className="grid grid-cols-3 gap-2">
            <Button
               type={"success"}
               text={"Center"}
               onClick={centerWindow}
               disabled={isLoading}
            />
            <Button
               type={"success"}
               text={isMax ? "Unmaximize" : "Maximize"}
               onClick={toggleMaximize}
               disabled={isLoading}
            />
            <Button
               type={"success"}
               text={"Minimize"}
               onClick={minimizeWindow}
               disabled={isLoading}
            />
         </div>
      </>
   );
}