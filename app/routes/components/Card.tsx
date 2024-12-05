import { NavLink } from '@remix-run/react'
import type { language } from '../home.projects'

interface cardOptions {
    tittle: string
    cover: string
    description: string
    icons: language[]
}
function Card({tittle, cover, description, icons }: cardOptions) {

    return (
        <div className=" card card-normal bg-black shadow-md shadow-yellow-800">
            <figure className="">
                <img src={cover} alt='' className='' /></figure>
            <div className=" card-body">
                <h2 className="card-title text-primary font-bold">{tittle}</h2>
                <p className='text-start '>{description}</p>
                <div className="card-actions justify-evenly items-center p-1 rounded-lg bg-base-100">
                    {icons?.map((icon, index) => (
                        <div key={index} className={`avatar scale-100 hover:scale-110 duration-200`} >

                            <div className={`w-10 rounded-full `}>
                                <img src={icon.icon} alt={icon.name} />
                                {/* <AnimatedGif gifUrl={icon.icon} /> */}
                            </div>
                                <NavLink to={icon.link} className="">
                                    <code className='badge bg-white/10  hover:shadow hover:shadow-primary'>
                                        <div className="text-xs text-primary">{icon.name}</div>
                                    </code>
                                </NavLink>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card