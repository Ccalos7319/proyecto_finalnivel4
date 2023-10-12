import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/details.css";

export default function Parametros() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className=" ">
      <nav className=" flex justify-items-end ">
        <div className="flex items-center   gap-4">
          <button
            onClick={toggleDrawer}
            
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/down-squared--v2.png"
              alt="down-squared--v2"
            />
          </button>
          <h2 className="">Nombre</h2>

          <form
            className={`${
              isDrawerOpen ? "hidden" : ""
            } absolute top-20 right-12 rounded-xl border border-gray-400 shadow-sm w-44 py-2 flex flex-col justify-evenly px-4 hover:bg-slate-200 hover:rounded-lg`}
            action=""
          >
            <Link to={"/"}>
              <button>
                <p className=" text-[#4F4F4F] font-medium flex items-center gap-4 pl-3 pr-9 h-10 cursor-context-pointer">
                  <img
                    width={25}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACnElEQVR4nO2bzYoTQRSFP0f0DRR9BEWdlQiiuPWpHH8WjiCCuPVRdKFREDIrjSZ1Z2QUzLiReQKhpJwaKWu689Ppm6Sq+kJDqITT557cezpVlYIWw8LGLtw08MzAd4EeuYeFjRHcEngu8EPAhhe5Ji1wR+CFwDhKel/gaXYC2P+/6YMwaQPf3Lh738Ip9/ksBLBwep6kw0hWABskbeBnRXnXJp2sADtwZhfuGngp8CtKeijwyMDmPJixGbZ8tfd0EdgycBiV92cDD4ZwdQFcTQHaqywDv33Sn5wYApfbwNVqgdZxJRWiWriSClEtXEmFqBaupEJUC1dSIaqFK6kQ1cKVVIhq4UoqRLVwJRWiWriSClEtXEmFqBaupEJUC1dSIaqFK6kQnRF3D84LvBPou9drS1QDV+CcwMdg3WD4BS42Blwklo3rvm2/pvF3bSN8PbESJBMBDOyECceC1Iog6QnQE3hbMd6Pk51JBElMgAn3C/v/X+/XjWcnQGMRpCHRAZw18MRvmIwNbLuxeXANvA8cW+P6cHyv2naQhgK4hOMburF5BPD9rCnAq/B+lSJIQwGON0VHcN3vJDmc8TwCrCJCEQT6Cwtg4IaB28UJYKpb4PGaecBrtRYYHJngtq+ERia4BA/QM8FpsYoWiB93+3Bh0nhWAjRKPkUBvG/0ps0Fsv0pLDW48Vwg58mQrcItfjpctyByoudzrYBoSaxf5JJY3kR9dALQVYDtWoDOAyzFmZWPzgPoPMB2HkDnAZbizMpH5wEo/V1ejqaR9wxcKq0CtioOTAwM3N+DK4sS1bpY5pEZAw9HcG2NBDixPd5a2BIPTdVFkcfmZjw4OS7i4GRdFHl0dlpl+H3Cr6puve5hg+PzvhLerJrTtPgDe6dXcbrHU8cAAAAASUVORK5CYII="
                  />
                  Logout
                </p>
              </button>
            </Link>
          </form>
          
        </div>
      </nav>

      <div className="  w-80 h-screen pt-20 bg-slate-400 ">

        
        <div>
          <h5 className=" text-xl font-semibold text-white dark:text-gray-400">
            General Y Seguridad
          </h5>
        </div>

        <div className="  ">
          <ul className="font-medium flex flex-col gap-4">
            <Link to={"/parametros"} onClick={toggleMenu}>
              <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img
                  width={30}
                  src="data:image/png;base64,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"
                />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Parametros
                </span>
              </li>
            </Link>

            <Link to={"/roles"} onClick={toggleMenu}>
              <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img
                  width={30}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9klEQVR4nO2aO2gUURiFr6JGRdT4ANEyCj5ITERJ57OQkE6MhZjOQlB7QTQoJiIblViImspGECG+bQVjGVTWiHYiovgWI4bVRD+5zL9kXGd37+Y+soE5sMWyc/9zzszcO/+cu0qlSJEiCICpwCbgENAHDAJvgGHgJ/AFeAZcB44Bm4Ga0CJbgRvAW+A1MCPhmL1Ujq/ABaAphIlTCQJ+APeB9bHj6oG7wDlgj3xfCswCpgO1QAOwEzgNPI7V+yNjG3yZWGdwRhdb1F8JZIAhqTciJme6NnLE4PbY54BnAXBGjCBXa7kbFxFBj4GRLod8jcBzqfsB2OCq8GEDI/udkI1xzpGFBbnl7M0AOwyMtDpx8C/vNOBy7MrU2RY8aWDkuDMH/5u5KRyPrBYAYLs8zIpB/7Zt3ARmt9kL4eq2LXathJErzlQX52+S1Ux/6m0KrQW+J5j4BqxxqroIgLPCeVvZAGhPMNJuVbTy58yQdACNNoVaEoy0OFVbXkO38J63KXIwwcgBp0rLa1gtvJ+TmtZyg3WjdxTIJRjJSQtT6019AYCscG9UJgDmA51FJnkh9L17Apinwk36DtNV6j2V4523NlwA7BKuPlUOwADjx4DyCKKTrDFocvBDCyP9no0sEp6PajIDqBEjOTXZAfQDD1Q1A4OQo5Jiu4GrwGynKh2FHMaQ3EmjTQWCl5AD6JDBGW/KQ4QcwFYZmPWmPETIQRSm6Uupscqb+hAhB3BJBvd6UR4q5GBs8ukOd4kX9aFCDqIsVqPHufKQIQdR6jcK/NbbBc7Vhww5iPJYjZfAXGeqQ4ccRFsCT6TgPd8bM/gMOYAVum2Wores+p+JDjmA5tgexh1f7+mECDl0Kg58kuKvjAOAagw5gLrYnBmVbbZlFvUmLuQgWgAyYiR/xi7qbbQK61RHyEEkJP/QzCMrkU2b/L5QercphdsCVRdyEAnulQSwFEbiT+eqDTmIzvwWmbT6dfWp/Engl5Dr19dmbwJSpEihSuEvcyrXVZw5A/kAAAAASUVORK5CYII="
                />
                <span className="flex-1 ml-3 whitespace-nowrap">Roles</span>
              </li>
            </Link>

            <Link to={"/usuarios"} onClick={toggleMenu}>
              <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB0ElEQVR4nO2VP0ubURTGU/9VMC6ORacO1pTiEAdd/QSCjSkOUhwU2kE61M2OTiqI2qWCf2o/QbG04GKhbi4OOokGahclW5dW/ZUTnsDlcnPzksbJPONzznl+yeXc+6ZSDTV0rwU8AKaBQ+A3cAksA813DV4grCMgVw9AF7Cnf7Ut7zFwQ2X9AR6p95NmLaMrKfQF8MsJXJE/TnVNqnfN8S6AfDXoQ6Dohc2r9jYBeFa9855fBNpi4P5AWPmoRxKAR9S7Hag9i4EHAgOrNYDfB2oDMXAncO0NbKiWTwAubTaw6fl/LTsGfhoIs+VoBZqAnQj0o3ravOUsKxMDG+AkMLSgep+uiS/zeiN3/diyK4I1mAsM2lF1qz4RqE+o1qNeX6NRqIbtuL54g1/tuVR9OBA87Dyp37zarmVWBSvgtYbOgZdAi/x0IBh5afW0aMZmTa+SQoeAn8AW0CHPFmYKKFBZBfWUHgqb1X22rMEYMAt8Bm6BD87RjlUBhn5Azjn6dWVadtaHvnPu76meThtaonYtKqMdOJNnjDn3o+BqRv5z/l+lbQbeeH7ezAPPfKLm73UA7ysr4/k/UoGvUXmhruoAvnJug6tiok1vqKFUDfoHP6Pm7AnEbIcAAAAASUVORK5CYII=" />
                <span className="flex-1 ml-3 whitespace-nowrap">Usuarios</span>
              </li>
            </Link>

            <Link to={"/bitacoras"} onClick={toggleMenu}>
              <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img
                  width={30}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEw0lEQVR4nO2aW4hVVRjHV1Y2XdRMCikSAouSUEhUMtNuDpVFT0VBBmIP+RAEFmj0GNpEPoxdTEsSim4gXSiiByvzlEJRQheCgoKciiJvXcauv/hm/otZrvY5Z+999sw5e8/5wzD7fHutb6//f6/Lt761neuiiy666KILB0wE+oDvqC4GgAeM6/9eOcM3xgvWJwkwoJsLqzoggEXiOJB0cwiu4qjLk3o3KoauAEJTZYD3gU+ABYFtAfCx/kL7fNn2RvZLgE+BD4C5kZ+9CeVH1Z6pBwB7ZPpby2OfrklpfzCy/wWs02qTxU9R9p6sAvQU0FgjfT+woU2kQ/vuXHMAI90p7vaN7H6YzAvsFwfl57foP097duYSoGoovQDAXOC6cSkAMDsY05vGowB3q5m/6X+v7McA5yduciomwGY1c6P+b5f9Rf2uBWWnANOrKsBNwL/awB2na49ZwDnAN8Ahv/4XJgDwHvlRa+Kn1uTZ61VuFXAYGJT9w8CHxRw/6fptGx5FC1BrQYBdTfzsavLsG1TuWb31H2S/NMHXa8Ck1DxJKUA7AUxWtx5Uc3fI3qvfPwOvADfHb74SAhi0x/BYA5ymSM9wr2uCsZ4Daq5gAEsD/78Cv+v6K+DksRCglkGAhmM6K2xMA1/It83yaC54E5iR0kdrArQLCnZeVjN3K4t9BjAto59yCAAcDzyjhMokjXULg38Ezm7Bb+cJAEwALgJuBC4Q+e3BzH6qys0Dzm3xWZ0hADADuB14PghcfBLFBzb7TZiCn9tcAIZn+qNm8CJsGse2Rr8bha+Gr7WGexyO8oiFtCmtAENoplxWm60KwfUhdfM7gJlB2bt03wRaUuTzO0EA/6ZvizcpUfmHhkpCf7sEqMVreF4bcBXwj9w/B5xSj3hQZ6vK39Pq82NbKgGKAnBlEKltqhefJ9T7VnXmFNaYEd9jIwCwWKGq4Qlb6lLWu1B1vk8rWMcJwPD29Jes5FV3teptK6ItWQQY0L1FLT7g8iBntznrWwz2Gre00o46vn3eYF+jbEtR2JKD/BzGBuuSHj5RIvie0AoydfugDT789atG0din88mm2eM8X174Mb81J/k7gwDpLFcWAJcFs/2TOclfC/whHytcWQAsCcjnffPXAEfko8+VBRy9zu/JSf7qIMHZPxrr/qiA4S8/bLcWYm1GH70B+cfLSv4pYGUwa68db+QnyL4irQgR+cyBUtsAzNQSZdgWj/moJ6xOQf7h0pA3aJIyvFBvwmskQkT+kVKRN+g8zrDSNUCSCDrM8NviRz157RumujKAkSzN/jBXl0KELXXIb/DBk+t0AMujz9CyilCPvAVAS10nA7g1IH8f8GoaEZQNGoyzQRH5Za6TASwE/lSD18h2gs7e64oAXBHkBMpJ3mDn72rwRhdAIryRJEKVyJ+orm/jeErC/R6dynoRbGN0fUB+KMLTNzz9pSJvAE5Xow+6xhmcpOSFHWo8rbf+WenIG4BjgQNq/GwXwQ4plWExfK7rL4HXE0Sxs/zFrmwAHhOBj8IPEPThsyf/FnBSVO88LYP2YeMymzNcGQFM06cnaGy/o5Nb/4Z3xOQrB2A68FJ0mntEkWGxycVOBnCmcncW4Exud3uKwn944P9rHnEaCQAAAABJRU5ErkJggg=="
                />
                <span className="flex-1 ml-3 whitespace-nowrap">Bitacoras</span>
              </li>
            </Link>

            <Link to={"/enlaces"} onClick={toggleMenu}>
              <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABf0lEQVR4nO2Wz07CQBCHe7I3aTViLMhb+CAmVg9eeADw4BvqhRL/kXhBEuKBG3oSTnL4zCZDsixbKWV6Y5KmafvLfN3pzG8bBPsoGUAIdIEMmMuRyb2wKmgTGJAfb0BDG9oCxgIYApfAIZAAKfBhwXVWDpxbUFPWyKOJLXhH65sOLGjtH2261GmA7yTZp2+ljjYR7Y8GuC/J0gLaRBM8k2THcl0HXoAHj/ZatD0N8JckOxHou1z3HV0EjDSb61GS3VtQc65bmpo0nolXlXEC2qyGC40t6NiM3s5Qq2F+XShwCtwCEwva2sV7v6W8bYGulRe4ARZWFUx5m9tAN3mvb6UXwFResmcaCTjQ8N4jqYD3m1bmvayOjCo0zPPePKgpr6b3Dl3vBZ5yGmmq6b1XnmemWZ6dkVloe+9ZAa2ZUzXvnRUBiyNNNL0327TNVeW9XUloflNiz/OoKu8N5YdsCU/FGhPZT0elvLcgvGHBfbGd95ZYeUdGaF7ae/cRrMYfq/uxS4Pf7b4AAAAASUVORK5CYII=" />
                <span className="flex-1 ml-3 whitespace-nowrap">Enlaces</span>
              </li>
            </Link>
          </ul>
        </div>




      </div>
      
    </div>
  );
}
