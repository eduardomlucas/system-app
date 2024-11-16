export interface LoginRequest{
    email: string,
    password: string
}

export interface AuthResponse{
  name: string;
  token: string;
}

export interface RegisterRequest{
    name: string;
    email: string;
    password: string;
}