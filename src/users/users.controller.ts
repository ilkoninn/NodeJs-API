import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/createUserDto';
import { UpdateUserDto } from './dtos/updateUserDto';
import { GetUserByIdDto } from './dtos/getUserByIdDto';
import { DeleteUserDto } from './dtos/deleteUserDto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    getAllUsers(@Query('page') page?: number, @Query('limit') limit?: number) {
        return this.usersService.getAllUsers(page, limit);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const dto = new GetUserByIdDto();
        dto.id = id;
        return this.usersService.getUserById(dto);
    }

    @Post()
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto);
    }

    @Patch()
    updateUser(@Body() dto: UpdateUserDto) {
        return this.usersService.updateUser(dto);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        const dto = new DeleteUserDto();
        dto.id = id;
        return this.usersService.deleteUser(dto);
    }
}
