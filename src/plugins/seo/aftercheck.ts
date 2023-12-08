import shell from 'shelljs';
import cheerio from 'cheerio';

export default function afterCheck(params) {
  // 1. 检查给定url的页面的爬虫视角
  if (typeof params === 'string') {
    const content = shell.exec(`curl ${params} -H 'User-Agent: baiduspider'`, {
      silent: true,
    });

    const $ = cheerio.load(content.stdout);
    // 1. check hn 的问题
    const h1_length = $('h1').length
    console.log('h1:', h1_length, $('h1').text())

    $('h2').each((index, element) => {
      const text = $(element).text()
      console.log('h2:', text)
    })

    for (let i = 2; i < 7; i++) {
      const hn = `h${i}`
      $(hn).each((index, element) => {
        const text = $(element).text()
        console.log(hn, text)
      })
    }
    // 2. check tdk 的问题
    // 3. check 内链的问题
    // 4. check 外链的问题
    //  5. check img 的问题
  }
}
