export interface User
{
    fname: string;
    user: string;
    email: string;
    isAdmin: boolean;
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

export interface UserResponse
{
    success: boolean;
    message: string;
    response: User;
}

export interface UsersResponse
{
    success: boolean;
    message: string;
    response: User[];
}

