import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

export enum Category {
  ADVENTURE = 'Adventure',
  CLASSIC = 'Classic',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
  HISTORY = 'History',
  HORROR = 'Horror',
}

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;

  @Prop()
  images?: object[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  user: User;
}

export const BookSchema = SchemaFactory.createForClass(Book);
