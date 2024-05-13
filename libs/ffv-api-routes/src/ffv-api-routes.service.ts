import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class FfvApiRoutesService {
  async getEndpointFn(path: string, method: string) {
    const exports = await require(`/src/${path}/routes`);

    if (!exports[method.toUpperCase()]) {
      throw new NotFoundException(`Cannot ${method} /${path}`);
    }

    const fn = exports[method.toUpperCase()];

    return fn ? fn : undefined;
  }
}
