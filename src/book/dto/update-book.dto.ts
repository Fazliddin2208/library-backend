import { IsEmpty, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from '../schemas/book.schema';
import { User } from 'src/auth/schemas/user.schema';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly author: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsEnum(Category, { message: 'Mavjud bolmagan kategoriyani kiritdingiz' })
  readonly category: Category;

  @IsEmpty({
    message: 'You cannot pass user id',
  })
  readonly user: User;
}
