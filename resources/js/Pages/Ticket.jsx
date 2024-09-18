import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";
import Card from "@/Components/Card";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

function Ticket({ ticket }) {
    const qrCodeRef = useRef(null);

    useEffect(() => {
        if (ticket.ticket_string) {
            QRCode.toCanvas(
                qrCodeRef.current,
                ticket.ticket_string,
                { width: 300 },
                (error) => {
                    if (error) console.error(error);
                }
            );
        }
    }, [ticket.ticket_string]);

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <Head title="View Event" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-4">
                    <Card title={ticket.email}>hi</Card>
                    <div className="mt-4 flex flex-col justify-center items-center">
                        <h3 className="text-lg font-medium text-gray-900">
                            Your Ticket QR Code
                        </h3>
                        <canvas ref={qrCodeRef} className="mt-2"></canvas>
                    </div>
                    <hr />

                    <div className="mt-2">
                        <div className="flex justify-center items-center gap-2">
                            <p>Would you like to print the ticket?</p>
                            <PrimaryButton
                                onClick={handlePrint}
                                className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                yes
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

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
