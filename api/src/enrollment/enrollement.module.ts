<<<<<<< HEAD
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from "../course/models/course.entity";
import { User } from "../user/models/user.entity";
import { EnrollentController } from "./enrollement.controller";
import { EnrollmentService } from "./enrollemet.service";
import { Enrollment } from "./models/enrollement.entity";


@Module({
    imports: [
      TypeOrmModule.forFeature([User, Course, Enrollment]),
          
    ],
    providers: [EnrollmentService],
    controllers: [EnrollentController],    
  })
  export class EnrollmentModule {}
=======
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from "../course/models/course.entity";
import { User } from "../user/models/user.entity";
import { EnrollentController } from "./enrollement.controller";
import { EnrollmentService } from "./enrollemet.service";
import { Enrollment } from "./models/enrollement.entity";


@Module({
    imports: [
      TypeOrmModule.forFeature([User, Course, Enrollment]),
          
    ],
    providers: [EnrollmentService],
    controllers: [EnrollentController],    
  })
  export class EnrollmentModule {}
>>>>>>> c3eb6f688668f3d5bed6b84d1d919a0c420d1d4a
  