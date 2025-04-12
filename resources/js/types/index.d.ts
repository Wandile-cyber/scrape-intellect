export interface User {
    id: number;
    name: string;
    role_id: number;
    email: string;
    mobile_no: string;
    role: Role;
    email_verified_at?: string;
}

interface Role {
    name: UserRole;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
