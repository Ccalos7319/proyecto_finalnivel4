import { useState, useEffect } from 'react';
import { Link, } from "react-router-dom"
import "../css/details.css"
import Nav from "./Nav"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const endpoint = 'http://127.0.0.1:8000/api/enlaces/';


export default function Enlaces() {
    

    const [dataEnlaces, setDataEnlaces] = useState([]);

    useEffect(() => {
        getAllEnlaces();
    }, []);

    const getAllEnlaces = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/enlaces`);
            setDataEnlaces(response.data); // Actualiza el estado con los datos de la respuesta
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const deleteEnlaces = async (idenlace) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/enlaces/${idenlace}`);
            // Si la eliminación fue exitosa, actualiza la lista de usuarios
            getAllEnlaces();
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);


        }
    };


    return (
        <div className="px-10 flex items-center w-[80%] gap-5">
            <Nav />
            <div className=' flex flex-col'>
                 <div className="overflow-x-auto shadow-md sm:rounded-lg mt-20">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID Pagina
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ID Rol
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descripcion
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
                        {dataEnlaces.map((el) => (
                            <tr key={el.idenlace} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    {el.idpagina}
                                </td>
                                <td className="px-6 py-4">
                                    {el.idrol}
                                </td>
                                <td className="px-6 py-4">
                                    {el.descripcion}
                                </td>

                                <td className="px-6 py-4">
                                    <p className="p-[2px] w-[100px] rounded-lg text-white bg-green-800">Administrador</p>
                                </td>
                                <td className="flex items-center px-6 py-4 space-x-3">
                                    <Link to={`/edit enlace/${el.idenlace}`}>
                                        <p className='flex bg-green-600 p-1 gap-4 rounded-md'>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyklEQVR4nO2UPwrCMBSHM3oAQephXFysOOlFegmnzp7FY+gipGu8ghScPmlJaAnmjzFjPugSXn5f3muIEJkBKuAOtLmzR4ALE23ukzfAArhqwc0u2gNP4uiB7Sxc6vWzlgydVLYgNvwNHL+EGxpXm4aD56uBpa5fAQ8rvAPWqYI6OdwSuMZySg4PCPrZD/WGmzqvIHAIaYVLc1uADfD6V+Aci+7Uvf9HQWfPPLg/RuCjCIKUEWUZUexz7UP5BMNrqUhHAbtwrwUx8QEo8BbR2puCUwAAAABJRU5ErkJggg==" />
                                            <a href="#" className="font-medium text-white"></a>
                                        </p>
                                    </Link>
                                    <p className='flex bg-red-600 p-1 gap-4 rounded-md'>
                                        <button onClick={() => deleteEnlaces(el.idenlace)} className="font-medium text-white">Eliminar</button>
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Link to={`/create enlace`}>
            <a
            className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500 justify-center text-white"
            href=""
          >
           
              Agregar
            
            
          </a>
            </Link>
            </div>
           
        </div>
    )
}


export const EditEnlace = () => {
    const [idpagina, setIdpagina] = useState('');
    const [idrol, setIdrol] = useState(0);
    const [descripcion, setDescripcion] = useState('');
    const [fechacreacion, setFechacreacion] = useState('');
    const [fechamodificacion, setFechamodificacion] = useState('');
    const [usuariocreacion, setUsuariocreacion] = useState('');
    const [usuariomodificacion, setUsuariomodificacion] = useState('');
    const [editSuccess, setEditSuccess] = useState(false);
    const [editError, setEditError] = useState(false);
    const navigate = useNavigate();
    const { idenlace } = useParams();

    const update = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`${endpoint}${idenlace}`, {
                idenlace: idenlace,
                idpagina: idpagina,
                idrol: idrol,
                descripcion: descripcion,
                fechacreacion: fechacreacion,
                fechamodificacion: fechamodificacion,
                usuariocreacion: usuariocreacion,
                usuariomodificacion: usuariomodificacion
            });

            setEditSuccess(true);
            setEditError(false);

            navigate("/enlaces");
        } catch (error) {
            console.error(error);
            setEditSuccess(false);
            setEditError(error.response?.data?.error || 'Error al editar los datos.');
        }
    }

    useEffect(() => {
        const getUsuarioById = async () => {
            const response = await axios.get(`${endpoint}${idenlace}`);
            setIdpagina(response.data.idpagina);
            setIdrol(response.data.idrol);
            setDescripcion(response.data.descripcion);
            setFechacreacion(response.data.fechacreacion);
            setFechamodificacion(response.data.fechamodificacion);
            setUsuariomodificacion(response.data.usuariomodificacion);
            setUsuariocreacion(response.data.usuariocreacion);
        }
        getUsuarioById();
    }, [idenlace]);


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
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID pagina</label>
                            <input value={idpagina} onChange={(e) => setIdpagina(e.target.value)} type="number" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                        <section className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID rol</label>
                            <input value={idrol} onChange={(e) => setIdrol(e.target.value)} type="number" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Descripcion</label>
                        <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Fecha creacion</label>
                            <input value={fechacreacion} onChange={(e) => setFechacreacion(e.target.value)} type="date" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">fecha modificacion</label>
                            <input value={fechamodificacion} onChange={(e) => setFechamodificacion(e.target.value)} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario creacion</label>
                            <input value={usuariocreacion} onChange={(e) => setUsuariocreacion(e.target.value)} type="date" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario modificacion</label>
                            <input value={usuariomodificacion} onChange={(e) => setUsuariomodificacion(e.target.value)} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-md text-white my-5" type="submit">Save</button>
                </form>
                {editSuccess && (
                    <div className="alert alert-success">Datos editados con éxito.</div>
                )}
                {editError && (
                    <div className="alert alert-error">Error al editar los datos.</div>
                )}
            </main>
        </div>
    )

}


export const CreateEnlace = () => {

    const [idpagina, setIdpagina] = useState('');
    const [idrol, setIdrol] = useState(0);
    const [descripcion, setDescripcion] = useState('');
    const [fechacreacion, setFechacreacion] = useState('');
    const [fechamodificacion, setFechamodificacion] = useState('');
    const [usuariocreacion, setUsuariocreacion] = useState('');
    const [usuariomodificacion, setUsuariomodificacion] = useState('');
    const navigate = useNavigate();
    const createEnlace = async (e) => {
        e.preventDefault();

        await axios.post(`http://127.0.0.1:8000/api/enlaces`, {
            idpagina: idpagina,
            idrol: idrol,
            descripcion: descripcion,
            fechacreacion: fechacreacion,
            fechamodificacion: fechamodificacion,
            usuariocreacion: usuariocreacion,
            usuariomodificacion: usuariomodificacion
        });
        navigate("/enlaces")
    }

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
                <form onSubmit={createEnlace} className="py-5 px-8">
                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID pagina</label>
                            <input onChange={(e) => setIdpagina(e.target.value)} type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />

                        </section>

                        <section className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID rol</label>
                            <input onChange={(e) => setIdrol(e.target.value)} type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                    </div>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Descripcion</label>
                        <input onChange={(e) => setDescripcion(e.target.value)} type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Fecha creacion</label>
                            <input onChange={(e) => setFechacreacion(e.target.value)} type="date" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">fecha modificacion</label>
                            <input onChange={(e) => setFechamodificacion(e.target.value)} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario creacion</label>
                            <input onChange={(e) => setUsuariocreacion(e.target.value)} type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario modificacion</label>
                            <input onChange={(e) => setUsuariomodificacion(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <button type='submit' className="mt-5 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">Create</button>

                </form>
            </main>
        </div>
    )
}

