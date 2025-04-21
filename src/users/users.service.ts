import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
        { id: 3, name: 'Ali Ahmadov', email: 'aliahmadov@example.com' },
        { id: 4, name: 'Leyla Mammadova', email: 'leylamammadova@example.com' },
        { id: 5, name: 'Tom Hardy', email: 'tomhardy@example.com' },
    ];

    getAllUsers(page?: number, limit?: number) {
        if (page && limit) {
            const start = (page - 1) * limit;
            const end = start + limit;
            return this.users.slice(start, end);
        }
        return this.users;
    }

    getUserById(id: string) {
        return this.users.find(user => user.id === parseInt(id, 10));
    }

    createUser(user: { name: string; email: string }) {
        const newUser = { id: this.users.length + 1, ...user };
        this.users.push(newUser);
        return newUser;
    }

    updateUser(id: string, user: { name?: string; email?: string }) {
        const index = this.users.findIndex(u => u.id === parseInt(id, 10));
        if (index !== -1) {
            this.users[index] = { ...this.users[index], ...user };
            return this.users[index];
        }
        return null;
    }

    deleteUser(id: string) {
        const index = this.users.findIndex(user => user.id === parseInt(id, 10));
        if (index !== -1) {
            const deletedUser = this.users.splice(index, 1);
            return deletedUser[0];
        }
        return null;
    }    
}
