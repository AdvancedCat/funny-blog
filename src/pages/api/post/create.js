
export default function handler(req, res){

    const cookies = req.cookies
    if(!cookies.get('session')){
        res.end(`Non-login, can't create post`)
        return
    }

    res.end(`Post creating`);
}