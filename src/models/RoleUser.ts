import { Model, DataTypes } from "sequelize";
import sequelize from '../config/db.config';


export class RoleUser extends Model {
  public id!: number;
  public user_id!: number;
  public role_id!: number;
  public is_active!: boolean;
}

export interface RoleUserI {
    id?: number;
    user_id: number;
    role_id: number;
    is_active: boolean;
  }
  
RoleUser.init(
  {
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    tableName: "role_users",
    sequelize: sequelize,
    timestamps: false
  }
);

