import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    @ApiOperation({ summary: 'Create User' })
    @ApiCreatedResponse({
        description: 'User has been succefully created ',
        type: User
    })
    //@UseGuards(JwtAuthGuard)
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.usersService.handleCreateUserRequest(createUserDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all Users' })
    @ApiResponse({ status: 200, description: 'Ok' })
    //@UseGuards(JwtAuthGuard)
    async getUsers() {
        return await this.usersService.handleGetUsersRequest();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get an User' })
    @ApiResponse({ status: 200, description: 'Ok' })
    @ApiResponse({ status: 404, description: 'cuold not find matching user id' })
    //@UseGuards(JwtAuthGuard)
    async getUser(@Param('id') id: string): Promise<User> {
        return await this.usersService.getUserById(id);
    }

    // @Patch(':id')
    // @ApiOperation({summary: 'Updated'})
    // @ApiResponse({status:200, description: 'Ok'})
    //@ApiResponse({status:404, description: 'cuold not find matching user id'})
    // async updateUser(@Param('id') id: string, @Body() createUserDto: CreateUserDto): Promise<User> {
    //   return await this.usersService.updateUserById(id,CreateUserDto);
    // }



    @Delete(':id')
    @ApiOperation({ summary: 'Delete an User' })
    @ApiResponse({ status: 200, description: 'Deleted' })
    @ApiResponse({ status: 404, description: 'could not find matching user id' })
    //@UseGuards(JwtAuthGuard)
    async deleteUser(@Param('id') id: string): Promise<User> {
        return await this.usersService.deleteUser(id);
    }
}
