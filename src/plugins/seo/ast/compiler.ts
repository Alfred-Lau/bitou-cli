import compiler from 'typescript'
import path from 'path'
class AstCompiler {

  public scanFiles() {
    // scan files and return array of file paths
    const filepath = path.resolve(__dirname, 'test.ts');
  }
  public compile(code: string) {
    return compiler.transpile(code);
  }

}

export default AstCompiler;