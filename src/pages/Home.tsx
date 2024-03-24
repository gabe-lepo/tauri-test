import "bulma";

function Home() {
   return(
      <body className="has-background-dark">
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
         <div className="container">
            <div className="box">
               <input
                  className="input is-info"
                  type="text"
                  placeholder="IP Address"
               />
               <button className="button is-success">Connect</button>
            </div>
         </div>
      </body>
   );
}

export default Home;
