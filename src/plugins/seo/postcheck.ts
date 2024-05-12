import shell from 'shelljs';
import cheerio from 'cheerio';
import ora from 'ora';
import { tasks } from './tools';
import { info } from '@/utils/log';
import summary from './summary';

function reduceTasks(tasks: any[], initialValue?: any) {
  return tasks.reduce((prev, current) => {
    return prev.then(() => {
      info(`${current.title} 开始运行... ...`);
      current.handler(initialValue)
    });
  }, Promise.resolve());
}

export default function postcheck(params) {

  if (typeof params !== 'string') return

  const spinner = ora(`检查中... ...\n\n`).start();
  spinner.text = '正在运行分析工具……'
  const content = shell.exec(`curl ${params} -H 'User-Agent: baiduspider'`, {
    silent: true,
  });
  const $ = cheerio.load(content.stdout);
  const reducedTasks = reduceTasks(tasks, $);

  try {
    reducedTasks.then(async (info: string[]) => {
      spinner.succeed(`\n\n检查完成... ...`);
      await summary(info);
    })
  } catch (e) {
    spinner.fail('检查失败... ...');
  }

}
