技术栈：vue3.0 + element plus + vite + TS + eslint

1.  初始化项目
   
   创建项目

![截图](attachment:44aba2b15744d625880e06799ccba7d0)

      进入项目，安装依赖，运行项目

![截图](attachment:3de4df0b257ac4db07855c2c0c4cec87)

2. 引入TS
   
   加入 ts 依赖
   ```
   yarn add --dev typescript
   ```

		在 项目根目录下创建 TypeScript 的配置文件 tsconfig.json

```json
{
  "compilerOptions": {
    // 允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查。
    "allowSyntheticDefaultImports": true,
    // 解析非相对模块名的基准目录
    "baseUrl": ".",
    "esModuleInterop": true,
    // 从 tslib 导入辅助工具函数（比如 __extends， __rest等）
    "importHelpers": true,
    // 指定生成哪个模块系统代码
    "module": "esnext",
    // 决定如何处理模块。
    "moduleResolution": "node",
    // 启用所有严格类型检查选项。
    // 启用 --strict相当于启用 --noImplicitAny, --noImplicitThis, --alwaysStrict， 
    // --strictNullChecks和 --strictFunctionTypes和--strictPropertyInitialization。
    "strict": true,
    // 生成相应的 .map文件。
    "sourceMap": true,
    // 忽略所有的声明文件（ *.d.ts）的类型检查。
    "skipLibCheck": true,
    // 指定ECMAScript目标版本 
    "target": "esnext",
    // 要包含的类型声明文件名列表
    "types": [],
    "isolatedModules": true,
    // 模块名到基于 baseUrl的路径映射的列表。
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    // 编译过程中需要引入的库文件的列表。
    "lib": [
      "ESNext",
      "DOM",
      "DOM.Iterable",
      "ScriptHost"
    ]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

在 src 目录下新加 shim.d.ts 文件

```typescript
import type { DefineComponent } from 'vue'

declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

把 main.js 修改成 main.ts

在根目录，打开 Index.html

```html
修改为：
<script type="module" src="/src/main.ts"></script>
```

<br/>

3. 引入 eslint
   
   @typescript-eslint/parser @typescript-eslint/eslint-plugin 为 eslint 对 typescript 支持。
   ```javascript
   yarn add --dev eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin
   ```

 		在src目录下建立 eslint 配置文件：.eslintrc.js

```javascript
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    es6: true,
    browser: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'space-before-function-paren': 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'vue/require-default-prop': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    'vue/comment-directive': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off'
  }
}

```

在src目录下建立 prettier配置文件：.prettierrc

```json
{
  "eslintIntegration": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "vueIndentScriptAndStyle": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "bracketSpacing": true,
  "trailingComma": "none",
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "arrowParens": "always",
  "insertPragma": false,
  "requirePragma": false,
  "proseWrap": "never",
  "htmlWhitespaceSensitivity": "strict",
  "endOfLine": "lf"
}
```

4. 安装 vuex

`yarn add vue-router@next vuex@next`

src目录创建 store/index.ts

```typescript
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
```

5. elementPlus 安装参照官网 [https://element-plus.gitee.io/#/zh-CN/component/installation](https://)

至此，一个基于 Vue3 全家桶 + Vite + TypeScript + Eslint + Element Plus 的开发环境已经搭建完毕，现在就可以编写代码了。

具体模板github地址

`git clone https://github.com/hejianfang/vite-elementPlus.git`