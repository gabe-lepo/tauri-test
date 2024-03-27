import "bulma";

function NavMenu() {


   return(
      <div className="block container box">
         <p className="title">Navigation</p>
         <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
               <li><a href="#">Link 1</a></li>
               <li><a href="#">Link 2</a></li>
               <li><a href="#">Link 3</a></li>
            </ul>
         </nav>
      </div>
   );
}

export default NavMenu;