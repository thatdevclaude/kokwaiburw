/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import type { MetaFunction } from "@remix-run/node";
import Card from "./components/Card";


export const meta: MetaFunction = () => {
  return [
    { title: "Projects" },
    { name: "description", content: "My Projects" },
  ];
};

export interface language {
  name: string
  icon: string
  bg: string
  link: string
}

export default function Projects() {

  const theSvgCheckMark = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-5 w-5 stroke-primary stroke"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>



  interface Project {
    tittle: string
    cover: string
    description: string
    languages: language[]
  }

  const FASTPEN: Project = {
    tittle: "FastPen",
    cover: "/fastpen.jpeg",
    description: " A desktop application tailored for health center receptionists, a time saving solution that simplifies the paperwork process. The FastPen digitizes patient file completion, replacing manual entry with efficient digital workflows. With a user-friendly interface, staff can effortlessly input patient data, ensuring accuracy and reducing errors. The standout feature? Instantly generate and print filled patient files, eliminating the need for tedious manual transcription. Elevation of health center's efficiency and streamline administrative tasks.",
    languages: [
      { name: 'Python', icon: "/python.svg", bg:"bg-primary", link: 'https://www.python.org/'},
      { name: "Qt", icon: "/qt.svg" ,bg: "bg-primary", link: 'https://www.qt.io/product'},
      { name: "MySQL", icon: "/mysql.svg" ,bg:"bg-white", link: 'https://www.mysql.com/'},
      { name: "NetFrame", icon: "/net.svg" ,bg:"bg-white", link: 'https://dotnet.microsoft.com/en-us/'},

    ]
  }
  const ROBOVAX: Project = {
    tittle: "RoboVax",
    cover: "/robovax_anim.gif",
    description: "  was designed to expedite the registration and injection process during the COVID-19 pandemic. While the web version typically takes 4 minutes to complete, RoboVax accomplished the same tasks in an impressive 40 seconds. Seamlessly reducing the time taken to register individuals and administer injections. because in critical moments, time matters.",
    languages: [
      { name: 'Python', icon: "/python.svg", bg:"bg-primary", link: 'https://www.python.org/'},
      { name: "Qt", icon: "/qt.svg" ,bg: "bg-primary", link: 'https://www.qt.io/product'},
      { name: "Postgresql", icon: "/postgresql.svg" ,bg:"bg-white", link: 'https://www.postgresql.org/'},
      { name: "NetFrame", icon: "/net.svg" ,bg:"bg-white", link: 'https://dotnet.microsoft.com/en-us/'},

    ]
  }

  const MTN: Project = {
    tittle: "MoMoBuz",
    cover: "/momobuz_anim_2.gif",
    description: " Mobile Money Rwanda Ltd Web App for MOMOBIZ(Mobile money for business) registration.A user-friendly solution that eliminates the need to leave  business for an MTN service center visit. convenience of online registration, simplifying the process and saving the time. With just a few clicks, MomoBuz streamlines MOMOBIZ registration, ensuring efficiency without disruptions of daily operations.",
    languages: [
      { name: 'JavaScript', icon: "/javascript.png", bg:"bg-primary", link: 'https://nodejs.org/en'},
      { name: 'Nodejs', icon: "/nodejs.svg", bg:"bg-primary", link: 'https://nodejs.org/en'},
      { name: "TailwindCSS", icon: "/tailwindcss.svg" ,bg:"bg-white", link: 'https://tailwindcss.com/'},
      { name: "React", icon: "/react.png" ,bg: "bg-primary", link: 'https://react.dev/'},
      { name: "Remix", icon: "/remix.ico" ,bg:"bg-white", link: 'https://remix.run/'},
      { name: "SqLite", icon: "/sqlite.jpg" ,bg:"bg-white", link: 'https://www.sqlite.org/index.html'},
      { name: "Redux", icon: "/redux.svg" ,bg:"bg-white", link: 'https://redux.js.org/'},

    ]
  }

  const ICARE: Project = {
    tittle: "ICare",
    cover: "/icare_anim_3.gif",
    description: " ICare is a modern healthcare management system that streamlines patient care and organizational processes. With features like patient management, appointment scheduling, billing, EHR, inventory management, staff management, analytics, and telemedicine integration, iCare ensures efficient healthcare administration and improved patient outcomes. Elevate your healthcare institution with iCare's comprehensive and innovative approach to managing all aspects of healthcare seamlessly.",
    languages: [
      { name: 'Nodejs', icon: "/nodejs.svg", bg:"bg-primary", link: 'https://nodejs.org/en'},
      { name: "React", icon: "/react.png" ,bg: "bg-primary", link: 'https://react.dev/'},
      { name: "Remix", icon: "/remix.ico" ,bg:"bg-white", link: 'https://remix.run/'},
      { name: "Prisma", icon: "/prisma.png" ,bg:"bg-white", link: 'https://www.prisma.io/'},
      { name: "Zustand", icon: "/zustand.png" ,bg:"bg-white", link: 'https://zustand-demo.pmnd.rs/'},
      { name: "TailwindCSS", icon: "/tailwindcss.svg" ,bg:"bg-white", link: 'https://tailwindcss.com/'},
      { name: "TypeScript", icon: "/typescript.png" ,bg:"bg-white", link: 'https://www.typescriptlang.org/'},
      { name: "Postgresql", icon: "/postgresql.svg" ,bg:"bg-white", link: 'https://www.postgresql.org/'},

    ]
  }


  


  return (
    <div className="">

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            {theSvgCheckMark()}
          </div>
          <div className="timeline-start text-start sm:text-end mb-10">
            <time className="font-mono italic text-white text-end">{FASTPEN.tittle}</time>
            {/* card */}
            <Card tittle={FASTPEN.tittle} cover={FASTPEN.cover} description={FASTPEN.description} icons={FASTPEN.languages}/>
          </div>
          <hr />
        </li>


        <li>
          <div className="timeline-middle">
            {theSvgCheckMark()}
          </div>
          <div className="timeline-end text-start mb-10">
            <time className="font-mono italic text-white font-bold">{ROBOVAX.tittle}</time>
            {/* card */}
            <Card tittle={ROBOVAX.tittle} cover={ROBOVAX.cover} description={ROBOVAX.description} icons={ROBOVAX.languages}/>
          </div>
          <hr />
        </li>

        <li>
          <div className="timeline-middle">
            {theSvgCheckMark()}
          </div>
          <div className="timeline-start text-start sm:text-end mb-10">
            <time className="font-mono italic text-white font-bold">{MTN.tittle}</time>
            {/* card */}
            <Card tittle={MTN.tittle} cover={MTN.cover} description={MTN.description} icons={MTN.languages}/>
          </div>
          <hr />
        </li>


        <li>
          <div className=" timeline-middle">
            {theSvgCheckMark()}
          </div>
          <div className="timeline-end text-start mb-10">
            <time className="font-mono italic text-white font-bold">{ICARE.tittle}</time>
            {/* card */}
            <Card tittle={ICARE.tittle} cover={ICARE.cover} description={ICARE.description} icons={ICARE.languages}/>
          </div>
          <hr />
        </li>


      </ul>


    </div>

  );
}
