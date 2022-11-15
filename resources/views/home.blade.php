@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 mt-2">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    You are logged in!
                </div>
            </div>
        </div>
        <div class="col-md-4 mt-2">
            <div class="card">
                <div class="card-header">
                    Total tickets
                </div>

                <div class="card-body">
                    {{$tickets->count()}} <span class="text-muted">({{$active}} active and {{$used}} used
                        )</span>
                </div>
            </div>
        </div>
    </div>

    <div class="buttons">
        <a href="#" class="btn btn-success mt-2 text-white">Create a new ticket</a> <a href="#"
            class="btn btn-warning mt-2">Manage
            tickets</a>
    </div>
</div>
@endsection
