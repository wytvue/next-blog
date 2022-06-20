import {useState} from 'react'
import DarkTheme from './DarkTheme';

/*  
    useState 通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。
    useState会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的
    this.setState，但是它不会把新的 state 和旧的 state 进行合并。
*/

/**
 * 该方法在运行时会同时被服务器和客户端执行，所以会执行两次
 * 对于localStorage对象只存在于客户端，所以不进行判断，服务器端执行时就会报错
 */
function loadDarkMode(){
    if(typeof localStorage !== 'undefined'){
        const value = localStorage.getItem("darkMode");
        return (value===null) ? false : JSON.parse(value);
    }
    return false;
}

function ThemeSwitch(){

    const [darkMode,setDarkMode] = useState(loadDarkMode);

    console.log('[ThemeSwitch] darkMode',darkMode)

    const text = darkMode?'Light Mode':'Dark Mode';
    //  对于绑定的事件，要使用箭头函数
    // 交互函数只会在客户端执行，localStorage对象无需判断
    const changeTheme = ()=>{
        //darkMode要标记成!darkMode，函数执行完成后才会真正的更新darkMode
        localStorage.setItem("darkMode",JSON.stringify(!darkMode));
        setDarkMode(!darkMode);           
    }
    return(
        <>
            <button 
                onClick={changeTheme} suppressHydrationWarning>{text}</button>
            <style jsx>{`
                button{
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: inherit;
             `}
            </style>

            {darkMode && <DarkTheme/>}
        </>
        
    )
}
export default ThemeSwitch;