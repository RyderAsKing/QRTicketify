@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12 mt-2">
            <div class="card">
                <div class="card-header">Ticket ID: {{$ticket->id}} <span class="text-muted">Email:
                        {{$ticket->email}}</span></div>

                <div class="card-body text-center ">
                    {!! QrCode::size(200)->generate($ticket->ticket_string); !!}
                    <div class="mt-2">
                        <span class="text-muted">Show me at the counter</span>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
@endsection
