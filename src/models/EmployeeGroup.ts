import { Table, Column, Model } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
@Table({ paranoid: true, timestamps: true }) // timestamps: true is required if paranoid: true
/**
 * Represent EmployeeGroup model.(Department)
 */
class EmployeeGroup extends Model<EmployeeGroup> {
    /**
     * Name of employee group
     */
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Name is required."
      }
    }
  })
  Name: string;
  /**
   * Check in time for employee group. If check in time is specified, global check in time will be override for every employee under this group.
   */
  @Column(DataType.DATE) CheckInTime?: Date;
  /**
   * Check out time for employee group. If check out time is specified, global check out time will be override for every employee under this group. 
   */
  @Column(DataType.DATE) CheckOutTime?: Date;
}

export default EmployeeGroup;