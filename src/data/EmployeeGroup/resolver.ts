import EmployeeGroup from "../../models/EmployeeGroup";
import IResolver from "../IResolver";
import { QueryCriteria } from "../schema";
import sequelize from "../../sequelize";
import PaginationHelper from "../PaginationHelper";
const type = {};

const query = {
  EmployeeGroups: (
    _: any,
    params: { criteria: QueryCriteria },
    context: any
  ) => {
    const { criteria } = params;
    const options = PaginationHelper.findOptions<EmployeeGroup>(criteria);
    return EmployeeGroup.findAndCountAll(options).then(({rows, count}) => {
      const pagination = PaginationHelper.getPagination(criteria.pagination, count);
      return {
        list: rows,
        pagination
      };
    });
  }
};

const mutation = {
  // MutateEmployeeGroup: (_: any, params: any, context: any) => {
  //   const { input } = params;
  //   return sequelize.transaction(transaction => {
  //     return EmployeeGroup.findOrCreate({
  //       defaults: input,
  //       where: { id: input.id },
  //       transaction
  //     }).spread((instance, created) => instance);
  //   });
  // }
};
const resolver: IResolver = { type, query, mutation };
export default resolver;
