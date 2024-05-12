export default (name, options, command) => {
  if (options.debug) {
    console.error('Called %s with options %o', options);
  }
  const title = options.title ? `${options.title} ` : '';
  console.log(`Thank-you ${title}${name}， `);

}