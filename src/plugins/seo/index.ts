import ejs from 'ejs';
import fse from 'fs-extra';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import checkStatusCode301 from './functions/301';
import checkStatusCode404 from './functions/404';
import postcheck from './postcheck';
import precheck from './precheck';
import tpl from './tpl';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
      flag: "w",
    });
  }

  function preCheckHandler() {
    if (precheck) {
      precheck(_options);
    }
  }

  function postcheckHandler() {
    if (postcheck) {
      postcheck(_name);
    }
  }

  try {
    if (_options.postcheck) {
      postcheckHandler();
    }
    if (_options.precheck) {
      preCheckHandler();
    }
    if (_options.sitemap) {
      sitemapHandler();
    }
    if (_options.checkStatusCode301) {
      checkStatusCode301(_name);
    }
    if (_options.checkStatusCode404) {
      checkStatusCode404(_name);
    }
  } catch (error) {
    console.error(error);
  }
};
