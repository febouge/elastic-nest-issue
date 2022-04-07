import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class AppService {
  constructor(
    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
