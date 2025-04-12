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

interface NoAccessProps {
    featureName: string;
    reason: string;
}

export default function NoAccess({ featureName, reason }: NoAccessProps) {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">
                    Access Restricted
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>No Access to {featureName}</AlertTitle>
                    <AlertDescription>{reason}</AlertDescription>
                </Alert>
            </CardContent>
        </Card>
    );
}
