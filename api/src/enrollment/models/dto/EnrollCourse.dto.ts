import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { updateCourseNameDto } from './UpdateCourseName.dto';

export class EnrollCourseDto extends updateCourseNameDto {
  @IsNumber()
  @Type(() => Number)
  courseId: number;
}
