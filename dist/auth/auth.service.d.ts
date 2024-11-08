import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<{
        access_token: string;
    }>;
    register(username: string, email: string, pass: string): Promise<{
        password: any;
        username: string;
        email: string;
        createAt?: Date;
    }>;
}
