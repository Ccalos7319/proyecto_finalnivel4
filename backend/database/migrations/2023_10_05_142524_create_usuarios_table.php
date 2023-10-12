<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id('idusuario');
            $table->unsignedBigInteger('idpersona');
            $table->string('usuario');
            $table->string('clave');
            $table->string('habilitado');
            $table->string('fecha');
            $table->unsignedBigInteger('idrol');
            $table->string('fechacreacion');
            $table->string('fechamodificacion');
            $table->string('usuariocreacion');
            $table->string('usuariomodificacion');

            $table->foreign('idpersona')->references('idpersona')->on('personas')->onDelete('cascade');
            $table->foreign('idrol')->references('idrol')->on('roles')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
