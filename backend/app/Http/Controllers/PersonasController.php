<?php

namespace App\Http\Controllers;

use App\Models\Personas;
use Illuminate\Http\Request;

class PersonasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $personas = new Personas();
        return $personas->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $personas = new Personas();
        $personas->primernombre = $request->primernombre;
        $personas->segundonombre = $request->segundonombre;
        $personas->primerapellido = $request->primerapellido;
        $personas->segundoapellido = $request->segundoapellido;
        $personas->fechacreacion = $request->fechacreacion;
        $personas->fechamodificacion = $request->fechamodificacion;
        $personas->usuariocreacion = $request->usuariocreacion;
        $personas->usuariomodificacion = $request->usuariomodificacion;
        $personas->save();
        return $personas;
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
    public function show($idpersona)
    {
        $personas = new Personas();
        return $personas->find($idpersona);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Personas $personas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id , Request $request)
    {
        $personas= Personas::find($id);
        $personas->primernombre = $request->primernombre;
        $personas->segundonombre = $request->segundonombre;
        $personas->primerapellido = $request->primerapellido;
        $personas->segundoapellido = $request->segundoapellido;
        $personas->fechacreacion = $request->fechacreacion;
        $personas->fechamodificacion = $request->fechamodificacion;
        $personas->usuariocreacion = $request->usuariocreacion;
        $personas->usuariomodificacion = $request->usuariomodificacion;
        $personas->save();
        return $personas;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $personas = Personas::find($id);
        $personas->delete();
        return $personas; 

    }
}
