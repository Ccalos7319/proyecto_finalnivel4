import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "../css/details.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const endpoint = "http://127.0.0.1:8000/api/bitacoras/";

export default function Bitacoras() {
  const [dataBitacoras, setDataBitacoras] = useState([]);

  useEffect(() => {
    getAllBitacoras();
  }, []);

  const getAllBitacoras = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/bitacoras`);
      setDataBitacoras(response.data); // Actualiza el estado con los datos de la respuesta
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  const deleteBitacoras = async (idbitacora) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/bitacoras/${idbitacora}`);
      // Si la eliminación fue exitosa, actualiza la lista de usuarios
      getAllBitacoras();
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  return (
    <div className="px-10 flex items-center w-[80%] gap-5">
      <Nav />
      <div className=" flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg mt-20">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Bitacora
                </th>
                <th scope="col" className="px-6 py-3">
                  ID Usuario
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                  Hora
                </th>
                <th scope="col" className="px-6 py-3">
                  IP
                </th>
                <th scope="col" className="px-6 py-3">
                  SO
                </th>
                <th scope="col" className="px-6 py-3">
                  Navegador
                </th>
                <th scope="col" className="px-6 py-3">
                  Usuario
                </th>
                <th scope="col" className="px-6 py-3">
                  Rol
                </th>
                <th scope="col" className="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {dataBitacoras.map((el) => (
                <tr
                  key={el.idbitacora}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{el.bitacora}</td>
                  <td className="px-6 py-4">{el.idusuario}</td>
                  <td className="px-6 py-4">{el.fecha}</td>
                  <td className="px-6 py-4">{el.hora}</td>
                  <td className="px-6 py-4">{el.ip}</td>
                  <td className="px-6 py-4">{el.so}</td>
                  <td className="px-6 py-4">{el.navegador}</td>
                  <td className="px-6 py-4">{el.usuario}</td>

                  <td className="px-6 py-4">
                    <p className="p-[2px] w-[100px] rounded-lg text-white bg-green-800">
                      Administrador
                    </p>
                  </td>
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <Link to={`/edit bitacoras/${el.idbitacora}`}>
                      <p className="flex bg-green-600 p-1 gap-4 rounded-md">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyklEQVR4nO2UPwrCMBSHM3oAQephXFysOOlFegmnzp7FY+gipGu8ghScPmlJaAnmjzFjPugSXn5f3muIEJkBKuAOtLmzR4ALE23ukzfAArhqwc0u2gNP4uiB7Sxc6vWzlgydVLYgNvwNHL+EGxpXm4aD56uBpa5fAQ8rvAPWqYI6OdwSuMZySg4PCPrZD/WGmzqvIHAIaYVLc1uADfD6V+Aci+7Uvf9HQWfPPLg/RuCjCIKUEWUZUexz7UP5BMNrqUhHAbtwrwUx8QEo8BbR2puCUwAAAABJRU5ErkJggg==" />
                        <a href="" className="font-medium text-white"></a>
                      </p>
                    </Link>
                    <p className="flex bg-red-600 p-1 gap-4 rounded-md">
                      <button
                        onClick={() => deleteBitacoras(el.idbitacora)}
                        className="font-medium text-white"
                      >
                        Eliminar
                      </button>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link to={`/create bitacora`}>
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

export const EditBitacora = () => {
  const [usuario, setUsuario] = useState("");
  const [bitacora, setBitacora] = useState("");
  const [idusuario, setIdusuario] = useState(0);
  const [hora, setHora] = useState("");
  const [ip, setIp] = useState("");
  const [so, setSo] = useState("");
  const [navegador, setNavegador] = useState("");
  const [fecha, setFecha] = useState("");
  const [editSuccess, setEditSuccess] = useState(false);
  const [editError, setEditError] = useState(false);
  const navigate = useNavigate();
  const { idbitacora } = useParams();

  const update = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://127.0.0.1:8000/api/bitacoras/${idbitacora}`, {
        bitacora: bitacora,
        idusuario: idusuario,
        fecha: fecha,
        hora: hora,
        ip: ip,
        so: so,
        navegador: navegador,
        usuario: usuario,
      });

      setEditSuccess(true);
      setEditError(false);

      navigate("/bitacoras");
    } catch (error) {
      console.error(error);
      setEditSuccess(false);
      setEditError(error.response?.data?.error || "Error al editar los datos.");
    }
  };

  useEffect(() => {
    const getUsuarioById = async () => {
      const response = await axios.get(`${endpoint}${idbitacora}`);
      setUsuario(response.data.usuario);
      setBitacora(response.data.bitacora);
      setIdusuario(response.data.idusuario);
      setHora(response.data.hora);
      setIp(response.data.ip);
      setSo(response.data.so);
      setNavegador(response.data.navegador);
      setFecha(response.data.fecha);
    };
    getUsuarioById();
  }, [idbitacora]);

  return (
    <div className="px-10 flex items-center w-[80%] gap-5">
      <Nav />

      <main className="border border-gray-300 rounded-2xl w-[600px]">
      <div className="flex py-5 justify-between items-center px-8">
                    <h2 className=" text-2xl font-normal">Editar Informacion</h2>
                    <Link to={"/usuarios"}>
                        <button className="flex items-center duration-200 text-red-500">
                           
                            Back
                        </button>
                    </Link>
                </div>
        <hr className="border border-gray-200 w-full" />
        <form onSubmit={update} className="py-5 px-8">
          <div className="w-full flex justify-between">
            <section className="flex flex-col justify-center ">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                ID usuario
              </label>
              <input
                value={idusuario}
                onChange={(e) => setIdusuario(e.target.value)}
                readOnly
                type="number"
                placeholder=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              />
            </section>
          </div>

          <section className="flex flex-col justify-center">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Bitacora
            </label>
            <input
              value={bitacora}
              onChange={(e) => setBitacora(e.target.value)}
              type="text"
              placeholder=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            />
          </section>

          <div className="w-full flex justify-between">
            <section className="flex flex-col justify-center">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Fecha
              </label>
              <input
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                type="date"
                placeholder=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              />
            </section>

            <section className="flex flex-col justify-center">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Hora
              </label>
              <input
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              />
            </section>
          </div>

          <div className="w-full flex justify-between">
            <section className="flex flex-col justify-center">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                IP
              </label>
              <input
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              />
            </section>

            <section className="flex flex-col justify-center">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                SO
              </label>
              <input
                value={so}
                onChange={(e) => setSo(e.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              />
            </section>
          </div>

          <section className="flex flex-col justify-center">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Navegador
            </label>
            <input
              value={navegador}
              onChange={(e) => setNavegador(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            />
          </section>

          <section className="flex flex-col justify-center">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Usuario
            </label>
            <input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            />
          </section>

          <button
            className="bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-md text-white my-5"
            type="submit"
          >
            Save
          </button>
        </form>
        {editSuccess && (
          <div className="alert alert-success">Datos editados con éxito.</div>
        )}
        {editError && (
          <div className="alert alert-error">Error al editar los datos.</div>
        )}
      </main>
    </div>
  );
};

export const CreateUBitacora = () => {
  const [usuario, setUsuario] = useState("");
  const [bitacora, setBitacora] = useState("");
  const [idusuario, setIdusuario] = useState(0);
  const [hora, setHora] = useState("");
  const [ip, setIp] = useState("");
  const [so, setSo] = useState("");
  const [navegador, setNavegador] = useState("");
  const [fecha, setFecha] = useState("");
  const navigate = useNavigate();
  const createBitacora = async (e) => {
    e.preventDefault();
    await axios.post(`http://127.0.0.1:8000/api/bitacoras`, {
      bitacora: bitacora,
      idusuario: idusuario,
      fecha: fecha,
      hora: hora,
      ip: ip,
      so: so,
      navegador: navegador,
      usuario: usuario,
    });
    navigate("/bitacoras");
  };

  return (
    <div className="px-10 flex items-center w-[80%] gap-5">
      <Nav />

      <main className="border border-gray-300 rounded-2xl w-[600px]">
      <div className="flex py-5 justify-between items-center px-8">
                    <h2 className=" text-2xl font-normal">Crear</h2>
                    <Link to={"/usuarios"}>
                        <button className="flex items-center duration-200 text-red-500">
                           
                            Back
                        </button>
                    </Link>
                </div>
        <hr className="border border-gray-200 w-full" />
        <form onSubmit={createBitacora} className="py-5 px-8">
          <section className="flex flex-col justify-center ">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              ID usuario
            </label>
            <input
              onChange={(e) => setIdusuario(e.target.value)}
              type="number"
              placeholder=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            />
          </section>

          <section className="flex flex-col justify-center">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Bitacora
            </label>
            <input
              onChange={(e) => setBitacora(e.target.value)}
              type="text"
              placeholder=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            />
          </section>

          <div className="w-full flex justify-between">
            <section className="flex flex-col justify-center">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Fecha
              </label>
              <input
                onChange={(e) => setFecha(e.target.value)}
                type="date"
                placeholder=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              />
            </section>

            <section className="flex flex-col justify-center">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Hora
              </label>
              <input
                onChange={(e) => setHora(e.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              />
            </section>
          </div>

          <div className="w-full flex justify-between">
            <section className="flex flex-col justify-center">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                IP
              </label>
              <input
                onChange={(e) => setIp(e.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              />
            </section>

            <section className="flex flex-col justify-center">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                SO
              </label>
              <input
                onChange={(e) => setSo(e.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              />
            </section>
          </div>

          <section className="flex flex-col justify-center">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Navegador
            </label>
            <input
              onChange={(e) => setNavegador(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            />
          </section>

          <section className="flex flex-col justify-center">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Usuario
            </label>
            <input
              onChange={(e) => setUsuario(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            />
          </section>

          <button
            className="bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-md text-white my-5"
            type="submit"
          >
            Save
          </button>
        </form>
      </main>
    </div>
  );
};
