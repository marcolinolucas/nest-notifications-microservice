import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@infra/http/http.module';
import { DatabaseModule } from '@infra/database/database.module';
import { MessagingModule } from '@infra/messaging/messaging.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    DatabaseModule,
    MessagingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
