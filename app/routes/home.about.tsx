/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import { FaXTwitter } from "react-icons/fa6";
import Carousel from "./components/Carousel";


export const meta: MetaFunction = () => {
  return [
    { title: "KOKWAIBURW" },
    { name: "description", content: "umuturage imbere cyane" },
  ];
};

export default function About() {



  return (
    <div className="flex flex-col space-y-5 justify-center items-center w-full h-full p-5 m-1 ">



      {/* photos */}

      <div className="flex justify-evenly content-center">

        <div className="avatar mb-10">
          <div className=" w-40 rounded min-w-fit  ">

            <div className=" min-w-fit">
              <img src="/images/passenger_ai.jpg" />
            </div>
          </div>
        </div>

        <div className="avatar mb-10">
          <div className=" w-56 rounded min-w-fit">

            <div className=" min-w-fit">
              <img src="/images/passenger_zoom.jpg" />
            </div>
          </div>
        </div>

        <div className="avatar mb-10">
          <div className=" w-56 rounded  ">

            <div className=" min-w-fit">
              <img src="/images/passengers.jpg" />
            </div>
          </div>
        </div>

      </div>


      {/* links */}
      <nav>
        <div className="grid grid-flow-col gap-4 bg-black p-2 rounded-lg items-center">
          <NavLink to={"https://twitter.com/NiJeanClaude"}>
            {/* <img src="/twiter.svg" alt="" className=""/> */}
            <FaXTwitter size={25} />

          </NavLink>
          <NavLink className="hover:text-red-500 duration-200 rounded-full w-8" to={""}

            onClick={(e) => {
              window.location.href = "mailto:jeanclaude96niyo@gmail.com";
              e.preventDefault();
            }}
          >

            <img src="/gmail.svg" alt="" />
          </NavLink>
          <NavLink className="hover:text-blue-500 duration-200 rounded-full w-8" to={"https://wa.me/250782292816"}>
            <img src="/whatsapp.svg" alt="" />
          </NavLink>

          <NavLink className="hover:text-blue-500 duration-200 rounded-full w-8" to={""}>
            <img src="/linkedin.svg" alt="" />
          </NavLink>
        </div>
      </nav>
      {/* bio */}
      <div className="p-2 shadow-lg shadow-primary rounded-md bg-black">

        <div className="prose min-w-full">
          <p>KOKWAIBURW ni koperative yo kwambutsa abantu nibintu, iherereye mu ntara ya Iburasirazuba mu karere ka Bugesera, umurenge wa Rweru, akagari ka Nkanga umudugudu wa Nkanga.br Yatangiye 04/2024, ikaba igizwe nabanyamuryango 11 biganjemo urubyiruko</p>

        </div>

        <div>
        </div>





      </div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div className="stat-title">Abamaze kwambuka</div>
          <div className="stat-value text-primary">840</div>
          <div className="stat-desc">70% Abahinzi</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div className="stat-title">Imirimo</div>
          <div className="stat-value text-secondary">28</div>
          <div className="stat-desc">80% urubyiruko</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">

          </div>
          <div className="stat-value">76%</div>
          <div className="stat-title">Byagezweho</div>
          <div className="stat-desc text-secondary">24% iracyabura</div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">

        <div className="card-body">
        </div>
        <figure>
          <img
            src="/images/logo.jpeg"
            alt="Shoes" />
        </figure>
      </div>

      <ul className="timeline">
        <li>
          <div className="timeline-start timeline-box">Gushaka ibyangombwa</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end timeline-box">Kwishyura ideni</div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-start timeline-box">kugura moteri</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end timeline-box"> Kugura ubwato bwa kijyambere </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">Guhinga muri green house</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
        </li>
      </ul>


      <div className="overflow-x-auto pt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th>ABANYAMURYANGO</th>
              
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              
              
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-24 w-24">
                      <img
                        src="/members/giz.jpg"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">NISHIMWE</div>
                    <div className="text-sm opacity-50">Gisele</div>
                  </div>
                </div>
              </td>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-24 w-24">
                      <img
                        src="/members/raisa.jpg"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">UWAMAHORO</div>
                    <div className="text-sm opacity-50">Raisa</div>
                  </div>
                </div>
              </td>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-24 w-24">
                      <img
                        src="/members/justin.png"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">IGISUBIZO</div>
                    <div className="text-sm opacity-50">Justin</div>
                  </div>
                </div>
              </td>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-24 w-24">
                      <img
                        src="/members/claude.jpg"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">NIYONZIMA</div>
                    <div className="text-sm opacity-50">Jean Claude</div>
                  </div>
                </div>
              </td>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-24 w-24">
                      <img
                        src="/members/jules.jpg"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">KWIZERA</div>
                    <div className="text-sm opacity-50">Jules</div>
                  </div>
                </div>
              </td>
             
            </tr>
          
            {/* row 2 */}
            <tr>

            <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-24 w-24">
                      <img
                        src="/members/phil.jpg"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">IRADUKUNDA</div>
                    <div className="text-sm opacity-50">Philber</div>
                  </div>
                </div>
              </td>
              
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-24 w-24">
                      <img
                        src="/members/mere.jpg"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">BAGIRIMANA</div>
                    <div className="text-sm opacity-50">Yvonne</div>
                  </div>
                </div>
              </td>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-24 w-24">
                      <img
                        src="/members/viye.jpg"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">SEKIMONYO</div>
                    <div className="text-sm opacity-50">Diocles</div>
                  </div>
                </div>
              </td>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-24 w-24">
                      <img
                        src="/members/mutoni.jpg"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">UMUTONI</div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
             
            </tr>
            {/* row 4 */}
            <tr>
              
             
              
            </tr>
          </tbody>
          {/* foot */}
          
        </table>
      </div>



      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/map.png)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">AHO TUBARIZWA</h1>
            <p className="mb-5">
              Tugane tukwacyire mu buryo utasanga handi! amasaha y'akazi ni kumanywa, ushobora no kutumenyesha mbere y'igihe, tukagutwara isaha iyariyo yose.
            </p>
            <button className="btn btn-primary">AMERECYEZO</button>
          </div>
        </div>
      </div>


    </div>

  );
}
