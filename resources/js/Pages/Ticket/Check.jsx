import React, { useEffect } from "react";
import Card from "@/Components/Card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { generateImageUrl } from "../Dashboard";
import { Scanner } from "@yudiel/react-qr-scanner";

function Ticket({ ticket, event }) {
    const { data, setData, post, processing, errors } = useForm({
        ticket_string: "",
    });

    const checkTicket = (result) => {
        const ticketValue = result[0].rawValue;

        // Update form data
        setData("ticket_string", ticketValue);
    };

    useEffect(() => {
        if (data.ticket_string === "") {
            return;
        }
        post(route("ticket.check"), {
            onSuccess: (response) => {
                console.log("Ticket checked successfully");
            },
            onError: (err) => {
                console.log("Failed to check the ticket", err);
            },
        });
    }, [data]);

    useEffect(() => {
        console.log(ticket);
    }, [ticket]);

    return (
        <>
            <Head title="View Event" />

            <div className="py-12 flex flex-col items-center">
                <div className="w-full sm:max-w-md  px-4 py-6 sm:p-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-4">
                        <Card title="Scan the QR code to check in to the event" />
                        {ticket && event && (
                            <>
                                <Card
                                    title={event.name}
                                    image={generateImageUrl(
                                        event.name,
                                        event.description
                                    )}
                                    description={event.description}
                                />

                                <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                                    <div className="min-w-0 flex-1">
                                        <div className="focus:outline-none">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            />
                                            <p className="text-sm font-medium text-gray-900">
                                                {ticket.email}
                                            </p>
                                            {ticket.status == "used" ? (
                                                <p className="text-sm text-red-500">
                                                    Ticket has been used
                                                </p>
                                            ) : (
                                                <p className="text-sm text-green-500">
                                                    Ticket is valid
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        <Scanner onScan={(result) => checkTicket(result)} />
                    </div>
                </div>
            </div>
        </>
    );
}

Ticket.layout = (page) => (
    <AuthenticatedLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                View Ticket
            </h2>
        }
        children={page}
    />
);

export default Ticket;
