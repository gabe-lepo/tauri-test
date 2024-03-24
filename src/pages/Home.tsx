import "bulma";

import BasicControls from "../components/BasicControls";

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
         <div className="block container">
            <div className="box">
               <input
                  className="input is-info"
                  type="text"
                  placeholder="Enter IP Address"
               />
               <button className="button is-success">Connect</button>
            </div>
         </div>
         <BasicControls />
      </section>
   );
}

export default Home;
