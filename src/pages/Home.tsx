import "../main.css";

import ComponentCard from "../components/ComponentCard";
import NavMenu from "../components/NavMenu";
import AppControls from "../components/AppControls";
import MonitorInfo from "../components/MonitorInfo";
import WifiList from "../components/WifiList";
import EndpointAccess from "../components/EndpointAccess";
import CardTitle from "../components/CardTitle";

function Home() {
   return(
      <div className="h-dvh bg-neutral-200">
         <div className={
            "grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
         }>
            <ComponentCard component={<CardTitle title="Home" />} />
            <ComponentCard component={<NavMenu />} />
            <ComponentCard component={<AppControls />} />
            <ComponentCard component={<MonitorInfo />} />
            <ComponentCard component={<WifiList />} />
            <ComponentCard component={<EndpointAccess />} />
         </div>
      </div>
   );
}

export default Home;
