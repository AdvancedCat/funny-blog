export default function handler(req, res) {
    const query = req.query
    console.log('query:', query)
    res.status(200).json({ text: 'Hello ' + JSON.stringify(query) });
}
