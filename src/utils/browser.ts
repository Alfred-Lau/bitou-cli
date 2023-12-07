import open from 'open';

async function openInBrowser(url: string) {
  // Opens the URL in the default browser.
  await open(url, { app: { name: 'google chrome' } });
}

export {
  openInBrowser,
}