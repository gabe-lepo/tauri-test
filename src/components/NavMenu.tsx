import "../main.css";

function NavMenu() {
   return(
      <>
         <p className="title">Navigation</p>
         <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
               <li><a href="/">Home</a></li>
            </ul>
         </nav>
      </>
   );
}

export default NavMenu;