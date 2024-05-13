import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FfvApiRoutesMiddleware, FfvApiRoutesModule } from 'ffv/ffv-api-routes';

@Module({
  imports: [FfvApiRoutesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FfvApiRoutesMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
