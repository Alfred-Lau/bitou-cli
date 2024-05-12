import { info } from '@/utils/log';
import shell from 'shelljs';


export default function checkStatusCode404(url: string) {
  const content = shell.exec(`curl -I ${url} | grep "HTTP/1.1 404" `, { silent: true }, (code, stdout, stderr) => {
    if (code !== 0) {
      info('Exit code:', code);
      info('Program output:', stdout);
      info('Program stderr:', stderr);
    } else {
      info(`statusCode for ${url}:`, stdout);
    }
  }
  )
}