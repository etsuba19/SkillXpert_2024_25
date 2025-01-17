<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from '../course/models/course.entity';
import { User } from '../user/models/user.entity';
import { Repository } from 'typeorm';
import { Enrollment } from './models/enrollement.entity';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Course)
    private courseRepository: Repository<Course>,

    @InjectRepository(Enrollment)
    private enrollmentRepository: Repository<Enrollment>,
  ) {}

  async enroll(userId: number, courseId: number, courseName: string) {
    const course = await this.courseRepository.findOne({ id: courseId });
    const user = await this.userRepository.findOne({ id: userId });

    if (course && user) {
      const enrollment = this.enrollmentRepository.create({ courseName });
      enrollment.course = course;
      enrollment.user = user;

      return await this.enrollmentRepository.save(enrollment);
    }
    return false;
  }

  async getEnrollment(userId: number, courseId: number) {
    const enrollment = await this.enrollmentRepository.findOne({
      courseId,
      userId,
    });
    return enrollment;
  }

  async getUserEnrollments(userId: number) {
    const enrollments = await this.enrollmentRepository.find({ userId });

    if (enrollments) {
      return enrollments;
    }
    return false;
  }

  async updateCourseName(userId: number, courseId: number, courseName: string) {
    const enrollment = await this.enrollmentRepository.findOne({
      courseId,
      userId,
    });

    if (enrollment) {
      enrollment.courseName = courseName;
      return await this.enrollmentRepository.save(enrollment);
    }
  }

  async unenroll(userId: number, courseId: number) {
    if (await this.enrollmentRepository.findOne({ courseId, userId })) {
      return await this.enrollmentRepository.delete({ courseId, userId });
    }
    return false;
  }
}
=======
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from '../course/models/course.entity';
import { User } from '../user/models/user.entity';
import { Repository } from 'typeorm';
import { Enrollment } from './models/enrollement.entity';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Course)
    private courseRepository: Repository<Course>,

    @InjectRepository(Enrollment)
    private enrollmentRepository: Repository<Enrollment>,
  ) {}

  async enroll(userId: number, courseId: number, courseName: string) {
    const course = await this.courseRepository.findOne({ id: courseId });
    const user = await this.userRepository.findOne({ id: userId });

    if (course && user) {
      const enrollment = this.enrollmentRepository.create({ courseName });
      enrollment.course = course;
      enrollment.user = user;

      return await this.enrollmentRepository.save(enrollment);
    }
    return false;
  }

  async getEnrollment(userId: number, courseId: number) {
    const enrollment = await this.enrollmentRepository.findOne({
      courseId,
      userId,
    });
    return enrollment;
  }

  async getUserEnrollments(userId: number) {
    const enrollments = await this.enrollmentRepository.find({ userId });

    if (enrollments) {
      return enrollments;
    }
    return false;
  }

  async updateCourseName(userId: number, courseId: number, courseName: string) {
    const enrollment = await this.enrollmentRepository.findOne({
      courseId,
      userId,
    });

    if (enrollment) {
      enrollment.courseName = courseName;
      return await this.enrollmentRepository.save(enrollment);
    }
  }

  async unenroll(userId: number, courseId: number) {
    if (await this.enrollmentRepository.findOne({ courseId, userId })) {
      return await this.enrollmentRepository.delete({ courseId, userId });
    }
    return false;
  }
}
>>>>>>> c3eb6f688668f3d5bed6b84d1d919a0c420d1d4a
