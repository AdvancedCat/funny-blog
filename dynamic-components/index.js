import dynamic from 'next/dynamic';
import { Suspense } from 'react'

const DynamicCommentList = dynamic(
    () =>
        import('../components').then((mod) => {
            return mod.Comments;
        }),
    {
        ssr: false,
    }
);

export function CommentList({postId}) {
    return (
        <Suspense fallback={`Loading...`}>
            <DynamicCommentList postId={postId}></DynamicCommentList>
        </Suspense>
    );
}
