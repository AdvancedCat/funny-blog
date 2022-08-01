import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a className='hongxin'>Back to Home</a>
                </Link>
            </h2>
        </>
    );
}
