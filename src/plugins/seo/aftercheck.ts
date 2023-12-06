import shell from 'shelljs'


export default function afterCheck(params) {
  // 1. 检查给定url的页面的爬虫视角
  if (typeof params === 'string') {
    // curl https://www.oceanbase.com/demo  -H 'User-Agent: baiduspider'
    const content = shell.exec(`curl ${params} -H 'User-Agent: baiduspider'`)
    console.log('content', content.stdout)
  }
}