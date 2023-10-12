<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personas extends Model
{
    use HasFactory;


    protected $primaryKey = 'idpersona';
    protected $fillable = [
        'primernombre',
        'segundonombre',
        'primerapellido',
        'segundoapellido',
        'fechacreacion',
        'fechamodificacion',
        'usuariocreacion',
        'usuariomodificacion',
    ];
}
