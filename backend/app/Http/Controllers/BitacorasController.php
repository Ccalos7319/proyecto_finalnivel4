<?php

namespace App\Http\Controllers;

use App\Models\Bitacoras;
use Illuminate\Http\Request;

class BitacorasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bitacoras = new Bitacoras();
        return $bitacoras->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $bitacoras = new Bitacoras();
        $bitacoras->bitacora = $request->bitacora;
        $bitacoras->idusuario = $request->idusuario;
        $bitacoras->fecha = $request->fecha;
        $bitacoras->hora = $request->hora;
        $bitacoras->ip = $request->ip;
        $bitacoras->so = $request->so;
        $bitacoras->navegador = $request->navegador;
        $bitacoras->usuario = $request->usuario;
        $bitacoras->save();
        return $bitacoras;
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
        $bitacoras = new Bitacoras();
        return $bitacoras->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bitacoras $bitacoras)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id,Request $request)
    {
        $bitacoras= Bitacoras::find($id);
        $bitacoras->bitacora = $request->bitacora;
        $bitacoras->idusuario = $request->idusuario;
        $bitacoras->fecha = $request->fecha;
        $bitacoras->hora = $request->hora;
        $bitacoras->ip = $request->ip;
        $bitacoras->so = $request->so;
        $bitacoras->navegador = $request->navegador;
        $bitacoras->usuario = $request->usuario;
        $bitacoras->save();
        return $bitacoras;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $bitacoras = Bitacoras::find($id);
        $bitacoras->delete();
        return $bitacoras; 
    }
}
