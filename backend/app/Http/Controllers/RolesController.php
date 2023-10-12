<?php

namespace App\Http\Controllers;

use App\Models\Roles;
use Illuminate\Http\Request;

class RolesController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = new Roles();
        return $roles->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $roles = new Roles();
        $roles->rol = $request->rol;
        $roles->fechacreacion = $request->fechacreacion;
        $roles->fechamodificacion = $request->fechamodificacion;
        $roles->usuariocreacion = $request->usuariocreacion;
        $roles->usuariomodificacion = $request->usuariomodificacion;
        $roles->save();
        return $roles;
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
        $roles = new Roles();
        return $roles->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id , Request $request)
    {
        $roles= Roles::find($id);
        $roles->rol = $request->rol;
        $roles->fechacreacion = $request->fechacreacion;
        $roles->fechamodificacion = $request->fechamodificacion;
        $roles->usuariocreacion = $request->usuariocreacion;
        $roles->usuariomodificacion = $request->usuariomodificacion;
        $roles->save();
        return $roles;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $roles = Roles::find($id);
        $roles->delete();
        return $roles; 

    }
}
