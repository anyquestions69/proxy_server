import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { AppService } from './app.service';
import { ProxyServerMiddleware } from './proxy/proxy.server.middleware';
import { ProxyStaticMiddleware } from './proxy/proxy.static.middleware';

@Module({
  imports: [],
  controllers: [],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ProxyServerMiddleware)
      .forRoutes({ path: 'v1/api/*', method: RequestMethod.ALL });

    consumer
      .apply(ProxyStaticMiddleware)
      .forRoutes({ path: 'v1/static/*', method: RequestMethod.ALL });

  }
}