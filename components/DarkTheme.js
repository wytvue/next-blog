function DarkTheme(){
    return(
        <>
            <style jsx global>{`
                /*Dark theme*/
           :root{
                --background-color:rgb(70, 68, 68) ;
                --link-color:rgb(189, 189, 9);
                --text-color:white;
            }
            
            `}</style>
        </>
    )
}

export default DarkTheme;