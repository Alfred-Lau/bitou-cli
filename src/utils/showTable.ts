import table, { TableUserConfig } from 'table';

function showTable(data, config?: TableUserConfig) {
  let x = table.table(data, config);
  console.log(x);
}

export default showTable;
