import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async handleCreateUserRequest(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.username = createUserDto.username;
        user.password = createUserDto.password;
        if (createUserDto.isValid) user.isValid = createUserDto.isValid;
        return await this.userRepository.save(user);

    }


    async handleGetUsersRequest(): Promise<User[]> {
        return await this.userRepository.find();

    }

    async getUserById(id: string): Promise<User> {
        return await this.userRepository.findOneOrFail(id)
    }


    async deleteUser(id: string): Promise<User> {
        const user = await this.userRepository.findOneOrFail(id,);
        const status = await this.userRepository.delete(id);
        return user;
    }





    async findUserByUserName(username: string): Promise<User> {
        return await this.userRepository.findOne({
            where: { username: username },
        })
    }




}
