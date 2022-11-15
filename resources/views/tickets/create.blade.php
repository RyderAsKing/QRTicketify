@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12 mt-2">
            <div class="card">
                <div class="card-header">Create a new ticket</div>
                <div class="card-body">
                    <form method="post" action="{{route('tickets.store')}}">
                        @csrf
                        <div class="form-group mb-2">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                placeholder="Enter email" name="email" value={{old('email')}}>
                            @error('email')
                            <p class="text-muted">{{$message}}</p>
                            @enderror
                        </div>

                        <button type="submit" class="btn btn-primary">Create a ticket</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
