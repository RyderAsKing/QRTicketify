<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Event;
use App\Models\Ticket;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\CreateEventRequest;
use App\Http\Requests\CreateTicketRequest;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $events = Event::latest()->paginate(20);
        return Inertia::render('Dashboard', ['events' => $events]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Events/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateEventRequest $request)
    {
        //
        Event::create($request->validated());

        return redirect()
            ->route('dashboard')
            ->with('success', 'Event created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        //
        $tickets = $event->tickets()->paginate(20);
        return Inertia::render('Events/Show', [
            'event' => $event,
            'tickets' => $tickets,
        ]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function createTicket(Event $event)
    {
        return Inertia::render('Events/CreateTicket', ['event' => $event]);
    }

    public function storeTicket(CreateTicketRequest $request, Event $event)
    {
        $event->tickets()->create(
            $request->validated() + [
                'ticket_string' => Str::random(32),
                'status' => 'active',
            ]
        );

        return redirect()
            ->route('events.show', $event)
            ->with('success', 'Ticket created successfully');
    }

    public function showTicket(string $ticket)
    {
        $ticket = Ticket::where('ticket_string', $ticket)
            ->with('event')
            ->firstOrFail();
        return Inertia::render('Ticket', ['ticket' => $ticket]);
    }
}
