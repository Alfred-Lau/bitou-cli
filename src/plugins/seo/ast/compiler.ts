import compiler from 'typescript'
class AstCompiler {

  public scanFiles() {
    // scan files and return array of file paths

  }
  public compile(code: string) {
    return compiler.transpile(code);
  }

}

export default AstCompiler;