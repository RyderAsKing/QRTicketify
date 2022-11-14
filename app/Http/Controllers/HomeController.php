<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $tickets = Ticket::get();
        $active = $tickets->where('status', 'active')->count();
        $used = $tickets->where('status', 'used')->count();

        return view('home', [
            'tickets' => $tickets,
            'active' => $active,
            'used' => $used,
        ]);
    }
}
