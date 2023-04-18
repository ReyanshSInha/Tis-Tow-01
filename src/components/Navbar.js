import classess from "./Navbar.module.css"


const FirstNavbar = () => {

    return (
        <div className={classess.page}>

            <div className={classess.Navbar}>
                <div className={`${classess.NavElement} ${classess.bottomBorder}`}>Home</div>
                <div className={classess.NavElement}>one</div>
                <div className={classess.NavElement}>two</div>
                <div className={classess.NavElement}>three</div>
                <div className={classess.NavElement}>four</div>
            </div>
            <div className={classess.SecondNav}>
                
                    <div className={classess.logo}>logo</div>
                    <div className={classess.user}>
                        <div className={classess.login}>Login</div>
                        <div className={classess.register}>register</div>
                    </div>
            
            </div>
        </div>
    )

}

export default FirstNavbar;