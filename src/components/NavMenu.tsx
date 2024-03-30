import "bulma";

function NavMenu() {
   return(
      <div className="block container box">
         <p className="title">Navigation</p>
         <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
               <li><a href="/">Home</a></li>
               <li><a href="/tailwindtest">Tailwindtest</a></li>
            </ul>
         </nav>
      </div>
   );
}

export default NavMenu;