import Card from "@/Components/Card";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, usePage } from "@inertiajs/react";

function Ticket({ ticket }) {
    return (
        <>
            <Head title="View Event" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-4">
                    <Card title={ticket.email}></Card>

                    <hr />

                    <div className="mt-2">
                        <div className="flex justify-center items-center gap-2">
                            <p>Would you like to print the ticket?</p>
                            <Link className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                                yes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

Ticket.layout = (page) => (
    <GuestLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                View Ticket
            </h2>
        }
        children={page}
    />
);

export default Ticket;
