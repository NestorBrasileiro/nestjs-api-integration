import {
  HttpModuleOptions,
  HttpModuleOptionsFactory,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
  createHttpOptions(): HttpModuleOptions | Promise<HttpModuleOptions> {
    return {
      timeout: 6000,
      maxRedirects: 6,
      baseURL: process.env.API_URL,
    };
  }
}
