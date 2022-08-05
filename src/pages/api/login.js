import { setCookie } from '../../utils/cookies'

export default function handler(req, res){
    setCookie(res, 'session', '123456', {maxAge: 10 * 60, path: '/'})
    res.status(200).json({
        code: 0,
        msg: 'login success',
        data: {}
    })
}