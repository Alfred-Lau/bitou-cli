const parser = require('@babel/parser');
import traverse from '@babel/traverse'
import generate from '@babel/generator'
import types from '@babel/types'

export default () => {
  const sourcecode = `console.log(1);`
  const ast = parser.parse(sourcecode, {
    sourceType: 'unambiguous',
    plugins: ['jsx']
  })

  traverse(ast, {
    CallExpression(path, state) {
      // const cllleeName = generate(path.node.callee).code
      console.log('state', state)
      const { line, column } = path.node.loc.start
      path.node.arguments.unshift(types.stringLiteral(`filename:(${line} ${column})`))
    }
  })
  const { code } = generate(ast)
  console.log(code)
}