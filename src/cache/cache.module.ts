import { Global, Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import KeyvRedis from '@keyv/redis';
import Keyv from 'keyv';
import { ShopCacheService } from './shop-cache.service';

@Global()
@Module({
  imports: [
    CacheModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        stores: [
          new Keyv({
            store: new KeyvRedis(config.getOrThrow<string>('REDIS_URL')),
            namespace: 'stocksense',
          }),
        ],
      }),
    }),
  ],
  providers: [ShopCacheService],
  exports: [ShopCacheService],
})
export class AppCacheModule {}
