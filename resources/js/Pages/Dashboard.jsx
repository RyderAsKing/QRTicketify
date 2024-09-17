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
                <div
                    key={event.id}
                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                    <div className="flex-shrink-0">
                        <img
                            alt=""
                            src={generateImageUrl(
                                event.name,
                                event.description
                            )}
                            className="h-10 w-10 rounded-full"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <a href="#" className="focus:outline-none">
                            <span
                                aria-hidden="true"
                                className="absolute inset-0"
                            />
                            <p className="text-sm font-medium text-gray-900">
                                {event.name}
                            </p>
                            <p className="truncate text-sm text-gray-500">
                                {event.description}
                            </p>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Dashboard() {
    const events = usePage().props.events;

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
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Events events={events} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
