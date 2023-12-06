import * as table from "table"

function showTable(data) {
  let config;

  // Creating column width configuration
  config = {
    columns: {
      0: {
        // width: 10   // Column 0 of width 1
      },
      1: {
        width: 12  // Column 1 of width 20
      },
      2: {
        width: 5   // Column 2 of width 5
      }
    }
  };
  let x = table.table(data, config);
  console.log(x)

}

export default showTable