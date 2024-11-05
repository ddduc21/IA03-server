import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(user: User): Promise<User>;
    findOne(username: string, email: string): Promise<User | undefined>;
}
