import "bulma";

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
      <div className="block container box">
         <p className="title">App Controls</p>
         <div className="field has-addons">
            <p className="control">
            <button className="button is-warning is-outlined" onClick={reloadApp}>Reload</button>
            </p><p className="control">
            <button className="button is-danger is-outlined" onClick={closeApp}>Exit</button>
            </p>
         </div>
      </div>
   );
}

export default AppControls;