<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuarios = new Usuarios();
        return $usuarios->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $usuarios = new Usuarios();
        $usuarios->idpersona = $request->idpersona;
        $usuarios->usuario = $request->usuario;
        $usuarios->clave = $request->clave;
        $usuarios->habilitado = $request->habilitado;
        $usuarios->fecha = $request->fecha;
        $usuarios->idrol = $request->idrol;
        $usuarios->fechacreacion = $request->fechacreacion;
        $usuarios->fechamodificacion = $request->fechamodificacion;
        $usuarios->usuariocreacion = $request->usuariocreacion;
        $usuarios->usuariomodificacion = $request->usuariomodificacion;
        $usuarios->save();
        return $usuarios;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $usuarios = new Usuarios();
        return $usuarios->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Usuarios $usuarios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id , Request $request)
    {
        $usuarios= Usuarios::find($id);
        $usuarios->idpersona = $request->idpersona;
        $usuarios->usuario = $request->usuario;
        $usuarios->clave = $request->clave;
        $usuarios->habilitado = $request->habilitado;
        $usuarios->fecha = $request->fecha;
        $usuarios->idrol = $request->idrol;
        $usuarios->fechacreacion = $request->fechacreacion;
        $usuarios->fechamodificacion = $request->fechamodificacion;
        $usuarios->usuariocreacion = $request->usuariocreacion;
        $usuarios->usuariomodificacion = $request->usuariomodificacion;
        $usuarios->save();
        return $usuarios;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuarios = Usuarios::find($id);
        $usuarios->delete();
        return $usuarios; 
    }
}
