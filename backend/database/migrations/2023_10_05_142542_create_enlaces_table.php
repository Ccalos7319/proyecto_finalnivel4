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
        Schema::create('enlaces', function (Blueprint $table) {
            $table->id('idenlace');
            $table->unsignedBigInteger('idpagina');
            $table->unsignedBigInteger('idrol');
            $table->string('descripcion');
            $table->string('fechacreacion');
            $table->string('fechamodificacion');
            $table->string('usuariocreacion');
            $table->string('usuariomodificacion');
            

            $table->foreign('idpagina')->references('idpagina')->on('paginas')->onDelete('cascade');
            $table->foreign('idrol')->references('idrol')->on('roles')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enlaces');
    }
};
