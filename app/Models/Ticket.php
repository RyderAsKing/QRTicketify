<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = ['ticket_string', 'status', 'email', 'used_at'];

    protected $casts = [
        'used_at' => 'timestamp',
    ];
}
