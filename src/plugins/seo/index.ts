import tpl from './tpl';
import ejs from 'ejs';
import * as fse from 'fs-extra';
import precheck from './precheck';
import afterCheck from './aftercheck';

async function collectData() {
  return [];
}

export default async (_name?, _options?, _command?) => {
  async function sitemapHandler() {
    // 采集获取的url
    const urls = await collectData();
    const content = ejs.render(tpl, { urls });
    // 生成map 子文件
    fse.writeFileSync(`${__dirname}/tar/static_sitemap.xml`, content, {
      flag: 'w',
    });
  }

  function preCheckHandler() {
    if (precheck) {
      precheck(_options);
    }
  }

  function afterCheckHandler() {
    if (afterCheck) {
      afterCheck(_name);
    }
  }

  try {
    if (_options.aftercheck) {
      afterCheckHandler();
    }
    if (_options.precheck) {
      preCheckHandler();
    }
    if (_options.sitemap) {
      sitemapHandler();
    }
  } catch (error) {
    console.error(error);
  }
};
