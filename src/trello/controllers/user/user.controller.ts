import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateTrelloUserDto } from 'src/trello/dtos/CreateTrelloUser.dto';
import { UpdateTrelloUserDto } from 'src/trello/dtos/UpdateTrelloUser.dto';
import { UserService } from 'src/trello/services/user/user.service';

@Controller('trello_user')
export class UserController {
    constructor(private trelloUserService: UserService) {}

    @Get() 
    async getUserList() {
        const users =  await this.trelloUserService.fetchUsers();
        return users;
    }

    @Post()
    createTrelloUserController(@Body() createTrelloUserDto: CreateTrelloUserDto) {
        return this.trelloUserService.createTrelloUser(createTrelloUserDto);
    }

    @Post()
    updateTrelloUser(@Body() updateTrelloUserDto: UpdateTrelloUserDto) {
        const {id, ...updateUserDetail} = updateTrelloUserDto;
        return this.trelloUserService.updateUser(id, updateUserDetail);
    }

    @Post(':id')
    deleteTrelloUser(@Param('id', ParseIntPipe) id: number) {
        return this.deleteTrelloUser(id);
    }

    @Post(':id')
    deactivateTrelloUser(@Param('id', ParseIntPipe) id: number) {
        return this.deactivateTrelloUser(id);
    }
}
