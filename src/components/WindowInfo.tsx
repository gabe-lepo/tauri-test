import "bulma";

import { appWindow } from "@tauri-apps/api/window";

function WindowInfo() {
   return(
      <div className="block container box">
         <p className="title">Window Controls</p>
         <div className="grid">
            <div className="cell">
               <button className="button is-success" onClick={appWindow.maximize}>Max</button>
            </div>
         </div>
      </div>
   );
}

export default WindowInfo;