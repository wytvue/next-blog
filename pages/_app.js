//app接收通过next.js框架获取的组件，Component是页面组件，对应当前显示的页面
//pageProps表示我们需要传递给页面的组件
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

//第一次创建一个自定义的app组件，需要重启服务器
function App({Component,pageProps}){
    return(
        <>
            <Head>
               <link rel="icon" href="/icons/favicon.ico"></link> 
            </Head>
            <header>
                <Navbar />
            </header>
            {/*返回页面组件和所有组件数据，使用扩展语法，呈现所需页面*/}
            <Component {...pageProps} />
        </>
        
    )
}
export default App;