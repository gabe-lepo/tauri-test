import "../main.css";

/*
import NavMenu from "../components/NavMenu";
import AppControls from "../components/AppControls";
import MonitorInfo from "../components/MonitorInfo";
import WifiList from "../components/WifiList";
import EndpointAccess from "../components/EndpointAccess";
*/

function Home() {
   return(
      <div className={
         "md:container border " +
         "px-4 py-2 mt-2 "
      }>
         <p className="border">Home</p>
         {/*<NavMenu />
         <AppControls />
         <MonitorInfo />
         <WifiList />
         <EndpointAccess />*/}
      </div>
   );
}

export default Home;
