import { useState, useEffect } from 'react';
import './CSScrollBar.css';

const CSScrollBar = ({ cardListRef }) => {

    //Use Effect
    useEffect(() => {
        const cardList = cardListRef.current;
        if(!cardList) return;
        
        const update = () => {
            const { scrollWidth, scrollLeft, clientWidth } = cardList;
            const thumb = document.getElementById('cs-scroll-bar-thumb');
            const track = document.getElementById('cs-scroll-bar-track');
            const trackWidth = track.getBoundingClientRect().width;
            const ratio = clientWidth / scrollWidth;
            const thumbWidth = Math.max(20, clientWidth * ratio);
            const thumbLeft = (scrollLeft / scrollWidth) * trackWidth;
            thumb.style.width = `${thumbWidth}px`;
            thumb.style.transform = `translateX(${thumbLeft}px)`;
        }

        update();
        cardList.addEventListener('scroll', update);
        window.addEventListener('resize', update);

        return () => {
            cardList.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [cardListRef]);

    return(
        <div id='cs-scroll-bar-track'>
            <div id='cs-scroll-bar-thumb'></div>
        </div>
    );
}

export default CSScrollBar;