export default function anything(req, res) {
    const { pid } = req.query;
    res.end(`Post pid: ${pid}`);
}
