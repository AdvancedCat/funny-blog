import Cors from 'cors';

const cors = Cors({
    methods: ['GET', 'HEAD'],
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);

    const query = req.query;
    console.log('query:', query);
    res.status(200).json({ text: 'Hello ' + JSON.stringify(query) });
}
