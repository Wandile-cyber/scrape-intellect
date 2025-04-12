"use client";

import { dotPulse } from "ldrs";

export default function Spinner() {
    dotPulse.register();

    return <l-dot-pulse size="43" speed="1.3" color="black"></l-dot-pulse>;
}
