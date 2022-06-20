import {readdir, readFile} from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

//本地json文件中读取
// export async function getPost(surl){
//     //readFile方法异步，所以需要使用await关键字
//     const data = await readFile(`content/posts/${surl}.json`,'utf-8');
//     console.log(data);
//     return JSON.parse(data);
// }

//.md文件中读取
export async function getPost(surl){
    //readFile方法异步，所以需要使用await关键字
    const source = await readFile(`content/posts/${surl}.md`,'utf-8');
    //data为前面定义的属性，content为剩余的内容
    const {data,content} = matter(source);
    const body = marked(content);
    return {
        title:data.title,
        date:data.date,
        body
    };
}

//封装文件列表
export async function getPosts(){
    const surls = await getSurl();
    const posts = [];
    for(const surl of surls){
        const post = await getPost(surl);
        posts.push({ surl, title:post.title });
    }
    return posts;
}

//自动读取content/posts下的目录
export async function getSurl(){
    const suffix = '.md';
    const files = await readdir(`content/posts`);
    //filter方法不改变原函数
    return files.filter(item=>item.endsWith(suffix))
    .map(item=>item.slice(0,-suffix.length));
}