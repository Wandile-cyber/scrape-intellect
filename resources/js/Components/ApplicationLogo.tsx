import { SVGAttributes } from "react";

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <a href="#" className="flex items-center text-2xl font-bold">
            <img
                src="/scrape-intellect.png"
                alt="Scrape Intellect Logo"
                className="h-20 mr-2"
            />
        </a>
    );
}
