<?php

namespace App\Http\Controllers;

use App\Models\Enlaces;
use Illuminate\Http\Request;

class EnlacesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $enlaces = new Enlaces();
        return $enlaces->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $enlaces = new Enlaces();
        $enlaces->idpagina = $request->idpagina;
        $enlaces->idrol = $request->idrol;
        $enlaces->descripcion = $request->descripcion;
        $enlaces->fechacreacion = $request->fechacreacion;
        $enlaces->fechamodificacion = $request->fechamodificacion;
        $enlaces->usuariocreacion = $request->usuariocreacion;
        $enlaces->usuariomodificacion = $request->usuariomodificacion;
        $enlaces->save();
        return $enlaces;
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
        $enlaces = new Enlaces();
        return $enlaces->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Enlaces $enlaces)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id , Request $request)
    {
        $enlaces= Enlaces::find($id);
        $enlaces->idpagina = $request->idpagina;
        $enlaces->idrol = $request->idrol;
        $enlaces->descripcion = $request->descripcion;
        $enlaces->fechacreacion = $request->fechacreacion;
        $enlaces->fechamodificacion = $request->fechamodificacion;
        $enlaces->usuariocreacion = $request->usuariocreacion;
        $enlaces->usuariomodificacion = $request->usuariomodificacion;
        $enlaces->save();
        return $enlaces;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $enlaces = Enlaces::find($id);
        $enlaces->delete();
        return $enlaces; 
    }
}
