import "../main.css";

import { relaunch, exit } from "@tauri-apps/api/process";
import CardTitle from "./CardTitle";

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
         <CardTitle title="App Controls" />
         <button className="" onClick={reloadApp}>Reload</button>
         <br />
         <button className="" onClick={closeApp}>Exit</button>
      </>
   );
}

export default AppControls;