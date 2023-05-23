import { useEffect, useRef, useState } from "react";
import { BsChevronDoubleDown } from 'react-icons/bs';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0)
    const homeRef = useRef<HTMLDivElement>(null);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener("scroll",updateScroll)
    },[])

    const handleRef = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <>
            <div className='title'>
                <div className={scrollPosition > 90? "scroll-text" : "scrolled-text"}>
                    <div>Front-end Developer Portfoilo</div><br/>
                </div>
                <span className={scrollPosition > 90? "scroll-text" : "Name"}>장한나</span>
            </div>
            <button 
            className="more"
            onClick={() => handleRef}>
                <div>Scroll</div>
                <BsChevronDoubleDown className="allow"/>
            </button>
        </>
    )
}

export default Header;
