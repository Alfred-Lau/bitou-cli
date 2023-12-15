import fse from 'fs-extra';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

async function calculateLHR(url: string) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'silent',
    output: 'html',
    onlyCategories: ['performance'],
    port: chrome.port,
  };
  const runnerResult = await lighthouse(url, options as any);

  // `.report` is the HTML report as a string

  if (runnerResult) {
    const url = runnerResult.lhr.requestedUrl;
    const score = runnerResult.lhr.categories.performance.score! * 100;

    const reportHtml = runnerResult.report;
    fse.writeFileSync('lhreport.html', reportHtml);
    const path = `${process.cwd()}/lhreport.html`;
    const metrics = runnerResult.lhr.audits.metrics.details || ({} as any);

    return {
      path,
      metrics: [
        url,
        score,
        metrics.items?.[0]?.largestContentfulPaint,
        metrics.items?.[0]?.cumulativeLayoutShift,
        metrics.items?.[0]?.timeToFirstByte,
      ]
    };
  }

}

export default calculateLHR;
