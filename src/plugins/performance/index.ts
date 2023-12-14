import calculateLHR from './lhr';
import showTable from './show';

export default async (name, options, command) => {
  if (options.debug) {
    console.error('Called %s with options %o', command.name(), options);
  }

  let collected = [
    ['page url', 'perf score', 'lcp', 'fid', 'cls', 'ttfb'],
  ] as any;

  const item = await calculateLHR(name);
  collected.push(item);
  showTable(collected);
  // 结束之后退出进程
  process.exit(0);
};
