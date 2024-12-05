/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import type { MetaFunction } from "@remix-run/node";
import { NavLink, Outlet } from "@remix-run/react";
import { SiReaddotcv } from "react-icons/si";
import { FaProjectDiagram, FaUserTie } from "react-icons/fa";


export const meta: MetaFunction = () => {
  return [
    { title: "KOKWAIBURW" },
    { name: "description", content: "Jean Claude Niyonzima" },
  ];
};

export default function Home() {

  const navs = [
    {
      page: "/home/about",
      icon: <FaUserTie size={20} className="font-bold text-white"/>, text: "KOKWAIBURW"
    },
    {
      page: "/home/targets",
      icon: <FaProjectDiagram size={20} className="font-bold text-white"/>, text: "Intumbero"
    },
    {page: "/home/vision", icon:  <SiReaddotcv size={20} className="font-bold text-white"/>,   text:"Vision 2050"},
  ]

  return (
    // all page
    
    <div className="p-2 m-3 h-full w-full ">
      <div className="flex justify-between content-center">

      {/* <div className=" avatar mb-10">
        <div className=" rounded min-w-fit ">

          <div className=" w-48">
            <img src="/images/logo_white_bg_og.jpg" />
          </div>
        </div>
      </div> */}
      {/* menu */}
      <div className="navbar w-full justify-center">
        <ul className="menu menu-lg  menu-horizontal  rounded space-x-2 bg-black">

          {navs.map((nav, index) => (
            <li key={index}>

              <NavLink to={nav.page}>
                {nav.icon}
                <p className="text-white">{nav.text}</p>
              </NavLink>
            </li>
          ))}

        </ul>
      </div>
      </div>

      <Outlet />

      

    </div>

  );
}
