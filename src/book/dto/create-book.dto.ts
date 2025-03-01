import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Category } from '../schemas/book.schema';
import { User } from 'src/auth/schemas/user.schema';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty({ message: 'Kategoriyani toldiring' })
  @IsEnum(Category, { message: 'Mavjud bolmagan kategoriyani kiritdingiz' })
  readonly category: Category;

  @IsEmpty({
    message: 'You cannot pass user id',
  })
  readonly user: User;
}
