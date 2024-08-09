import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      // Possible Problems
      "array-callback-return": "error", // 数组方法的回调函数必须有返回值
      "constructor-super": "error", // constructor 中必须调用 super
      "for-direction": "error", // for 循环方向错误
      "getter-return": "error", // getter 必须有返回值，并且禁止返回空
      "no-async-promise-executor": "error", // 禁止使用异步函数作为 Promise executor
      "no-await-in-loop": "error", // 禁止在循环中出现 await
      "no-class-assign": "error", // 禁止修改类声明的变量
      "no-compare-neg-zero": "error", // 禁止与 -0 进行比较
      "no-cond-assign": "error", // 禁止在条件语句中出现赋值操作符
      "no-const-assign": "error", // 禁止修改 const 声明的变量
      "no-constant-binary-expression": "error", // 禁止在条件中使用常量表达式
      "no-constant-condition": "error", // 禁止在条件中使用常量表达式
      "no-constructor-return": "error", // 禁止构造函数中返回值
      "no-control-regex": "error", // 禁止在正则表达式中使用控制字符
      "no-debugger": "error", // 禁用 debugger
      "no-dupe-args": "error", // 禁止 function 定义中出现重名参数
      "no-dupe-class-members": "error", // 禁止类成员中有重复的名称
      "no-dupe-else-if": "error", // 禁止 if 语句中有两个以上的 else if
      "no-dupe-keys": "error", // 禁止对象字面量中出现重复的 key
      "no-duplicate-case": "error", // 禁止出现重复的 case 标签
      "no-duplicate-imports": "error", // 禁止重复导入
      "no-empty-character-class": "error", // 禁止在正则表达式中使用空字符集
      "no-empty-pattern": "error", // 禁止使用空解构模式
      "no-ex-assign": "error", // 禁止对 catch 子句的参数重新赋值
      "no-fallthrough": "error", // 禁止 case 语句落空
      "no-func-assign": "error", // 禁止对 function 声明重新赋值
      "no-import-assign": "error", // 禁止对导入的模块进行赋值
      "no-inner-declarations": "error", // 禁止在嵌套的块中出现变量声明或 function 声明
      "no-invalid-regexp": "error", // 禁止在 RegExp 构造函数中出现无效的正则表达式
      "no-irregular-whitespace": "error", // 禁止不规则的空白
      "no-loss-of-precision": "error", // 禁止丢失精度
      "no-misleading-character-class": "error", // 禁止在字符类语法中出现由多个代码点组成的字符
      "no-new-native-nonconstructor": "error", // 禁止对 String，Number 和 Boolean 使用 new 操作符
      "no-obj-calls": "error", // 禁止把全局对象作为函数调用
      "no-promise-executor-return": "error", // promise executor 中必须调用 resolve 或 reject
      "no-prototype-builtins": "error", // 禁止直接调用 Object.prototypes 的内置属性
      "no-self-assign": "error", // 禁止自我赋值
      "no-self-compare": "error", // 禁止自身比较
      "no-setter-return": "error", // setter 必须有返回值
      "no-sparse-arrays": "error", // 禁用稀疏数组
      "no-template-curly-in-string": "error", // 禁止在常规字符串中出现模板字面量占位符语法
      "no-this-before-super": "error", // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
      "no-undef": "error", // 禁止将标识符定义为另一个
      "no-unexpected-multiline": "error", // 禁止出现令人困惑的多行表达式
      "no-unmodified-loop-condition": "error", // 禁用一成不变的循环条件
      "no-unreachable": "error", // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
      "no-unreachable-loop": "error", // 禁止在循环中出现不可达代码
      "no-unsafe-finally": "error", // 禁止在 finally 语句块中出现控制流语句
      "no-unsafe-negation": "error", // 禁止对关系运算符的左操作数使用否定操作符
      "no-unsafe-optional-chaining": "error", // 禁止可选链表达式中出现可能会导致出错的计算
      "no-unused-private-class-members": "error", // 禁止未使用过的私有字段
      "no-unused-vars": "error", // 禁止出现未使用过的变量
      "no-use-before-define": "error", // 禁止在变量定义之前使用它们
      "no-useless-assignment": "error", // 禁止不必要的赋值表达式
      "no-useless-backreference": "error", // 禁止在正则表达式中使用没必要的反向引用
      "require-atomic-updates": "error", // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
      "use-isnan": "error", // 要求调用 isNaN()检查 NaN
      "valid-typeof": "error", // 强制 typeof 表达式与有效的字符串进行比较

      // Suggestions
      "accessor-pairs": "error", // 强制 getter 和 setter 在对象中成对出现
      "arrow-body-style": "error", // 要求箭头函数体使用大括号
      "block-scoped-var": "error", // 强制把变量的使用限制在其定义的作用域范围内
      "camelcase": "error", // 强制使用骆驼拼写法
      "capitalized-comments": "error", // 强制注释首字母大写
      "class-methods-use-this": "error", // 强制类方法使用 this
      "complexity": "error", // 指定程序中允许的最大环路复杂度
      "consistent-return": "error", // 要求 return 语句要么总是指定返回的值，要么不指定
      "consistent-this": "error", // 当获取当前执行环境的上下文时，强制使用一致的命名
      "curly": "error", // 强制所有控制语句使用一致的括号风格
      "default-case": "error", // 要求 switch 语句中有 default 分支
      "default-case-last": "error", // 要求 switch 语句中的 default 分支是最后一个分支
      "default-param-last": "error", // 要求函数的最后一个参数是默认参数
      "dot-notation": "error", // 强制尽可能地使用点号
      "eqeqeq": "error", // 要求使用 === 和 !==
      "func-name-matching": "error", // 要求函数名与赋值给它们的变量名或属性名相匹配
      "func-names": "error", // 要求函数表达式有名字
      "func-style": "error", // 强制一致地使用 function 声明或表达式
      "grouped-accessor-pairs": "error", // 强制 getter 和 setter 在对象中成对出现
      "guard-for-in": "error", // 要求 for-in 循环中有一个 if 语句
      "id-denylist": "error", // 禁止使用指定的标识符
      // "id-length": "error", // 强制标识符的最小和最大长度
      "id-match": "error", // 要求标识符匹配一个指定的正则表达式
      "init-declarations": "error", // 要求或禁止 var 声明中的初始化
      "logical-assignment-operators": "error", // 禁止使用类似逻辑赋值运算符的复合赋值操作符
      "max-classes-per-file": "error", // 限制每个文件中类的数量
      "max-depth": "error", // 强制块的最大可嵌套深度
      "max-lines": "error", // 强制最大行数
      //"max-lines-per-function": "error", // 强制函数最大行数
      "max-nested-callbacks": "error", // 强制回调函数最大嵌套深度
      "max-params": "error", // 强制函数定义中最多允许的参数数量
      "max-statements": "error", // 强制函数块最多允许的的语句数量
      "new-cap": "error", // 要求构造函数首字母大写
      "no-alert": "error", // 禁用 alert、confirm 和 prompt
      "no-array-constructor": "error", // 禁用 Array 构造函数
      "no-bitwise": "error", // 禁用按位运算符
      "no-caller": "error", // 禁用 arguments.caller 或 arguments.callee
      "no-case-declarations": "error", // 不允许在 case 子句中使用词法声明
      "no-console": "error", // 禁用 console
      "no-continue": "error", // 禁用 continue 语句
      "no-delete-var": "error", // 禁止删除变量
      "no-div-regex": "error", // 禁止除法操作符显式的出现在正则表达式开始的位置
      "no-else-return": "error", // 禁止 if 语句中 return 语句之后有 else 块
      "no-empty": "error", // 禁止空块语句
      "no-empty-function": "error", // 禁止出现空函数
      "no-empty-static-block": "error", // 禁止空的类成员
      "no-eq-null": "error", // 禁止在没有类型检查操作符的情况下与 null 进行比较
      "no-eval": "error", // 禁用 eval()
      "no-extend-native": "error", // 禁止扩展原生类型
      "no-extra-bind": "error", // 禁止不必要的 .bind() 调用
      "no-extra-boolean-cast": "error", // 禁止不必要的布尔转换
      "no-extra-label": "error", // 禁用不必要的标签
      "no-global-assign": "error", // 禁止对原生对象或只读的全局对象进行赋值
      "no-implicit-coercion": "error", // 禁止使用短符号进行类型转换
      "no-implicit-globals": "error", // 禁止在全局范围内使用变量声明和 function 声明
      "no-implied-eval": "error", // 禁止使用类似 eval()的方法
      "no-inline-comments": "error", // 禁止在代码后使用内联注释
      "no-invalid-this": "error", // 禁止 this 关键字出现在类和类对象之外
      "no-iterator": "error", // 禁用 __iterator__ 属性
      "no-label-var": "error", // 不允许标签与变量同名
      "no-labels": "error", // 禁用标签语句
      "no-lone-blocks": "error", // 禁用不必要的嵌套块
      "no-lonely-if": "error", // 禁止 if 作为唯一的语句出现在 else 语句中
      "no-loop-func": "error", // 禁止在循环中出现 function 声明和表达式
      //"no-magic-numbers": "error", // 禁用魔术数字
      "no-multi-assign": "error", // 禁止连续赋值
      "no-multi-str": "error", // 禁止使用多行字符串
      "no-negated-condition": "error", // 禁用否定表达式
      "no-nested-ternary": "error", // 禁止使用嵌套的三元表达式
      "no-new": "error", // 禁止使用 new 以避免产生副作用
      "no-new-func": "error", // 禁止对 Function 对象使用 new 操作符
      "no-new-wrappers": "error", // 禁止对 String，Number 和 Boolean 使用 new 操作符
      "no-nonoctal-decimal-escape": "error", // 禁止在字符串中使用八进制转义序列
      "no-object-constructor": "error", // 禁用 Object 的构造函数
      "no-octal": "error", // 禁用八进制字面量
      "no-octal-escape": "error", // 禁止在字符串中使用八进制转义序列
      "no-param-reassign": "error", // 禁止对 function 的参数进行重新赋值
      "no-plusplus": "error", // 禁用一元操作符 ++ 和 --
      "no-proto": "error", // 禁用 __proto__ 属性
      "no-redeclare": "error", // 禁止多次声明同一变量
      "no-regex-spaces": "error", // 禁止正则表达式字面量中出现多个空格
      "no-restricted-exports": "error", // 禁用特定的导出
      "no-restricted-globals": "error", // 禁用特定的全局变量
      "no-restricted-imports": "error", // 禁用特定的导入
      "no-restricted-properties": "error", // 禁用对象的某些属性
      "no-restricted-syntax": "error", // 禁用特定的语法
      "no-return-assign": "error", // 禁止在返回语句中赋值
      "no-script-url": "error", // 禁用 Script URL
      "no-sequences": ["error"], // 禁用逗号操作符
      "no-shadow": "error", // 禁止变量声明与外层作用域的变量同名
      "no-shadow-restricted-names": "error", // 禁止覆盖受限制的标识符
      // "no-ternary": "error", // 禁用三元操作符
      "no-throw-literal": "error", // 禁止抛出异常字面量
      "no-undef-init": "error", // 禁止将变量初始化为 undefined
      "no-undefined": "error", // 禁止将 undefined 作为标识符
      "no-underscore-dangle": "error", // 禁止标识符中有悬空下划线
      "no-unneeded-ternary": "error", // 禁止可以在有更简单的可替代的表达式时使用三元操作符
      "no-unused-expressions": "error", // 禁止出现未使用过的表达式
      "no-unused-labels": "error", // 禁用出现未使用过的标
      "no-useless-call": "error", // 禁止不必要的 .call() 和 .apply()
      "no-useless-catch": "error", // 禁止不必要的 catch 子句
      "no-useless-computed-key": "error", // 禁止在对象上使用不必要的计算属性
      "no-useless-concat": "error", // 禁止不必要的字符串字面量或模板字面量的连接
      "no-useless-constructor": "error", // 禁用不必要的构造函数
      "no-useless-escape": "error", // 禁用不必要的转义字符
      "no-useless-rename": "error", // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
      "no-useless-return": "error", // 禁止多余的 return 语句
      "no-var": "error", // 要求使用 let 或 const 而不是 var
      "no-void": "error", // 禁用 void 操作符
      "no-warning-comments": "error", // 禁止在注释中使用特定的警告术语
      "no-with": "error", // 禁用 with 语句
      "object-shorthand": "error", // 要求或禁止对象字面量中方法和属性使用简写语法
      "one-var": ["error", "never"], // 强制函数中的变量要么一起声明要么分开声明
      "operator-assignment": "error", // 要求或禁止尽可能地简化赋值操作
      "prefer-arrow-callback": "error", // 要求使用箭头函数作为回调
      "prefer-const": "error", // 要求使用 const 声明那些声明后不再被修改的变量
      "prefer-destructuring": "error", // 优先使用数组和对象解构
      "prefer-exponentiation-operator": "error", // 要求使用 ** 操作符
      "prefer-named-capture-group": "error", // 要求正则表达式中的命名捕获组
      "prefer-numeric-literals": "error", // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
      "prefer-object-has-own": "error", // 要求使用 Object.prototype.hasOwnProperty.call(foo, 'bar') 代替 foo.hasOwnProperty('bar')
      "prefer-object-spread": "error", // 要求使用对象扩展运算符而非 Object.assign()
      "prefer-promise-reject-errors": "error", // 要求使用 Error 对象作为 Promise 拒绝的原因
      "prefer-regex-literals": "error", // 强制在 RegExp 上使用 u 标志
      "prefer-rest-params": "error", // 要求使用剩余参数而不是 arguments
      "prefer-spread": "error", // 要求使用扩展语法而非.apply()
      "prefer-template": "error", // 要求使用模板字面量而非字符串连接
      "radix": "error", // 强制在 parseInt() 使用基数参数
      "require-await": "error", // 禁止使用不带 await 表达式的 async 函数
      "require-unicode-regexp": "error", // 强制在 RegExp 上使用 u 标志
      "require-yield": "error", // 要求 generator 函数内有 yield
      "sort-imports": "error", // 强制模块内的 import 排序
      "sort-keys": "error", // 要求对象属性按序排列
      "sort-vars": "error", // 强制变量声明按序排列
      "strict": "error", // 要求或禁止使用严格模式指令
      "symbol-description": "error", // 要求 symbol 描述
      "vars-on-top": "error", // 要求所有的 var 声明出现在它们所在的作用域顶部
      "yoda": "error", // 要求或禁止 “Yoda” 条件

      // Layout & Formatting
      "unicode-bom": "error", // 要求或禁止 Unicode 字节顺序标记 (BOM)

      // Deprecated
      "no-trailing-spaces": "error", // 禁用行尾空格
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }], // 禁止出现多行空行 禁止空行不必要的空格
      "object-curly-spacing": ["error", "always"], // 强制在花括号之间的参数需要距离花括号一个空格
      "quotes": ["error", "single"], // 强制使用单引号
      "semi": ["error", "always"], // 强制在语句末尾使用分号
    },
    settings: { react: { version: "detect" } }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
