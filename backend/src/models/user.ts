import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    ObjectIdColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from 'typeorm';
  import { ObjectId } from 'mongodb';
import { IsEmail } from 'class-validator';
  
  @Entity()
  export class User {
    @ObjectIdColumn()
    _id!: ObjectId;
  
    @Column({
      name: "name",
      nullable: false,
      type: "varchar",
      length: 150,
    })
    name?: string;
  
    @Column({
      name: "email",
      nullable: false,
      type: "varchar",
    })
    @IsEmail()
    email?: string | undefined;
  
    @Column({
        name: "password",
        nullable: false,
        type: "varchar",
    })
    password!: string;
  
    @Column({ type: 'int', nullable: true })
    age?: number;
  
    @Column({ type: 'float', nullable: true })
    weight?: number;
  
    @Column({ type: 'float', nullable: true })
    height?: number;
  
    @Column({ 
      name: "privilege",
      nullable: false,
      type: "int"
    })
    privilege!: number;
  
    @Column({
      name: "isActive",
      default: true,
      type: 'int',
    })
    isActive!: boolean;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date | null;
  
  
    constructor(userData?: Partial<User>) {
      if (userData) {
        Object.assign(this, userData);
      }
    }
  }