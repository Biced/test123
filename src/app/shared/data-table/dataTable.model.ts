
export class TableConfig {
  column = '';
  title = '';
  template?: any;
  sort: boolean;
}
export class DataTableConfig<T> {
  tableConfig: TableConfig[] = [];
  dataSource: Array<T> = [];
  sortKey: string;
  sortOrder: number;
  totalItem = 0;
  pageSize = 10;
  page = 0;
  pageSizeOptions?: number[];
}
