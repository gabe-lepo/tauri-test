import "bulma";

import LightControls from "../components/LightControls";
import PingConnection from "../components/PingConnection";

function Home() {
   return(
      <section className="section">
         <div className="block container">
            <div className="box">
               <p className="title is-spaced">Home</p>
               <span className="subtitle is-4">Menu</span>
               <nav className="breadcrumb" aria-label="breadcrumbs">
                  <ul className="subtitle is-6">
                     <li><a href="#">Link 1</a></li>
                     <li><a href="#">Link 2</a></li>
                     <li><a href="#">Link 3</a></li>
                  </ul>
               </nav>
            </div>
         </div>
         <PingConnection />
         <LightControls />
      </section>
   );
}

export default Home;
