export default function anything(req, res) {
    const { slug } = req.query;
    res.end(`Post: ${slug.join(', ')}`);
}
