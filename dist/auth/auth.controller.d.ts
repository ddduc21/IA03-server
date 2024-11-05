import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, string>): Promise<{
        access_token: string;
    }>;
    register(registerDto: Record<string, string>): Promise<{
        password: any;
        username: string;
        email: string;
        createAt?: Date;
    }>;
}
