<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubBagian extends Model
{
    use HasFactory;

    protected $table = 'sub_bagian';
    protected $guarded = ['id'];
}
