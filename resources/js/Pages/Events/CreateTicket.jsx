import Card from "@/Components/Card";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

function CreateTicket({ event }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("events.tickets.create", event), {
            onSuccess: () => {
                console.log("Event created successfully");
            },
        });
    };

    return (
        <>
            <Head title="Create a new ticket" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-4">
                    <div className="space-y-10 divide-y divide-gray-900/10">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                            <div className="px-4 sm:px-0">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">
                                    New Ticket
                                </h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    Enter the details below to add a new ticket
                                    to the database. Ensure all required fields
                                    are filled in accurately for a successful
                                    submission.
                                </p>
                            </div>

                            <form
                                onSubmit={submit}
                                className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
                            >
                                <div className="px-4 py-6 sm:p-8">
                                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="col-span-full">
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Email
                                            </label>
                                            <div className="mt-2  ">
                                                <div className=" flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="text"
                                                        placeholder="Name of the event eg. Birthday Party"
                                                        className="w-full block flex-1 border-0  bg-transparent  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                        value={data.email}
                                                        onChange={(e) => {
                                                            setData(
                                                                "email",
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </div>
                                                <InputError
                                                    message={errors.email}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>

                                        {/* <div className="col-span-full">
                                            <label
                                                htmlFor="description"
                                                className="block text-sm font-medium leading-6 text-gray-900 "
                                            >
                                                Description
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    rows={3}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    value={data.description}
                                                    onChange={(e) => {
                                                        setData(
                                                            "description",
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                            <InputError
                                                message={errors.description}
                                                className="mt-2"
                                            />

                                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                                Write a few sentences describing
                                                the event.
                                            </p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                                    <PrimaryButton type="submit">
                                        Create
                                    </PrimaryButton>
                                </div>
                            </form>
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

CreateTicket.layout = (page) => (
    <AuthenticatedLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                New Event
            </h2>
        }
        children={page}
    />
);

export default CreateTicket;
