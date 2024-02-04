import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrelloUser } from 'src/typeorm/entities/trello/TrelloUser';
import { AuthMiddleware } from './middlewares/auth/auth.middleware';
import { ProductController } from './controllers/product/product.controller';
import { ProductService } from './services/product/product.service';
import { EpicController } from './controllers/epic/epic.controller';
import { EpicService } from './services/epic/epic.service';
import { SprintController } from './controllers/sprint/sprint.controller';
import { SprintService } from './services/sprint/sprint.service';
import { StoryController } from './controllers/story/story.controller';
import { StoryService } from './services/story/story.service';
import { TeamController } from './controllers/team/team.controller';
import { TeamService } from './services/team/team.service';
import { SubTaskController } from './controllers/sub-task/sub-task.controller';
import { SubTaskService } from './services/sub-task/sub-task.service';
import { Product } from 'src/typeorm/entities/trello/Product';
import { Team } from 'src/typeorm/entities/trello/Team';

@Module({
  imports: [TypeOrmModule.forFeature([TrelloUser, Product, Team])],
  controllers: [UserController, ProductController, EpicController, SprintController, StoryController, TeamController, SubTaskController],
  providers: [UserService, ProductService, EpicService, SprintService, StoryService, TeamService, SubTaskService]
})
export class TrelloModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(FakeAuthCheckMiddleware).forRoutes(UsersController); >>  applied to all the methods within "users" controller

    consumer
      .apply(AuthMiddleware).forRoutes(UserController);

  }
}
