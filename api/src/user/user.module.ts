<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Course } from '../course/models/course.entity';

import { Enrollment } from '../enrollment/models/enrollement.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Course, Enrollment]),
    AuthModule
  ],
  providers: [UserService],
  controllers: [UserController],  
})
export class UserModule {}
=======
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Course } from '../course/models/course.entity';

import { Enrollment } from '../enrollment/models/enrollement.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Course, Enrollment]),
    AuthModule
  ],
  providers: [UserService],
  controllers: [UserController],  
})
export class UserModule {}
>>>>>>> c3eb6f688668f3d5bed6b84d1d919a0c420d1d4a
