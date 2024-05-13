import { Injectable, NestMiddleware } from '@nestjs/common';
import * as fs from 'fs';
import { FfvApiRoutesService } from './ffv-api-routes.service';
import { Request, Response } from 'express';
import { CustomEndpoint } from './types/custom-endpoint';

@Injectable()
export class FfvApiRoutesMiddleware implements NestMiddleware {
  constructor(private readonly coreService: FfvApiRoutesService) {}

  async use(request: Request, response: Response, next: () => void) {
    const { path, method, query, body, cookies, headers, params } = request;

    const file_exists = fs.existsSync(`./src/${path}/routes.ts`);

    if (!file_exists) {
      next();
      return;
    }

    const endpoint_fn: CustomEndpoint = await this.coreService.getEndpointFn(
      path.slice(1),
      method.toUpperCase(),
    );

    response.send(
      endpoint_fn({
        query,
        body,
        cookies,
        headers,
        params,
        request,
        response,
      }),
    );
  }
}
