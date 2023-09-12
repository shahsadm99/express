import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column
  name!: string;

  @Column
  description!: string;

  @Column
  price!: number;
}
