import Card from "@/Components/Card";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { generateImageUrl } from "../Dashboard";
import Pagination from "@/Components/Pagination";

export function Tickets({ tickets }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {tickets.map((ticket) => (
                <Card
                    key={ticket.id}
                    // image={generateImageUrl(ticket.name, ticket.description)}
                    image="/img/logo.png"
                    title={ticket.email}
                    // description={ticket.key}
                    // href={route(`tickets.show`, ticket.id)}
                ></Card>
            ))}
        </div>
    );
}

function Show({ event, tickets }) {
    const ticketsData = tickets.data;

    return (
        <>
            <Head title="View Event" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-4">
                    <Card
                        image={generateImageUrl(event.name, event.description)}
                        title={event.name}
                        description={event.description}
                    ></Card>

                    <hr />

                    <div className="mt-2">
                        {ticketsData.length === 0 ? (
                            <div className="flex justify-center items-center gap-2">
                                <p>
                                    No tickets available at the moment. Would
                                    you like to create one?
                                </p>
                                <Link
                                    className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                    href={route(
                                        "events.tickets.create",
                                        event.id
                                    )}
                                >
                                    yes
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-center items-center gap-2">
                                    <Link
                                        className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                        href={route(
                                            "events.tickets.create",
                                            event.id
                                        )}
                                    >
                                        add a new ticket
                                    </Link>
                                </div>
                                <Tickets tickets={ticketsData} />
                                <Pagination paginationData={tickets} />
                            </div>
                        )}
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

Show.layout = (page) => (
    <AuthenticatedLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                View Event
            </h2>
        }
        children={page}
    />
);

export default Show;
