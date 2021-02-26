import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);

    return 'This action is create a cat';
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
