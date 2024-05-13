import "../main.css";

import ComponentCard from "../components/ComponentCard";
import NavMenu from "../components/NavMenu";
import AppControls from "../components/AppControls";
import MonitorInfo from "../components/MonitorInfo";
import WifiList from "../components/WifiList";
import EndpointAccess from "../components/EndpointAccess";
import CardTitle from "../components/CardTitle";
import WindowControl from "../components/WindowControl";
import Clipboard from "../components/Clipboard";
import Shell from "../components/Shell";

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
            <ComponentCard component={<WindowControl />} />
            <ComponentCard component={<WifiList />} />
            <ComponentCard component={<EndpointAccess />} />
            <ComponentCard component={<Clipboard />} />
            <ComponentCard component={<Shell />} />
         </div>
      </div>
   );
}

export default Home;
