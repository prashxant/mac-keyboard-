import React from 'react'
import { Linklogo  } from '../logos/linkin'
import { GithubLogo } from '../logos/githubLogo'


export const Hero = () => {
  return (
    <div className=' max-w-[60vw] mx-auto mt-20'>
        <p className='text-5xl text-sky-200'>Not copied made by myself</p>
        <div className="text-xl mt-2 text-sky-200"> nahi pata kya likhna h yaha par baas bhar diya</div>
        <div className="flex text-zinc-300 mt-5 "> <Linklogo/><GithubLogo/></div>
    </div>
  )
}

//"bg-[#0A090D] w-18 h-18 hover:scale-95 hover:shadow-lg/50 hover:shadow-zinc-950 transition duration-200  rounded-2xl text-white  shadow-lg/50 shadow-amber-50"
