import "../css/details.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Parametros() {
  return (
    <div className="px-10 flex items-center w-[80%] gap-5">
      <Nav />
      <div className=" flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg mt-20">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Rol
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <Link to={`/create`}>
          <a
            className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500 justify-center text-white"
            href=""
          >
            Agregar
          </a>
        </Link>
      </div>
    </div>
  );
}
