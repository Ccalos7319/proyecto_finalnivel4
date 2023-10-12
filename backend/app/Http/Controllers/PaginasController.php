<?php

namespace App\Http\Controllers;

use App\Models\Paginas;
use Illuminate\Http\Request;

class PaginasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $paginas = new Paginas();
       return $paginas->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $paginas = new Paginas();
        $paginas->fechacreacion = $request->fechacreacion;
        $paginas->fechamodificacion = $request->fechamodificacion;
        $paginas->usuariocreacion = $request->usuariocreacion;
        $paginas->usuariomodificacion = $request->usuariomodificacion;
        $paginas->url = $request->url;
        $paginas->estado = $request->estado;
        $paginas->nombre = $request->nombre;
        $paginas->descripcion = $request->descripcion;
        $paginas->icono = $request->icono;
        $paginas->tipo = $request->tipo;
        $paginas->save();
        return $paginas;
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
        $paginas = new Paginas();
        return $paginas->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Paginas $paginas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id , Request $request)
    {
        $paginas= Paginas::find($id);
        $paginas->fechacreacion = $request->fechacreacion;
        $paginas->fechamodificacion = $request->fechamodificacion;
        $paginas->usuariocreacion = $paginas->usuariocreacion;
        $paginas->usuariomodificacion = $request->usuariomodificacion;
        $paginas->url = $request->url;
        $paginas->estado = $request->estado;
        $paginas->nombre = $request->nombre;
        $paginas->descripcion = $request->descripcion;
        $paginas->icono = $request->icono;
        $paginas->tipo = $request->tipo;
        $paginas->save();
        return $paginas;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $paginas = Paginas::find($id);
        $paginas->delete();
        return $paginas; 
    }
}
