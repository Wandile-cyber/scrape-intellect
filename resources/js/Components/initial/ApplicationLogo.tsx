import { SVGAttributes } from "react";

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <a href="#" className="flex items-center text-2xl font-bold">
            <img
                src="/eswatinicareers.png"
                alt="Eswatini Careers Logo"
                className="h-10 mr-2"
            />
            EswatiniCareers
        </a>
    );
}
