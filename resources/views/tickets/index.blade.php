@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12 mt-2">
            <div class="card">
                <div class="card-header">Tickets</div>

                <div class="card-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Ticket</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($tickets as $ticket)
                            <tr>
                                <th scope="row">{{$ticket->id}}</th>
                                <td><code>{{$ticket->ticket_string}}</code></td>
                                <td>{{$ticket->email}}</td>
                                <td><span
                                        class="badge @if($ticket->status == 'active') alert-success @else alert-danger @endif">{{$ticket->status}}</span>
                                </td>
                                <td><a href="#" class="btn btn-info text-white">Send ticket</a></td>
                            </tr>
                            @endforeach

                        </tbody>
                    </table>

                    {{ $tickets->links() }}
                </div>
            </div>
        </div>
    </div>

</div>
@endsection
