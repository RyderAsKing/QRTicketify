@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12 mt-2">
            <div class="card">
                <div class="card-header">Ticket scanner</div>

                <div class="card-body text-center" style="margin: 0px auto;">
                    <div id="qr-reader-results"></div>
                    <div id="qr-reader" style="width:500px"></div>
                </div>
            </div>
        </div>
    </div>

    {{-- <div class="buttons">
        <a href="{{route('tickets.create')}}" class="btn btn-success mt-2 text-white">Create a new ticket</a> <a
            href="{{route('tickets.index')}}" class="btn btn-warning mt-2">Manage
            tickets</a>
    </div> --}}

</div>
@endsection

@section('script')
<script>
    var resultContainer = document.getElementById('qr-reader-results');
var lastResult, countResults = 0;

function onScanSuccess(decodedText, decodedResult) {
if (decodedText !== lastResult) {
++countResults;
lastResult = decodedText;
// Handle on success condition with the decoded message.
console.log(`Scan result ${decodedText}`, decodedResult);


axios.post('/test', {
ticket_string: lastResult,
})
.then(function (response) {
    resultContainer.innerHTML = `<div class="card" style="margin: 4px auto; width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${response.data.id} - ${response.data.ticket}</h5>
            <p class="card-text">Created ${response.data.created}, registered to ${response.data.email}</p>
            <div class="alert-information">Current status - ${response.data.status}</div>
        </div>
    </div>`;
console.log(response);
})
.catch(function (error) {
console.log(error);
});

}
}

var html5QrcodeScanner = new Html5QrcodeScanner(
"qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);
</script>
@endsection
