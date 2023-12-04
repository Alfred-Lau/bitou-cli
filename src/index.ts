import { Command } from 'commander'
import diagnose from './plugins/diagnose'
import performance from './plugins/performance'
import seo from './plugins/seo'

const program = new Command();

const commands = [
  {
    name: 'init',
    description: 'init a page base on template',
    option: [['--type', 'template type']],
    argument: ['<name>', 'page name'],
    action: diagnose
  },
  // 项目线上问题巡检，线下问题排查
  {
    name: 'diagnose',
    description: 'diagnose a project',
    option: [['--seo', 'diagnose mode']],
    argument: ['<project>', 'umi project'],
    action: diagnose
  },
  // 测试页面SEO
  {
    name: 'seo',
    description: 'check a project',
    option: [['--sitemap', 'check mode', ''], ['--offline', 'check code ', ''], ['--online', 'check rendered content ', '']],
    argument: ['<project>', 'umi project'],
    action: seo
  },
  // 测试页面性能
  {
    name: 'performance',
    description: 'performance a project',
    option: [['--vital', 'performance mode']],
    argument: ['url', 'target page url'],
    action: performance
  },
]


export default function main() {
  program
    .name('bitou')
    .description('CLI For bitou architecture')
    .version('0.1.0');

  // 子命令：诊断

  commands.forEach(command => {
    const p = program
      .command(command.name)
      .description(command.description)

    if (Array.isArray(command.option)) {
      for (let i = 0; i < command.option.length; i++) {
        const option = command.option[i] as string[];
        p.option(option[0], option[1])
      }
    } else {
      p.option(command.option[0], command.option[1])
    }


    p.argument(command.argument[0], command.argument[1])
      .action(command.action)
  })

  program.parse();

}


