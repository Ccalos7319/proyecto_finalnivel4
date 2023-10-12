import { Link } from "react-router-dom"
import { useState } from 'react';

export default function Edit() {
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
                        <img className='w-8 h-8 rounded-3xl' src='/zoro.jpg' alt='perfil' />
                        <h2 className="font-sans">Nombre usuario</h2>
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
                <Link to={"/dashboard"}>
                    <button className="flex items-center cursor-pointer duration-200 hover:scale-125 active:scale-100 mr-[700px] mt-16">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
                            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                        </svg>
                        Back
                    </button>
                </Link>
            </nav>

            <main className="border border-gray-300 rounded-2xl w-[800px]">
                <section className="flex py-5 justify-between px-8">
                    <div className="div-information">
                        <h2 className=" text-2xl font-normal">Change Info</h2>
                        <p className="text-gray-400 text-sm font-medium">Changes will be reflected to every services</p>
                    </div>
                </section>
                <form action="" method="post" className="w-[500px]">
                    <section className="flex items-center py-5 px-8">
                        <div className="div-2">
                            <input type='file' name='imagen' id='img' hidden />
                            <label htmlFor='img' className="w-[70px] h-[70px] border-none absolute pl-6 pt-6 bg-[#00000057] rounded-lg ">
                                <span className='material-symbols-outlined text-white'>photo_camera</span>
                            </label>
                            <img className='w-[70px] h-[70px] rounded-lg' src='zoro.jpg' alt='perfil' />
                            <p className="text-[#828282] text-sm">CHANGE PHOTO</p>
                        </div>
                    </section>

                    <section className="flex flex-col justify-center py-5 px-8">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="text" placeholder="Enter your name..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </section>

                    <section className="flex flex-col justify-center py-5 px-8">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">BIO</label>
                        <textarea id="message" rows="4" placeholder="Enter your bio..." className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </section>

                    <section className="flex flex-col justify-center py-5 px-8">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                        <input type="text" placeholder="Enter your phone..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </section>

                    <section className="flex flex-col justify-center py-5 px-8">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input type="text" placeholder="Enter your email..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </section>

                    <section className="flex flex-col justify-center py-5 px-8">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" placeholder="Enter your new password..." disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </section>
                    <button className="bg-blue-500 hover:bg-blue-600 py-2 px-5 ml-8 mb-8 rounded-md text-white" type="submit">Save</button>
                </form>
            </main>

            <header className="flex justify-between w-[800px] my-5">
                <p className="text-[#828282] text-sm ">created by Jarvinc3</p>
                <p className="text-[#828282] text-sm ">devCchallenges.io</p>
            </header>
        </div>
    )
}
