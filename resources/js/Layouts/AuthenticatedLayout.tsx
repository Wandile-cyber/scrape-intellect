import ApplicationLogo from "@/Components/initial/ApplicationLogo";
import Dropdown from "@/Components/initial/Dropdown";
import NavLink from "@/Components/initial/NavLink";
import ResponsiveNavLink from "@/Components/initial/ResponsiveNavLink";
import { Link, Head, usePage } from "@inertiajs/react";
import {
    PropsWithChildren,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
} from "react";

import {
    AudioWaveform,
    BadgeCheck,
    Bell,
    BookOpen,
    Bot,
    CreditCard,
    Folder,
    Forward,
    Frame,
    GalleryVerticalEnd,
    Building2,
    PieChart,
    Users,
    LogIn,
    FileText,
    ClipboardList,
    Settings,
    HelpCircle,
    LogOut,
    ChevronRight,
    ChevronsUpDown,
    Command,
    Sparkles,
    SquareTerminal,
    Trash2,
    Sun,
    Moon,
    BarChart,
    Briefcase,
    Calendar,
    ClipboardCheck,
    MessageSquare,
    ShieldCheck,
    UserCircle,
    Home,
    UserCheck,
    NotepadText,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Separator } from "@/Components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuBadge,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from "@/Components/ui/sidebar";
import { Toaster } from "@/Components/ui/sonner";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button, buttonVariants } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";

interface User {
    firstname: string;
    lastname: string;
    email: string;
    role: Role;
}

interface Role {
    name: UserRole;
}

type UserRole = "member" | "verifier" | "admin" | "support";

type MenuItem = {
    icon: React.ElementType;
    label: string;
    href: string;
    roles: UserRole[];
    subItems?: MenuItem[];
};

