import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUsers(@Query('page') page?: number, @Query('limit') limit?: number) {
        return this.usersService.getAllUsers(page, limit);
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() user: { name: string; email: string }) {
        return this.usersService.createUser(user);
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() user: { name?: string; email?: string }) {
        return this.usersService.updateUser(id, user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(id);
    }
}
