import "../main.css";

import { relaunch, exit } from "@tauri-apps/api/process";
import CardTitle from "./CardTitle";
import Button from "./Button";

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
         <div className="grid grid-col-1 gap-1">
            <Button type={"warning"} text={"Reload"} onClick={reloadApp} disabled={false} />
            <Button type={"danger"} text={"Exit"} onClick={closeApp} disabled={false} />
         </div>
      </>
   );
}

export default AppControls;