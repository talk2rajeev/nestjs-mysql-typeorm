import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entities/Post';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, CreateUserPostParams, CreateUserProfileParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>,
        @InjectRepository(Post) private postRepository: Repository<Post>,

    ) {}

    fetchUsers() {
        return this.userRepository.find({relations: ['profile', 'posts']});
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({
            ...userDetails,
            createdAt: new Date(),
        });
        console.log(newUser);
        return this.userRepository.save(newUser);
    }

    updateUser(id: number, updateUserDetails: CreateUserParams) {
        return this.userRepository.update({id}, {...updateUserDetails})
    }

    deleteUser(id: number) {
        return this.userRepository.delete({id});
    }

    async createUserProfile(id: number, createUserProfileDetails: CreateUserProfileParams) {
        const user = await this.userRepository.findOneBy({id});
        if(!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }
        const newprofile = this.profileRepository.create(createUserProfileDetails);
        const savedProfile = await this.profileRepository.save(newprofile);
        user.profile = savedProfile;
        return this.userRepository.save(user);
    }

    async createUserPost(id: number, createUserPostDetails: CreateUserPostParams) {
        const user = await this.userRepository.findOneBy({id});
        if(!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }
        const newPost = this.postRepository.create({
            ...createUserPostDetails,
            user,
        });
        return this.postRepository.save(newPost);
        
    }
}