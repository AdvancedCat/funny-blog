This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Q&A
## page
### Layouts

在 `_app.js` 中可以为每个 page 添加统一的layout

```js
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
```

### 路由改写
Q: `pages/api` 会自动映射到路由 `/api/*`，那如果API有多个版本怎么办？比如 `/api/v2/...`                          
A:  在 `next.config.js` 中配置 rewrites 配置项
方案一：
```js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/v/:version/:rest*',
        destination: '/api/:rest*?version=:version',
      }
    ]
  }
}
```
当访问 `/api/v2/user?id=1` 时，会改写请求为 `api/user?id=1&version=v2`

方案二：
使用 `middleware.js` 中间件去修改请求

### 动态引入

For React 18:
```js
import dynamic from 'next/dynamic';
const DynamicCommentList = dynamic(() => import('../../components/Comments'), {
    suspense: true,
});

<Suspense fallback={`Loading...`}>
    <DynamicCommentList></DynamicCommentList>
</Suspense>
```

组件聚合，named exports:
```js
// components/index.js
export function Hello() {
  return <p>Hello!</p>
}

// pages/index.js
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() =>
  import('../components').then((mod) => mod.Hello)
)
```

### 鉴权


### 自定义server
如果需要部署到其他服务器上，需要精细化控制server。详见 `server.js` 文件。

#### 其他方案： 
- [with Koa](https://github.com/vercel/next.js/blob/canary/examples/custom-server-koa/server.js)
- [with Express](https://github.com/vercel/next.js/blob/canary/examples/custom-server-express/server.js)

### `src`文件夹

默认支持常见的 `src` 代码组织形式
> 如果在根项目中有 `pages` 文件夹，则会覆盖 `src/pages`

### env 环境变量

Next 默认会从 `.env` 中读取环境变量，以 `NEXT_PUBLIC_` 开头的变量可以在C端使用。

> `NEXT_PUBLIC_` 开头的环境变量会通过 webpack definePlugin 插件写入

ENV 加载顺序：
1. `process.env`
2. `.env.$(NODE_ENV).local`
3. `.env.local` (Not checked when NODE_ENV is test.)
4. `.env.$(NODE_ENV)`
5. `.env`


## api routes

### 动态 api 路由

- `pages/api/post/create.js` - Will match `/api/post/create`
- `pages/api/post/[pid].js` - Will match `/api/post/1`, `/api/post/abc`, etc. But not `/api/post/create`
- `pages/api/post/[...slug].js` - Will match `/api/post/1/2`, `/api/post/a/b/c`, etc. But not `/api/post/create`, `/api/post/abc`
