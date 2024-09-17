import Card from "@/Components/Card";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export function Events({ events }) {
    const generateImageUrl = (name, description) => {
        const imageId = name.length + description.length;
        return `https://www.gravatar.com/avatar/${imageId}?d=identicon&s=256`;
    };

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {events.map((event) => (
                <Card
                    key={event.id}
                    image={generateImageUrl(event.name, event.description)}
                    title={event.name}
                    description={event.description}
                ></Card>
            ))}
        </div>
    );
}

export default function Dashboard({ events }) {
    console.log(events);
    const eventsData = events.data;
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Events
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-4">
                    <Events events={eventsData} />
                    <Pagination paginationData={events} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
