import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './typeorm/entities/User';
import { Profile } from './typeorm/entities/Profile';
import { Post } from './typeorm/entities/Post';
import { CompanyModule } from './company/company.module';
import { Employee } from './typeorm/entities/Company/Employee';
import { Company } from './typeorm/entities/Company/Company';
import { Designation } from './typeorm/entities/Company/Designation';
import { TrelloModule } from './trello/trello.module';
import { TrelloUser } from './typeorm/entities/trello/TrelloUser';
import { AuthModule } from './auth/auth.module';
import { Product } from './typeorm/entities/trello/Product';
import { Team } from './typeorm/entities/trello/Team';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'MySql@123',
    database: 'nestjs_mysql_tutorial',
    entities: [User, Profile, Post, Company, Employee, Designation, TrelloUser, Product, Team],
    synchronize: true,
  }), UsersModule, CompanyModule, TrelloModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
