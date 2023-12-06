import showTable from "./show";


export default (name, options, command) => {

  if (options.debug) {
    console.error('Called %s with options %o', command.name(), options);
  }
  const title = options.title ? `${options.title} ` : '';
  console.log(`Thank-you ${title}${name}， `);


  const data = [
    ["page url", "perf score", "lcp", "fid", "cls", "ttfb"],
    [name, 10, "F", "D", 10, "F"],
    [name, "H", "I", "D", 10, "F"],
  ]
  showTable(data)

}