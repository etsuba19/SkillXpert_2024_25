import { Type } from 'class-transformer';
import { IsDate, IsString, MinDate } from 'class-validator';

export class updateCourseNameDto{
  @IsString()
  courseName: string;
}
