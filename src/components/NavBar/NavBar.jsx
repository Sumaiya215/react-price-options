import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
    const [open,setOpen] =useState(false);
    const routes = [
        { id: 1, path: "/", name: "Dashboard" },
        { id: 2, path: "/profile", name: "Profile" },
        { id: 3, path: "/settings", name: "Settings" },
        { id: 4, path: "/notifications", name: "Notifications" },
        { id: 5, path: "/support", name: "Support" }
      ];
     
    return (
        <nav className="bg-yellow-200 p-6 ">
           <div className="text-2xl mr-6  md:hidden" onClick={() => setOpen(!open)}>
              {
                open === true?
                <IoIosMenu></IoIosMenu>
                :<IoClose></IoClose>
              }
           </div>
        <ul className={`md:flex absolute duration-1000 md:static
        ${open?'top-16':'-top-60'}
           bg-yellow-200 px-3`} >
            {
            routes.map(route =><Link key={route.id} route={route} ></Link> )
            }
         </ul>
        </nav>
    );
};

export default NavBar;