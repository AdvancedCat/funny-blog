
export default function LoginPage() {

    const handleLogin = async function(){
        let result = await fetch('/api/login').then(r => r.json())
        if(result.code === 0){
            const searchParams = new URLSearchParams(window.location.search);
            if(searchParams.get('redirectUrl')){
                window.location.href = searchParams.get('redirectUrl')
            }
        }
    }

    return (
        <div>
            <h1>登录</h1>

            <div>是否”已登录“：</div>

            <section>
                <button onClick={handleLogin}>点我假装登录</button>
            </section>
            
            <p>点击按钮后，会请求 {'/api/login'} 接口，登录接口会向 cookie 中植入 session 字段，标识已登录状态</p>
        </div>
    );
}
