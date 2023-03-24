import { useEffect, useState } from "react";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0)

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener("scroll",updateScroll)
    },[])

    return(

        <div className='title'>
            <div className={scrollPosition > 90? "scroll-text" : "scrolled-text"}>
                <div>Front-end Developer Portfoilo</div><br/>
            </div>
            <span className={scrollPosition > 90? "scroll-text" : "Name"}>장한나</span>
        </div>
    )
}

export default Header;
