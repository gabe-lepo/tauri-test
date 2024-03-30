import "../main.css";

//emoji commit
import ComponentCard from "../components/ComponentCard";
import NavMenu from "../components/NavMenu";
import AppControls from "../components/AppControls";
import MonitorInfo from "../components/MonitorInfo";
import WifiList from "../components/WifiList";
import EndpointAccess from "../components/EndpointAccess";

function Home() {
   return(
      <>
         <ComponentCard component={<p>Home</p>} />
         <ComponentCard component={<NavMenu />} />
         <ComponentCard component={<AppControls />} />
         <ComponentCard component={<MonitorInfo />} />
         <ComponentCard component={<WifiList />} />
         <ComponentCard component={<EndpointAccess />} />
      </>
   );
}

export default Home;
