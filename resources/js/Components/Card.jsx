import { Link } from "@inertiajs/react";
import React from "react";

const Card = ({ image, title, description, href }) => {
    return (
        <Link href={href ? href : "#"}>
            <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div className="flex-shrink-0">
                    <img
                        alt=""
                        src={image}
                        className="h-10 w-10 rounded-full"
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <a href="#" className="focus:outline-none">
                        <span aria-hidden="true" className="absolute inset-0" />
                        <p className="text-sm font-medium text-gray-900">
                            {title}
                        </p>
                        <p className="truncate text-sm text-gray-500">
                            {description}
                        </p>
                    </a>
                </div>
            </div>
        </Link>
    );
};

export default Card;