const menuItems: MenuItem[] = [
    {
        icon: Home,
        label: "Home",
        href: "/dashboard",
        roles: ["member", "verifier", "admin", "support"],
    },
    {
        icon: ClipboardCheck,
        label: "KYC Submission",
        href: "/kyc-submission",
        roles: ["member"],
    },
    // {
    //     icon: FileText,
    //     label: "My KYC History",
    //     href: "/kyc-history",
    //     roles: ["member"],
    // },
    {
        icon: ShieldCheck,
        label: "KYC Verification",
        href: "/kyc-verification",
        roles: ["verifier"],
    },
    {
        icon: Users,
        label: "Members",
        href: "/members",
        roles: ["admin"],
    },
    {
        icon: Calendar,
        label: "KYC Periods",
        href: "/kyc-periods",
        roles: ["admin"],
    },
    {
        icon: FileText,
        label: "KYC Submissions",
        href: "/kyc-submissions",
        roles: ["admin"],
    },
    // {
    //     icon: BarChart,
    //     label: "Analytics",
    //     href: "/analytics",
    //     roles: ["admin"],
    //     subItems: [
    //         {
    //             icon: BarChart,
    //             label: "Submission Rates",
    //             href: "/analytics/submission-rates",
    //             roles: ["admin"],
    //         },
    //         {
    //             icon: BarChart,
    //             label: "Verification Metrics",
    //             href: "/analytics/verification-metrics",
    //             roles: ["admin"],
    //         },
    //     ],
    // },
    {
        icon: MessageSquare,
        label: "Support Requests",
        href: "/support-requests",
        roles: ["verifier", "admin", "support"],
    },
    {
        icon: NotepadText,
        label: "Feedback Submissions",
        href: "/feedback-submissions",
        roles: ["verifier", "admin", "support"],
    },
    {
        icon: Bell,
        label: "Notifications",
        href: "/notifications",
        roles: ["member", "verifier", "admin", "support"],
    },
    {
        icon: BookOpen,
        label: "KYC Guidelines",
        href: "/kyc-guidelines",
        roles: ["member", "verifier", "admin", "support"],
    },
    {
        icon: Settings,
        label: "Profile",
        href: "/settings",
        roles: ["member", "verifier", "admin", "support"],
    },
    {
        icon: HelpCircle,
        label: "Help & Support",
        href: "/help-support",
        roles: ["member", "verifier", "admin", "support"],
    },
    {
        icon: UserCheck,
        label: "Share Feedback",
        href: "/share-feedback",
        roles: ["member", "verifier", "admin", "support"],
    },
];

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const auth_user = usePage().props.auth.user;
    const [activeUrl, setActiveUrl] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [notificationCount, setNotificationCount] = useState(0);

    useEffect(() => {
        setActiveUrl(window.location.pathname);
    }, []);

    const filteredMenu = menuItems.filter((item) =>
        item.roles.includes(auth_user.role.name)
    );

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
        document.body.classList.toggle("dark", !isDarkMode);
    };

    useEffect(() => {
        setActiveUrl(window.location.pathname);

        const intervalId = setInterval(() => {
            fetchNotificationCount();
        }, 2000); // Fetch every 2 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    const fetchNotificationCount = async () => {
        try {
            const response = await fetch("/notifications/count");
            const data = await response.json();
            setNotificationCount(data.count);
        } catch (error) {
            console.error("Error fetching notification count:", error);
        }
    };

    return (
        <>
            <Head>
                <link rel="icon" href="/logo.png" type="image/x-icon" />
            </Head>

            <SidebarProvider className="bg-slate-200">
                <Sidebar className={`bg-slate-200 ${isDarkMode ? "dark" : ""}`}>
                    <SidebarHeader className="bg-slate-200">
                        <SidebarMenu>
                            <SidebarMenuItem className="bg-slate-200">
                                <div className="flex items-center space-x-4">
                                    {" "}
                                    {/* Added space-x-4 for spacing */}
                                    <SidebarMenuButton size="lg" asChild>
                                        <a
                                            href="#"
                                            className="flex items-center"
                                        >
                                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                                                <ApplicationLogo
                                                    className="fill-current"
                                                    width="50%"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-0.5 leading-none ml-2">
                                                <span className="font-semibold">
                                                    Hlalawati KYC
                                                </span>
                                            </div>
                                        </a>
                                    </SidebarMenuButton>
                                </div>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>
                    <SidebarContent className="bg-slate-200">
                        <ScrollArea className="h-[calc(100vh-10rem)]">
                            <SidebarMenu>
                                {filteredMenu.map((item) => (
                                    <SidebarMenuItem key={item.label}>
                                        <SidebarMenuButton asChild>
                                            <Link
                                                prefetch="mount"
                                                href={item.href}
                                                className={
                                                    activeUrl === item.href
                                                        ? "active-class"
                                                        : ""
                                                }
                                            >
                                                <item.icon className="mr-2" />
                                                {item.label}
                                            </Link>
                                        </SidebarMenuButton>
                                        {item.subItems && (
                                            <SidebarMenuSub>
                                                {item.subItems.map(
                                                    (subItem) => (
                                                        <SidebarMenuSubItem
                                                            key={subItem.label}
                                                        >
                                                            <SidebarMenuButton
                                                                asChild
                                                            >
                                                                <Link
                                                                    href={
                                                                        subItem.href
                                                                    }
                                                                    className={
                                                                        activeUrl ===
                                                                        subItem.href
                                                                            ? "active-class"
                                                                            : ""
                                                                    }
                                                                >
                                                                    <subItem.icon className="mr-2" />
                                                                    {
                                                                        subItem.label
                                                                    }
                                                                </Link>
                                                            </SidebarMenuButton>
                                                        </SidebarMenuSubItem>
                                                    )
                                                )}
                                            </SidebarMenuSub>
                                        )}
                                        {item.label === "Notifications" &&
                                            notificationCount > 0 && (
                                                <SidebarMenuBadge>
                                                    <Badge>
                                                        {notificationCount}
                                                    </Badge>
                                                </SidebarMenuBadge>
                                            )}
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </ScrollArea>
                        <div className="mt-auto mb-8">
                            <ApplicationLogo
                                className="fill-current"
                                width="100%"
                            />
                        </div>
                    </SidebarContent>
                    <SidebarFooter className="bg-slate-200">
                        <Link
                            className={`${buttonVariants({
                                variant: "outline",
                            })} w-full`}
                            href="/logout"
                        >
                            Log Out
                        </Link>
                    </SidebarFooter>
                </Sidebar>

                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                        <div className="flex items-center gap-2 px-3">
                            <SidebarTrigger />
                            <Separator
                                orientation="vertical"
                                className="mr-2 h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            Hlalawati KYC System
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <main>{children}</main>
                    <Toaster position="top-right" />
                </SidebarInset>
            </SidebarProvider>
        </>
    );
}
