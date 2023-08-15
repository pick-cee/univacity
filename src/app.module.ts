import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgramModule } from './program/program.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),
  MongooseModule.forRootAsync({
    useFactory: async(config: ConfigService) => {
      const uri = config.get('MONGODB_URI')
      return {
        uri: uri,
      }
    },
    inject: [ConfigService]
  }),
  ProgramModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
