import Card from "@/Components/Card";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export const generateImageUrl = (name = 1, description = 1) => {
    const imageId = name.length + description.length;
    return `https://www.gravatar.com/avatar/${imageId}?d=identicon&s=256`;
};

export function Events({ events }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {events.map((event) => (
                <Card
                    key={event.id}
                    image={generateImageUrl(event.name, event.description)}
                    title={event.name}
                    description={event.description}
                    href={route(`events.show`, event.id)}
                ></Card>
            ))}
        </div>
    );
}

function Dashboard({ events }) {
    console.log(events);
    const eventsData = events.data;
    return (
        <>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-4">
                    {eventsData.length === 0 ? (
                        <div className="flex justify-center items-center gap-2">
                            <p>
                                No events available at the moment. Would you
                                like to create one?
                            </p>
                            <Link
                                className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                href={route("events.create")}
                            >
                                yes
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-center items-center gap-2">
                                <Link
                                    className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                    href={route("events.create")}
                                >
                                    add a new event
                                </Link>
                            </div>
                            <Events events={eventsData} />
                            <Pagination paginationData={events} />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => (
    <AuthenticatedLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Events
            </h2>
        }
        children={page}
    ></AuthenticatedLayout>
);

export default Dashboard;
