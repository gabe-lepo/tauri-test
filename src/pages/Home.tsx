import "bulma";

import EndpointAccess from "../components/EndpointAccess";
import WifiList from "../components/WifiList";
import MonitorInfo from "../components/MonitorInfo";
import AppControls from "../components/AppControls";
import NavMenu from "../components/NavMenu";

function Home() {
   return(
      <section className="section">
         <div className="block container box has-text-centered">
            <p className="title">Home</p>
         </div>
         <div className="grid is-col-min-12">
            <div className="cell">
               <NavMenu />
            </div>
            <div className="cell">
               <AppControls />
            </div>
            <div className="cell">
               <MonitorInfo />
            </div>
            <div className="cell">
               <WifiList />
            </div>
            <div className="cell">
               <EndpointAccess />
            </div>
         </div>
      </section>
   );
}

export default Home;
