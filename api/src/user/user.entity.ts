<<<<<<< HEAD
import { Enrollment } from '../enrollment/models/enrollement.entity';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @OneToMany(() => Enrollment, (enrollment) => enrollment.user)
    enrollments: Enrollment[]
=======
import { Enrollment } from '../enrollment/models/enrollement.entity';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @OneToMany(() => Enrollment, (enrollment) => enrollment.user)
    enrollments: Enrollment[]
>>>>>>> c3eb6f688668f3d5bed6b84d1d919a0c420d1d4a
}