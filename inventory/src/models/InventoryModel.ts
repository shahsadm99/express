import { Model, Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Inventory', // Specify the actual table name in your database
  timestamps: false,     // Disable timestamps
})
export class Inventory extends Model {
  @Column
  name!: string;

  @Column
  description!: string;

  @Column
  price!: number;
}
