import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

//该方法只有服务器端调用
export async function getStaticProps(){
    const posts = await getPosts();
    return{
        props:{ posts }
    }
}

function HomePage({posts}){
    console.log('[HomePage] render',posts);
    return(
        <>
            <Head>
                <title>My Blog</title>
            </Head>
            <main>
                <h1>My Blog</h1>
                <ul>
                    {/*在html元素中执行js代码，用{}括起来即可*/}
                    {
                        posts.map((post)=>(
                            <li key={post.surl}>
                                <Link href={`/posts/${post.surl}`}>
                                    <a>{post.title}</a>
                                </Link>
                           </li>
                        ))
                    }
                </ul>
            </main>
        </>
    );
       
}

export default HomePage;
