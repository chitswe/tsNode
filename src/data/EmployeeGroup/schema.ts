import ISchema from "../ISchema";
const type = `
    type EmployeeGroup {
        id: Int!
        Name:String!
		CheckInTime:DateTime
		CheckOutTime:DateTime
		deletedAt:DateTime
    }
    type EmployeeGroups{
        list:[EmployeeGroup]
        pagination:pagination
    }
`;
const query = `
    EmployeeGroups(criteria:criteria!):EmployeeGroups
`;
const mutation = `
`;
const schema: ISchema = {
  type,
  query,
  mutation
};
export default schema;
