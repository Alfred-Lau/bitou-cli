import * as shell from 'shelljs';
import * as cheerio from 'cheerio';

export default function afterCheck(params) {
  // 1. 检查给定url的页面的爬虫视角
  if (typeof params === 'string') {
    const content = shell.exec(`curl ${params} -H 'User-Agent: baiduspider'`, {
      silent: true,
    });

    const $ = cheerio.load(content.stdout);
    // 1. check hn 的问题
    const h1_length = $('h1').length;
    const h2_length = $('h2').length;
    $('h2').each((index, element) => {
      console.log('index', index);
      const text = $(element).text();
      console.log('element', text);
    });

    console.log('h1_length', h1_length, h2_length);

    // 2. check tdk 的问题
    // 3. check 内链的问题
    // 4. check 外链的问题
    //  5. check img 的问题
  }
}
