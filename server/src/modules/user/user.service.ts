import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { USER_ROLES } from 'src/globals';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model) {}
  async getByUsername(username: string) {
    return this.userModel.findOne({ username });
  }
}
