import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    signIn(username: string, pass: string): Promise<{
        username: string;
        email: string;
        createAt?: Date;
    }>;
    register(username: string, email: string, pass: string): Promise<{
        password: any;
        username: string;
        email: string;
        createAt?: Date;
    }>;
}
