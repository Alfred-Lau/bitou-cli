import inquirer from "inquirer";

import { clone } from "@/utils/git";

export default async (name, options, command) => {
  if (options.debug) {
    console.error("Called %s with options %o", options);
  }
  const answer = await inquirer.prompt([
    {
      // 数组中每一个对象表示一个问题
      type: "list", // 问题类型，list表示选择列表
      name: "templateType", // 用于接收答案的键值
      choices: [
        "pnpm-rollup-ts-monorepo-cli-starter",
        "ts-npm-starter",
        "ts-web-starter",
      ], // 选项
      message: "请选择你所使用的项目模板", // 问题
    },
  ]);

  // 1.下载项目
  await clone(answer.templateType, name);
  // 2. 添加渲染 ejs 模板功能
  // 3. 切出迭代分支
  // 4. 启动项目和vscode 编辑器
};
