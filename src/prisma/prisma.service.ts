import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://user:password@localhost:5434/nestjs?schema=public',
        },
      },
    });
  }
  async onModuleInit() {
    console.log('onModuleInit');
    this.$connect;
  }
  async onModuleDestroy() {
    console.log('onModuleDestroy');
    this.$disconnect;
  }
}
