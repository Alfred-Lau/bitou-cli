import chalk from 'chalk'
export const info = (...args) => {
  console.log(chalk.yellow(args.join(' ')))
}