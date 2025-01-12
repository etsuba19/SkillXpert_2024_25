<<<<<<< HEAD
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { updateCourseNameDto } from './UpdateCourseName.dto';

export class EnrollCourseDto extends updateCourseNameDto {
  @IsNumber()
  @Type(() => Number)
  courseId: number;
}
=======
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { updateCourseNameDto } from './UpdateCourseName.dto';

export class EnrollCourseDto extends updateCourseNameDto {
  @IsNumber()
  @Type(() => Number)
  courseId: number;
}
>>>>>>> c3eb6f688668f3d5bed6b84d1d919a0c420d1d4a
