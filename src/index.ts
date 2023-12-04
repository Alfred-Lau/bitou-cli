import { Command } from 'commander'
import diagnose from './plugins/diagnose'
import check from './plugins/check'
import sync from './plugins/sync'
import test from './plugins/test'
import seo from './plugins/seo'

const program = new Command();

const commands = [
  {
    name: 'diagnose',
    description: 'diagnose a project',
    option: ['--seo', 'diagnose mode'],
    argument: ['<project>', 'bigfish project'],
    action: diagnose
  },
  {
    name: 'check',
    description: 'check a project',
    option: ['--seo', 'check mode'],
    argument: ['<project>', 'bigfish project'],
    action: check
  },
  {
    name: 'seo',
    description: 'check a project',
    option: ['--sitemap', 'check mode'],
    argument: ['<project>', 'bigfish project'],
    action: seo
  },
  {
    name: 'sync',
    description: 'sync a project',
    option: ['--seo', 'sync mode'],
    argument: ['<project>', 'bigfish project'],
    action: sync
  }, {
    name: 'test',
    description: 'test a project',
    option: ['--seo', 'test mode'],
    argument: ['<project>', 'bigfish project'],
    action: test
  },
]


export default function main() {
  program
    .name('ofx')
    .description('CLI For OceanBase FEX')
    .version('0.1.0');

  // 子命令：诊断

  commands.forEach(command => {
    program
      .command(command.name)
      .description(command.description)
      .option(command.option[0], command.option[1])
      .argument(command.argument[0], command.argument[1])
      .action(command.action)
  })

  program.parse();

}


