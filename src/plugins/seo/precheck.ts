export default function afterCheck(params) {
  console.log('后检相关事宜')
  // 1. 检查给定url的页面的爬虫视角
  if (typeof params === 'string') {
    console.log('检查给定url的页面的爬虫视角')
  }
}