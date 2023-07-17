import React from "react";
import { Menu } from "@headlessui/react";
import imgg from "./a.jpeg";
import { BiCaretDown ,BiLinkExternal} from "react-icons/bi"; 

function Auth() {
  const user = {
    name: "Nurullah Kardaş",
    avatar: imgg,
  };
  return (
    <Menu as={"div"} className={"relative"}>
      {({open}) => (
        <>
          <Menu.Button
            className={
              `flex items-center h-8 rounded-3xl bg-black ${open ? "bg-active":"bg-black"} hover:bg-active` 
            }
          >
            <img
              className="w-10 h-10 rounded-full p-px mr-2"
              src={user.avatar}
            />
            <span className="text-sm font-semibol">{user.name}</span>
            <span className={open===true && "rotate-180"}> <BiCaretDown /></span>
           
          </Menu.Button>
          <Menu.Items
            className={
              "absolute top-full right-0 w-48 bg-active rounded translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                href="/account-settings"
                >
                  Account
                  <BiLinkExternal className="h-4 w-4 flex items-center"/>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                href="/account-settings"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                  href="/account-settings"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Auth;
