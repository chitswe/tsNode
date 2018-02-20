import { QueryCriteria, QueryPaginationCriteria, PaginationResult } from "./schema";
import { IFindOptions, Model } from "sequelize-typescript";
const PaginationHelper = {
  findOptions: <T extends Model<T>>(
    criteria: QueryCriteria
  ): IFindOptions<T> => {
    const { pagination: { page, pageSize }, orderBy } = criteria;
    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    const options: IFindOptions<T> = {
      limit,
      offset,
      order: orderBy
    };
    return options;
  },
  getPagination: (
    paginationCriteria: QueryPaginationCriteria,
    count: number
  ): PaginationResult => {
    const { page, pageSize } = paginationCriteria;
    const hasMore = page * pageSize < count;
    let totalPages = count ? count / pageSize : 0;
    totalPages = parseInt(totalPages.toString());
    if (totalPages < 1) totalPages = 0;
    if (count % pageSize > 0) totalPages++;
    return {
      page: page,
      pageSize: pageSize,
      totalRows: count,
      totalPages,
      hasMore
    };
  }
};

export default PaginationHelper;