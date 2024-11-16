import axios from "axios";
import { LoginRequest, AuthResponse, RegisterRequest } from "./auth.interface";

const apiUrl: string = "http://localhost:8080/auth";

class AuthService {
  async login (dto: LoginRequest): Promise<AuthResponse> {    
    const reponse = await axios.post<AuthResponse>(`${apiUrl}/login`, dto );
    return reponse.data;
  }
  
  async register (dto: RegisterRequest) : Promise<AuthResponse>{
    const response = await axios.post<AuthResponse>(`${apiUrl}/register`, dto );
    return response.data; 
  }
}


const authService = new AuthService();
export default authService;