import { clone } from '@/utils/git';
import inquirer from 'inquirer';

export default async (name, options, command) => {
  if (options.debug) {
    console.error('Called %s with options %o', options);
  }
  const answer = await inquirer.prompt([{ // 数组中每一个对象表示一个问题
    type: 'list', // 问题类型，list表示选择列表
    name: 'templateType', // 用于接收答案的键值
    choices: ['resp', 'next', 'canvas'], // 选项
    message: '请选择你所使用的项目模板' // 问题
  }])

  // 下载项目
  await clone(answer.templateType, name)


}