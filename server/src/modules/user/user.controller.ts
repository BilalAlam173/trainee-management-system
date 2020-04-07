import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { USER_ROLES } from 'src/globals';
import * as jwt from 'jsonwebtoken';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @InjectModel('User') private readonly userModel: Model,
  ) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return req.user;
  }
  // async login(
  //   @Body()
  //   credentials: {
  //     username: string;
  //     password: string;
  //     role: USER_ROLES;
  //   },
  // ): Promise<any> {
  //   const user: any = await this.userModel.findOne({
  //     username: credentials.username,
  //     role: credentials.role,
  //   });
  //   if (user) {
  //     try {
  //       await user.comparePassword(credentials.password);
  //       return {
  //         token: jwt.sign({ user }, process.env.SECRET_TOKEN),
  //         role: credentials.role,
  //       };
  //     } catch (e) {
  //       throw new HttpException('Incorrect password', HttpStatus.FORBIDDEN);
  //     }

  //     user.comparePassword(credentials.password, (err, isMatch) => {});
  //   } else {
  //     throw new HttpException(
  //       'No user associated with provided username',
  //       HttpStatus.FORBIDDEN,
  //     );
  //   }
  // }

  @Post('create')
  async create(
    @Body() user: { username: string; password: string; role: USER_ROLES },
  ): Promise<any> {
    try {
      const createdUser = new this.userModel(user);
      return createdUser.save();
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('test')
  async test() {
    return 'test';
  }
}
