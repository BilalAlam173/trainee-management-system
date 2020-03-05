import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './modules/admin/admin.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://bilal:test123@ds241298.mlab.com:41298/tms'),
    AdminModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
