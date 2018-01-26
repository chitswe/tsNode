import { Table, Column, Model, HasMany } from "sequelize-typescript";
@Table
export default class User extends Model<User> {
    @Column
    name ?: string;
    @Column
    state ?: boolean;
    @Column
    birth ?: Date;
    @Column
    card ?: number;
}