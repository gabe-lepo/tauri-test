import "../main.css";
import CardTitle from "./CardTitle";

function NavMenu() {
   return(
      <>
         <CardTitle title="Navigation" />
         <nav>
            <ul>
               <li><a href="/">Home</a></li>
            </ul>
         </nav>
      </>
   );
}

export default NavMenu;