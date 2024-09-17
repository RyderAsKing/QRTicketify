import Card from "@/Components/Card";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("events.store"), {
            onSuccess: () => {
                console.log("Event created successfully");
            },
        });
    };

    return (
        <>
            <Head title="Create a new event" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-4">
                    <div className="space-y-10 divide-y divide-gray-900/10">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                            <div className="px-4 sm:px-0">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">
                                    New Event
                                </h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    Enter the details below to add a new event
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
                                                htmlFor="name"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Name
                                            </label>
                                            <div className="mt-2  ">
                                                <div className=" flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        placeholder="Name of the event eg. Birthday Party"
                                                        className="w-full block flex-1 border-0  bg-transparent  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                        value={data.name}
                                                        onChange={(e) => {
                                                            setData(
                                                                "name",
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
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
                                            <p className="mt-3 text-sm leading-6 text-gray-600">
                                                Write a few sentences describing
                                                the event.
                                            </p>
                                        </div>
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

Create.layout = (page) => (
    <AuthenticatedLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                New Event
            </h2>
        }
        children={page}
    />
);

export default Create;
