module.exports = {
  // 目前制定的规则 recommended 规则集相差较大，这里选择手动声明
  // extends: [
  //   'plugin:unicorn/recommended',
  // ],
  plugins: [
    'unicorn',
  ],
  rules: {
    // 自动去除空花括号内的空格
    'unicorn/empty-brace-spaces': 'warn',
    // 使用 Error 时必须传递非空的 message
    'unicorn/error-message': 'error',
    // 文件名必须为 kebab-case 或 PascalCase
    'unicorn/filename-case': ['error', {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
      ignore: [
        // unicorn 检测的 PascalCase 不包含连续的大写字母，这里将条件放宽
        /^[A-Z][A-Za-z0-9]*\./,
      ],
    }],
    // 使用 eslint-disable 时必须指定需要禁止的规则（如需对某一文件禁用全部规则，可在 ignorePatterns 字段声明）
    'unicorn/no-abusive-eslint-disable': 'error',
    // 禁止直接使用 document.cookie
    'unicorn/no-document-cookie': 'error',
    // 使用 Array.isArray 而非 instanceof（避免跨窗口时的错误返回）
    'unicorn/no-instanceof-array': 'error',
    // 禁止无效的 removeEventListener
    'unicorn/no-invalid-remove-event-listener': 'error',
    // 禁止成员命名为 then 以避免对 await 操作的影响
    'unicorn/no-thenable': 'error',
    // 禁止多个空位的数组解构
    'unicorn/no-unreadable-array-destructuring': 'error',
    // 自动去除对象解构中无用的数据防御
    'unicorn/no-useless-fallback-in-spread': 'warn',
    // 自动去除无用的数组长度检查
    'unicorn/no-useless-length-check': 'warn',
    // 自动去除无用的 Promise.resolve 和 Promise.reject
    'unicorn/no-useless-promise-resolve-reject': 'warn',
    // 自动去除多余的展开操作符
    'unicorn/no-useless-spread': 'warn',
    // 禁止使用 .0 小数（避免转换字符串时出现非预期的结果）
    'unicorn/no-zero-fractions': 'error',
    // 总是使用 addEventListener 而不是 onevent 函数
    'unicorn/prefer-add-event-listener': 'error',
    // 当只需要第一个结果时，使用 find 代替 filter
    'unicorn/prefer-array-find': 'error',
    // 使用 .flatMap() 代替 .map().flat()
    'unicorn/prefer-array-flat-map': 'error',
    // 当只需要判断返回值存在时，使用 some 代替 find
    'unicorn/prefer-array-some': 'error',
    // 使用 Date.now() 代替 getTime() 和隐式类型转换
    'unicorn/prefer-date-now': 'warn',
    // 自动替换 .innerText 为 .textContent（标准和兼容性）
    'unicorn/prefer-dom-node-text-content': 'warn',
    // 必须使用键盘事件的 key 属性而不是 keyCode（已废弃）
    'unicorn/prefer-keyboard-event-key': 'error',
    // 使用 .includes 而非 .indexOf 判断数组/字符串的包含
    'unicorn/prefer-includes': 'error',
    // 如果可能，使用逻辑操作符代替三元操作符
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    // 自动替换 .slice/.splice 方法中的 .length - index 参数为负数
    'unicorn/prefer-negative-index': 'warn',
    // 自动为 Node 内置模块添加 node: 协议
    'unicorn/prefer-node-protocol': 'warn',
    // 自动去除没有使用的 catch 参数
    'unicorn/prefer-optional-catch-binding': 'warn',
    // 自动替换 .substr 和 .substring 为 .slice（与数组一致）
    'unicorn/prefer-string-slice': 'warn',
    // 自动替换 .trimLeft/.trimRight 为 .trimStart/.trimEnd（标准）
    'unicorn/prefer-string-trim-start-end': 'warn',
    // 自动为数组的 .join 方法增加参数
    'unicorn/require-array-join-separator': 'warn',
    // 自动为数字的 .toFixed 方法增加参数
    'unicorn/require-number-to-fixed-digits-argument': 'warn',
    // 必须为 postMessage 指定第二个参数
    'unicorn/require-post-message-target-origin': 'error',
    // 抛出错误时必须使用 new 关键字
    'unicorn/throw-new-error': 'error',
  },
}
