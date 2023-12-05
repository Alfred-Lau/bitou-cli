import tpl from './tpl'
import ejs from 'ejs'
import fse from 'fs-extra'
import moment from 'moment'
import news from './news.json'
import precheck from './precheck'
import afterCheck from './aftercheck'
// import * as path from 'path'

type RecordType = {
  url: string;
  priority: number
  lastmod: string
  changefreq: 'daily'
}

const WHITE_PAPER_URl = 'https://webapi.oceanbase.com/api/whitePaper/queryWhitePaper'

const fetchWhitePaper = async () => {
  let papers
  try {
    papers = await (await fetch(WHITE_PAPER_URl, { method: 'POST' })).json()
  } catch (error) {
    console.error(error)
  }
  return papers?.data || []
}

// const items = [{}]

async function collectData() {
  const urls = [] as RecordType[]
  // 1. 添加首页 1
  urls.push({
    url: 'https://www.oceanbase.com',
    priority: 1,
    lastmod: '2023-02-01',
    changefreq: "daily"
  })
  // 2. 添加专题聚合页 0.9
  urls.push({
    url: 'https://www.oceanbase.com/whitepaper',
    priority: 0.9,
    lastmod: '2023-02-01',
    changefreq: "daily"
  }, {
    url: 'https://www.oceanbase.com/knowledge-base',
    priority: 0.9,
    lastmod: '2023-02-01',
    changefreq: "daily"
  }, {
    url: 'https://www.oceanbase.com/news',
    priority: 0.9,
    lastmod: '2023-02-01',
    changefreq: "daily"
  }, {
    url: 'https://www.oceanbase.com/customer/home',
    priority: 0.9,
    lastmod: '2023-02-01',
    changefreq: "daily"
  })
  // 3. 添加专题页详情 0.8
  // 4. 添加白皮书详情 0.7
  const papers = await fetchWhitePaper()
  const papers_urls = [] as RecordType[]
  console.log('papers', papers);

  papers.forEach(paper => {
    papers_urls.push({
      url: `https://www.oceanbase.com/whitepaper/${paper.urlSuffix}`,
      priority: 0.7,
      lastmod: moment(paper.gmtModified).format('YYYY-MM-DD'),
      changefreq: "daily"
    })
  })
  // 5. 添加其他 0.6
  // 6. 添加动态页面
  const news_url = [] as RecordType[];
  news.topics.map((item) => {
    news_url.push({
      url: `https://www.oceanbase.com/news/${item.slug}`,
      priority: 0.7,
      lastmod: moment(item.gmtModify).format('YYYY-MM-DD'),
      changefreq: "daily"
    })
  }
  )
  urls.push(...news_url, ...papers_urls)
  return urls
}

export default async (_name?, _options?, _command?) => {

  async function sitemapHandler() {
    // 采集获取的url
    const urls = await collectData()
    const content = ejs.render(tpl, { urls })
    // 生成map 子文件
    fse.writeFile(`${__dirname}/tar/static_sitemap.xml`, content, { flag: 'w' })
  }

  function preCheckHandler() {
    if (precheck) {
      precheck(_options,)
    }
  }

  function afterCheckHandler() {
    if (afterCheck) {
      afterCheck(_name)
    }
  }

  try {
    if (_options.aftercheck) {
      afterCheckHandler()
    }
    if (_options.precheck) {
      preCheckHandler()
    }
    if (_options.sitemap) {
      sitemapHandler()
    }
  } catch (error) {
    console.error(error)
  }


}