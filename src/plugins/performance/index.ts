import calculateLHR from "./lhr";
import showTable from "@/utils/showTable";
import { openInBrowser } from '@/utils/browser';
import ora from 'ora'

export default async (name, options, command) => {

  if (options.debug) {
    console.error('Called %s with options %o', command.name(), options);
  }

  const spinner = ora('Calculating performance score').start()

  let collected = [
    ["page url", "perf score", "lcp", "cls", "ttfb"]
  ] as any

  const res = await calculateLHR(name)
  collected.push(res.metrics)
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
  spinner.succeed('Performance score calculated')
  showTable(collected, config)
  spinner.stop()
  if (options.open) {
    await openInBrowser(res.path)
  }
  process.exit(0)
}