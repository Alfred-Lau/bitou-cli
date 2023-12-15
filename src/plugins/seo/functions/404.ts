import shell from 'shelljs';


export default function checkStatusCode404(url: string) {
  const content = shell.exec(`curl -I ${url} | grep "HTTP/1.1 404" `, { silent: true }, (code, stdout, stderr) => {
    if (code !== 0) {
      console.log('Exit code:', code);
      console.log('Program output:', stdout);
      console.log('Program stderr:', stderr);
    } else {
      console.log(`statusCode for ${url}:`, stdout);
    }
  }
  )
}