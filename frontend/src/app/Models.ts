export interface User
{
    user: string;
    email: string;
    password: string;
    isAdmin: boolean;
    fname: string;
};

export interface Login
{
    email: string;
    password: string;
};

export interface Register
{
    user: string;
    email: string;
    fname: string;
    password: string;
    re_password?: string;
};

export interface ErrorResponse
{
    success: boolean;
    message: string;
    error: ErrorEvent;
}

export interface AuthResponse
{
    success: boolean;
    message: string;
    response: any;
    flag: string;
}

