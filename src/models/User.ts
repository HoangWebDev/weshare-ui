interface IUser {
    id_user?: number;
    full_name?: string;
    email?: string;
    username?: string;
    role?: string;
}

class User implements IUser {
    id_user?: number;
    full_name?: string;
    email?: string;
    username?: string;
    role?: string;

    constructor(id_user: number,
        full_name: string, email: string, username: string, role: string) {
        this.id_user = id_user;
        this.full_name = full_name;
        this.email = email;
        this.username = username;
        this.role = role;
    }
}

export default User