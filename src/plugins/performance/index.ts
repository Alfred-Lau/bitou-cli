import calculateLHR from "./lhr";
import showTable from "@/utils/showTable";

export default async (name, options, command) => {

  if (options.debug) {
    console.error('Called %s with options %o', command.name(), options);
  }

  let collected = [
    ["page url", "perf score", "lcp", "fid", "cls", "ttfb"]
  ] as any

  const item = await calculateLHR(name)
  collected.push(item)
  const config = {
    columns: {
      0: {
        // width: 10   // Column 0 of width 1
      },
      1: {
        width: 12, // Column 1 of width 20
      },
      2: {
        width: 5, // Column 2 of width 5
      },
    },
  };
  showTable(collected, config)
  process.exit(0)
}