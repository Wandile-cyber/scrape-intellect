import React from "react";
import { AlertTriangle } from "lucide-react";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import { Button } from "@/Components/ui/button";

interface SuccessCardProps {
    title: string;
    subtitle: string;
    more: string;
}

export default function SuccessCard({
    title,
    subtitle,
    more,
}: SuccessCardProps) {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Alert variant="default">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>{subtitle}</AlertTitle>
                    <AlertDescription>{more}</AlertDescription>
                </Alert>
            </CardContent>
        </Card>
    );
}
