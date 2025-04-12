"use client";

import * as React from "react";
import { Check, X } from "lucide-react";

import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/Components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Switch } from "@/Components/ui/switch";

const employerPlans = [
    {
        name: "Free Trial",
        price: 0,
        features: {
            "Job Listings": "Up to 3",
            "Community Insights": "Yes",
            "Applicant Tracking": "Basic",
            "Auto-responses": "No",
            "Ad Images": "No",
            "Analytics Dashboard": "No",
            "Featured Listings": "No",
        },
    },
    {
        name: "Basic",
        price: 29,
        features: {
            "Job Listings": "Up to 10",
            "Community Insights": "Yes",
            "Applicant Tracking": "Basic",
            "Auto-responses": "Yes",
            "Ad Images": "Yes",
            "Analytics Dashboard": "Yes",
            "Featured Listings": "1",
        },
    },
    {
        name: "Premium",
        price: 99,
        features: {
            "Job Listings": "Unlimited",
            "Community Insights": "Yes",
            "Applicant Tracking": "Advanced",
            "Auto-responses": "Yes",
            "Ad Images": "Yes",
            "Analytics Dashboard": "Yes",
            "Featured Listings": "5",
        },
    },
];

const employeePlans = [
    {
        name: "Free",
        price: 0,
        features: {
            "CV Management": "1 CV",
            "Track Applications": "Yes",
            "Job Alerts": "Yes",
            "Additional CVs": "No",
            "CV Suggester": "No",
            "AI Recommendations": "No",
            "Auto-submit Preview": "No",
            "Free CV Regeneration": "No",
        },
    },
    {
        name: "Standard",
        price: 9,
        features: {
            "CV Management": "Up to 3",
            "Track Applications": "Yes",
            "Job Alerts": "Yes",
            "Additional CVs": "Yes",
            "CV Suggester": "Yes",
            "AI Recommendations": "Yes",
            "Auto-submit Preview": "Yes",
            "Free CV Regeneration": "1/month",
        },
    },
    {
        name: "Pro",
        price: 29,
        features: {
            "CV Management": "Unlimited",
            "Track Applications": "Yes",
            "Job Alerts": "Yes",
            "Additional CVs": "Yes",
            "CV Suggester": "Yes",
            "AI Recommendations": "Yes",
            "Auto-submit Preview": "Yes",
            "Free CV Regeneration": "3/month",
        },
    },
];

export default function SubscriptionPlans() {
    const [yearlyBilling, setYearlyBilling] = React.useState(false);

    return (
        <div className="container mx-auto py-10">
            <Tabs defaultValue="employer" className="w-full">
                <TabsList>
                    <TabsTrigger value="employer">For Employers</TabsTrigger>
                    <TabsTrigger value="employee">For Employees</TabsTrigger>
                </TabsList>

                <div className="flex items-center space-x-2 justify-end mb-4">
                    <span className="text-sm font-medium">Monthly</span>
                    <Switch
                        checked={yearlyBilling}
                        onCheckedChange={setYearlyBilling}
                        aria-label="Toggle yearly billing"
                    />
                    <span className="text-sm font-medium">
                        Yearly <Badge variant="secondary">Save 30%</Badge>
                    </span>
                </div>

                <TabsContent value="employer">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Feature</TableHead>
                                {employerPlans.map((plan) => (
                                    <TableHead
                                        key={plan.name}
                                        className="text-center"
                                    >
                                        {plan.name} <br />
                                        {yearlyBilling
                                            ? `$${(
                                                  plan.price *
                                                  12 *
                                                  0.7
                                              ).toFixed(2)}/year`
                                            : `$${plan.price}/month`}
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Object.keys(employerPlans[0].features).map(
                                (feature) => (
                                    <TableRow key={feature}>
                                        <TableCell className="font-medium">
                                            {feature}
                                        </TableCell>
                                        {employerPlans.map((plan) => (
                                            <TableCell
                                                key={plan.name}
                                                className="text-center"
                                            >
                                                {/* {plan.features[feature]} */}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                )
                            )}
                            <TableRow>
                                <TableCell className="font-medium">
                                    Choose Plan
                                </TableCell>
                                {employerPlans.map((plan) => (
                                    <TableCell
                                        key={plan.name}
                                        className="text-center"
                                    >
                                        <Button
                                            className="w-full"
                                            variant="outline"
                                        >
                                            Choose Plan
                                        </Button>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>

                <TabsContent value="employee">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Feature</TableHead>
                                {employeePlans.map((plan) => (
                                    <TableHead
                                        key={plan.name}
                                        className="text-center"
                                    >
                                        {plan.name} <br />
                                        {yearlyBilling
                                            ? `$${(
                                                  plan.price *
                                                  12 *
                                                  0.7
                                              ).toFixed(2)}/year`
                                            : `$${plan.price}/month`}
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Object.keys(employeePlans[0].features).map(
                                (feature) => (
                                    <TableRow key={feature}>
                                        <TableCell className="font-medium">
                                            {feature}
                                        </TableCell>
                                        {employeePlans.map((plan) => (
                                            <TableCell
                                                key={plan.name}
                                                className="text-center"
                                            >
                                                {/* {plan.features[feature]} */}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                )
                            )}
                            <TableRow>
                                <TableCell className="font-medium">
                                    Choose Plan
                                </TableCell>
                                {employeePlans.map((plan) => (
                                    <TableCell
                                        key={plan.name}
                                        className="text-center"
                                    >
                                        <Button
                                            className="w-full"
                                            variant="outline"
                                        >
                                            Choose Plan
                                        </Button>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </div>
    );
}
