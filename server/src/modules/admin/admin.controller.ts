import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AdminService } from './admin.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from '@nestjs/common/interfaces/external/kafka-options.interface';


@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService, @InjectModel('Admin') private readonly adminModel: Model) { }

    @Post('login')
    async login(@Body() credentials: { username: string, password: string }): Promise<any> {

        const admin: any = await this.adminModel.findOne({ username: credentials.username })
        if (admin) {
            return admin.comparePassword(credentials.password, (err, isMatch) => {
                if (!isMatch) throw new HttpException('Incorrect password', HttpStatus.FORBIDDEN);
                return admin;
            });
        } else {
            throw new HttpException('No user associated with provided username', HttpStatus.FORBIDDEN);
        }
    }

    @Post('create')
    async create(@Body() admin: { username: string, password: string }): Promise<any> {
        try {
            const createdAdmin = new this.adminModel(admin);
            return createdAdmin.save();
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('test')
    async test() {
        const docs = await this.adminModel.find({});
        return docs;
    }
}
