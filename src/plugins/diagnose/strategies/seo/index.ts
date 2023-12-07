import parser from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import types from '@babel/types';

export default () => {
  const sourceCode = `console.log(1);`;
  const ast = parser.parse(sourceCode, {
    sourceType: 'unambiguous',
    plugins: ['jsx'],
  });

  traverse(ast, {
    CallExpression(path, state) {
      console.log('state', state);
      const { line, column } = path.node.loc.start;
      path.node.arguments.unshift(
        types.stringLiteral(`filename:(${line} ${column})`)
      );
    },
  });
  const { code } = generate(ast);
  console.log(code);
};
