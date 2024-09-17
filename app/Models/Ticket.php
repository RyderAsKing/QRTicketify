<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'ticket_string',
        'status',
        'email',
        'used_at',
        'event_id',
    ];

    protected $casts = [
        'used_at' => 'timestamp',
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
