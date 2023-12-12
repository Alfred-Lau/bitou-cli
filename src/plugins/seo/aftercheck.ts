import shell from 'shelljs';
import cheerio from 'cheerio';

export default function afterCheck(params) {
  // 1. 检查给定url的页面的爬虫视角
  if (typeof params === 'string') {
    const content = shell.exec(`curl ${params} -H 'User-Agent: baiduspider'`, {
      silent: true,
    });

    const errors = []

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
    console.log('tdk 检查中... ...')
    const title = $('title').text()
    const description = $('meta[name="description"]').attr('content')
    const keywords = $('meta[name="keywords"]').attr('content')
    if (!title) {
      errors.push('title 不存在')
    }
    if (!description) {
      errors.push('description 不存在')
    }
    if (!keywords) {
      errors.push('keywords 不存在')
    }
    console.log('title:', title)
    console.log('description:', description)
    console.log('keywords:', keywords)
    console.log('tdk 检查结束... ...', `\n\n\n`)

    // 3. check 内链的问题
    // 3.1 a 标签的问题
    const a_length = $('a').length
    console.log('包含内链 a:', a_length)
    // 4. check 外链的问题
    //  5. check img 的问题
    const imgs = $('img')
    const img_length = imgs.length
    console.log('包含图片:', img_length)

    const img_errors = []
    imgs.each((index, element) => {
      const src = $(element).attr('src')
      const alt = $(element).attr('alt')
      if (!src) {
        img_errors.push('img src 不存在')
      } else if (!alt) {
        img_errors.push('img alt 不存在')
      }
    })
  }
}
