import EmployeeGroup from "../../models/EmployeeGroup";
import IResolver from "../IResolver";
const type = {};

const query = {
  EmployeeGroups: (_: any, params: any, context: any) => {
    return EmployeeGroup.findAll({ paranoid: false });
  }
};

const mutation = {};
const resolver: IResolver = { type, query, mutation };
export default resolver;
