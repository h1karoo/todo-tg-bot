import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppUpdate } from './app.update';
import { sessionMiddleware } from './middleware/session.middleware';;


@Module({
  imports: [
    AppUpdate,
    TelegrafModule.forRoot({
      token: '5832586894:AAHpYYOpUJGGO6o1OLn2xAFxZVIiTC9S4zI',
      middlewares: [sessionMiddleware],
      include: [],
    }),
  ],
})
export class AppModule {}
