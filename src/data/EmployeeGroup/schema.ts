import ISchema from "../ISchema";
const type = `
    type EmployeeGroup {
        id: Int!
        Name:String!
		CheckInTime:DateTime
		CheckOutTime:DateTime
		deletedAt:DateTime
    }
`;

const query = `
    EmployeeGroups:[EmployeeGroup]
`;
const mutation = ``;
const schema: ISchema = {
  type,
  query,
  mutation
};
export default schema;
