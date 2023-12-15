import shell from 'shelljs';
import fse from 'fs-extra';
import { isFile, isScript, isUrl } from '@/utils/type';

function handleBatchUrls(urls: string[]) {
  urls.forEach(url => {
    shell.exec(`curl -I ${url} | grep "HTTP/1.1 301" `, { silent: true }, (code, stdout, stderr) => {
      if (code !== 0) {
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
      } else {
        console.log(`statusCode for ${url}:`, stdout);
      }
    }
    )
  })
}


function _handleUrl(target: string) {
  shell.exec(`curl -I ${target} | grep "HTTP/1.1 301" `, { silent: true }, (code, stdout, stderr) => {
    if (code !== 0) {
      console.log('Exit code:', code);
      console.log('Program output:', stdout);
      console.log('Program stderr:', stderr);
    } else {
      console.log(`statusCode for ${target}:`, stdout);
    }
  }
  )
}


export function _handleFile(target: string) {
  // 处理文件
  const content = fse.readFileSync(target, 'utf-8')
  const urls = content.split('\n').filter(item => item)
  handleBatchUrls(urls)
}

export function _handleScript(target: string) {
  // 针对脚本，直接执行
  const code = fse.readFileSync(target, 'utf-8')// 必须是一个自执行的函数
  try {
    if (code) {
      // @ ts-ignore
      const result = eval(code) as string[]
      handleBatchUrls(result)
    }
  } catch (error) {

  }
}

export default function checkStatusCode301(name: string) {
  if (isUrl(name)) {
    _handleUrl(name)
    return
  }

  if (isScript(name)) {
    _handleScript(name)
    return
  }

  if (isFile(name)) {
    _handleFile(name)
    return
  }

}