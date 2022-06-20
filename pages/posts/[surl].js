import Head from "next/head";
import {getPost} from '../../lib/posts'
import { getSurl } from "../../lib/posts";



export async function getStaticPaths(){
    const files = await getSurl();
    const paths = files.map(item =>({
        params:{surl:item}
    }));
    return{
        paths,
        fallback: false
    }      
}
//该方法只有服务器端调用
//方法内可以调用node.js的所有方法
export async function getStaticProps({params}){
    console.log("getStaticProps page");
    const post = await getPost(params.surl);
    return{
        props:{ post }
    }
}

//该方法在服务器端和浏览器端执行,一般react组件只在浏览器端执行
function Post({post}){
    console.log('[Post] render',post);
    return(
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <main>
                <p>{post.date}</p>
                <h1>{post.title}</h1>
                {/*<p>{post.body}</p>*/}
                <article dangerouslySetInnerHTML={{__html:post.body}}></article>
            </main>
        </>
    );
       
}

export default Post;
