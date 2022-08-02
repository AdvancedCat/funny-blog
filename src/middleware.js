
import { NextResponse } from 'next/server'

export function middleware(req){
    console.log('中间件运行', req.url)
    const url = req.url

    // 设置cookie
    if(url.indexOf('/posts') > -1){
        const response = NextResponse.next()
        response.cookies.set('vercel', 'fast', {path: '/posts'})
        return response
    }

    // return NextResponse.redirect(new URL('/about-2', req.url))
}

// 满足要求的路由才运行中间件, matcher内元素为静态字符串类型
export const config = {
    matcher: ['/about/:path*', '/posts/:id']
}