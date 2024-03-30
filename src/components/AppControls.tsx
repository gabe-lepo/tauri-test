import "../main.css";

import { relaunch, exit } from "@tauri-apps/api/process";

function AppControls() {
   function reloadApp() {
      relaunch().then((response) => {
         console.log("@@@ AppControls:", (response))
      }).catch((err) => {
         console.error("@@@ AppControls: Error -", (err));
      })
   }
   function closeApp() {
      exit()
   }
   
   return(
      <>
         <p className="title">App Controls</p>
         <button className="" onClick={reloadApp}>Reload</button>
         <br />
         <button className="" onClick={closeApp}>Exit</button>
      </>
   );
}

export default AppControls;