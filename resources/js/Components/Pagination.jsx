import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "@inertiajs/react";

export default function Pagination({ paginationData }) {
    const {
        current_page,
        last_page,
        total,
        from,
        to,
        prev_page_url,
        next_page_url,
        links,
    } = paginationData;

    return (
        <div className="flex items-center justify-between  ">
            {/* Mobile Pagination Controls */}
            <div className="flex flex-1 justify-between sm:hidden">
                {prev_page_url && (
                    <Link
                        href={prev_page_url}
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Previous
                    </Link>
                )}
                {next_page_url && (
                    <Link
                        href={next_page_url}
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </Link>
                )}
            </div>

            {/* Desktop Pagination Controls */}
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{from}</span> to{" "}
                        <span className="font-medium">{to}</span> of{" "}
                        <span className="font-medium">{total}</span> results
                    </p>
                </div>
                <div>
                    <nav
                        aria-label="Pagination"
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    >
                        {/* Page Numbers */}
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || "#"}
                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                                    link.active
                                        ? "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
