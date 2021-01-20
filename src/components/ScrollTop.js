// useEffect
import { useEffect } from 'react';

// Router
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        setTimeout(() => {
            window.scroll({
                top: 0
            });
        }, 500);
    }, [pathname]);
    return null;
}

export default ScrollTop;