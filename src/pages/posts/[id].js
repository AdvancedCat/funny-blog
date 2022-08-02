import Head from 'next/head'
import MainLayout from '../../layouts/Main';
import PostLayout from '../../layouts/PostLayout';
import Date from '../../components/date';
import { CommentList } from '../../dynamic-components'
import utilStyles from '../../styles/utils.module.css';
import { getAllPostsIds, getPostData } from '../../../lib/posts';


export async function getStaticPaths() {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
            <CommentList postId={postData.id}></CommentList>
        </>
    );
}


Post.getLayout = function getLayout(page){
    return(
        <MainLayout>
            <PostLayout>{page}</PostLayout>
        </MainLayout>    
    )
}