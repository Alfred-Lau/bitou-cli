import download from "download-git-repo";
import { log } from "util";

const templateMap = {
  "pnpm-rollup-ts-monorepo-cli-starter":
    "https://github.com/Alfred-Lau/pnpm-rollup-ts-monorepo-cli",
  "ts-npm-starter": "https://github.com/Alfred-Lau/ts-npm-starter",
  "ts-web-starter": "https://github.com/Alfred-Lau/ts-web-starter",
};

/* 参数一是要下载的仓库对应的远程地址
 * 参数二是下载后保存的目录路径，可以是相对路径或绝对路径。如果目录不存在，则会自动创建。这里使用用户执行
 * mycli create projectName 时输入的 projectName 值作为保存目录名
 * 参数三是下载选项，可以不传递，默认为 { clone: true }，表示使用 Git 命令进行克隆。如果设置为 { clone:
 * false }，则表示直接从 Git 仓库中下载。
 * 参数四是一个回调函数，
 */

export async function clone(
  templateType: "resp" | "next" | "canvas",
  project: string
) {
  try {
    download(`direct:${templateMap[templateType]}`, "main", (err) => {
      console.log(err);
    });
  } catch (error) {
    log(error);
  } finally {
    log("finally");
  }
}
