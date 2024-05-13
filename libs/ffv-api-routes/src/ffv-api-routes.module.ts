import { Module } from '@nestjs/common';
import { FfvApiRoutesService } from './ffv-api-routes.service';

@Module({
  providers: [FfvApiRoutesService],
  exports: [FfvApiRoutesService],
})
export class FfvApiRoutesModule {}
