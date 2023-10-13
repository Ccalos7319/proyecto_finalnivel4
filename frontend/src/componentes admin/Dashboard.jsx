import { Link } from "react-router-dom"
import { useState } from 'react';
import "../css/details.css"

export default function Dashboard() {
  

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  return (
    <div className="flex flex-col items-center py-8 px-16">
      <nav className="flex flex-col items-center w-full pb-10">
        <div className="w-full flex justify-between">
          <img className=" w-36 h-8" src="/iconoLogo.jpg" alt="devchallenges" />
          <div className="flex items-center justify-between gap-4">
            <img className='w-8 h-8 rounded-3xl' src='' alt='perfil' />
            <h2 className="">Nombre usuario</h2>
            <button className="">
              <span onClick={toggleDrawer} className="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <form className={`${isDrawerOpen ? 'hidden' : ''} absolute top-20 right-16 rounded-xl border border-gray-400 shadow-sm w-44 h-44 flex flex-col justify-evenly px-4`} action="">
              <Link to={"/dashboard edit"}>
                <button>
                  <p className="text-[#4F4F4F] font-medium flex items-center gap-4 px-3 h-10 hover:bg-slate-200 hover:rounded-lg">
                    <span className="material-symbols-outlined profile">account_circle</span>
                    My Profile
                  </p>
                </button>
              </Link>
              <Link>
                <button>
                  <p className="text-[#4F4F4F] font-medium flex items-center gap-4 px-3 h-10 hover:bg-slate-200 hover:rounded-lg cursor-context-menu">
                    <span className="material-symbols-outlined">group</span>
                    GroupChat
                  </p>
                </button>
              </Link>
              <hr className="border border-gray-300 w-full" />
              <Link to={"/"}>
                <button>
                  <p className=" text-[#4F4F4F] font-medium flex items-center gap-4 pl-3 pr-9 h-10 cursor-context-pointer hover:bg-slate-200 hover:rounded-lg">
                    <img width={25} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACnElEQVR4nO2bzYoTQRSFP0f0DRR9BEWdlQiiuPWpHH8WjiCCuPVRdKFREDIrjSZ1Z2QUzLiReQKhpJwaKWu689Ppm6Sq+kJDqITT557cezpVlYIWw8LGLtw08MzAd4EeuYeFjRHcEngu8EPAhhe5Ji1wR+CFwDhKel/gaXYC2P+/6YMwaQPf3Lh738Ip9/ksBLBwep6kw0hWABskbeBnRXnXJp2sADtwZhfuGngp8CtKeijwyMDmPJixGbZ8tfd0EdgycBiV92cDD4ZwdQFcTQHaqywDv33Sn5wYApfbwNVqgdZxJRWiWriSClEtXEmFqBaupEJUC1dSIaqFK6kQ1cKVVIhq4UoqRLVwJRWiWriSClEtXEmFqBaupEJUC1dSIaqFK6kQnRF3D84LvBPou9drS1QDV+CcwMdg3WD4BS42Blwklo3rvm2/pvF3bSN8PbESJBMBDOyECceC1Iog6QnQE3hbMd6Pk51JBElMgAn3C/v/X+/XjWcnQGMRpCHRAZw18MRvmIwNbLuxeXANvA8cW+P6cHyv2naQhgK4hOMburF5BPD9rCnAq/B+lSJIQwGON0VHcN3vJDmc8TwCrCJCEQT6Cwtg4IaB28UJYKpb4PGaecBrtRYYHJngtq+ERia4BA/QM8FpsYoWiB93+3Bh0nhWAjRKPkUBvG/0ps0Fsv0pLDW48Vwg58mQrcItfjpctyByoudzrYBoSaxf5JJY3kR9dALQVYDtWoDOAyzFmZWPzgPoPMB2HkDnAZbizMpH5wEo/V1ejqaR9wxcKq0CtioOTAwM3N+DK4sS1bpY5pEZAw9HcG2NBDixPd5a2BIPTdVFkcfmZjw4OS7i4GRdFHl0dlpl+H3Cr6puve5hg+PzvhLerJrTtPgDe6dXcbrHU8cAAAAASUVORK5CYII=" />
                    Logout
                  </p>
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div className=" h-28 flex flex-col justify-end items-center gap-2 w-[65%]">
          <h1 className=" text-4xl font-normal">Personal info</h1>
          <p className=" text-lg font-light">Basic info, like your name and photo</p>
        </div>
      </nav>

      <main className="border border-gray-300 rounded-2xl w-[800px]">
        <section className="flex py-5 justify-between px-8">
          <div className="">
            <h2 className=" text-2xl font-normal">Profile</h2>
            <p className="text-gray-400 text-sm font-medium">Some info may be visible to other people</p>
          </div>
          <Link to={"/dashboard edit"}>
            <button className=" h-10 border border-gray-200 relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">Edit</button>
          </Link>
        </section>

        <hr className="border border-gray-200 w-full" />

        <section className="flex items-center py-5 px-8">
          <div className="w-[275px]">
            <p className="text-gray-400">PHOTO</p>
          </div>
          <div className="div-2">
            <img className=' w-16 h-16 rounded-lg' src='' alt='foto de perfil' />
          </div>
        </section>

        <hr className="border border-gray-200 w-full" />

        <section className="flex items-center py-5 px-8">
          <div className="w-[275px]">
            <p className="text-gray-400">NAME</p>
          </div>
          <div className="div-2">
            <p className=" text-lg font-medium py-2 text-black">nombre</p>
          </div>
        </section>

        <hr className="border border-gray-200 w-full" />

        <section className="flex items-center py-5 px-8">
          <div className="w-[275px]">
            <p className="text-gray-400">BIO</p>
          </div>
          <div className="div-2">
            <p className=" text-lg font-medium py-2 text-black">Lorem, ipsum dolor sit amet consectetur</p>
          </div>
        </section>

        <hr className="border border-gray-200 w-full" />

        <section className="flex items-center py-5 px-8">
          <div className="w-[275px]">
            <p className="text-gray-400">PHONE</p>
          </div>
          <div className="div-2">
            <p className=" text-lg font-medium py-2 text-black">487487648764</p>
          </div>
        </section>

        <hr className="border border-gray-200 w-full" />

        <section className="flex items-center py-5 px-8">
          <div className="w-[275px]">
            <p className="text-gray-400">EMAIL</p>
          </div>
          <div className="div-2">
            <p className=" text-lg font-medium py-2 text-black">fulano@gmail</p>
          </div>
        </section>

        <hr className="border border-gray-200 w-full" />

        <section className="flex items-center py-5 px-8">
          <div className="w-[275px]">
            <p className="text-gray-400">PASSWORD</p>
          </div>
          <div className="div-2">
            <p className=" text-lg font-medium py-2 text-black">************</p>
          </div>
        </section>

      </main>

     
    </div>
  )
}
