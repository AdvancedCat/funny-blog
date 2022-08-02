const { createServer } = require('node:http');
const { parse } = require('node:url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'prod';
const hostname = 'localhost';
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            const parseUrl = parse(req.url, true);
            const { pathname, query } = parseUrl;
            // 可以根据 pathname query 走不同的路由逻辑
            if (pathname === '/custom') {
                await app.render(req, res, '/custom', parseUrl);
            } else {
                await handler(req, res, parseUrl);
            }
        } catch (err) {
            console.error('Error occurred handing', req.url, err);
            res.statusCode = 500;
            res.end('internal server error.');
        }
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://${hostname}:${port}`);
    });
});
