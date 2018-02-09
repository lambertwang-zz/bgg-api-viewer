// Local
import { PAGE_SCROLL } from './actionNames';

export default function onPageScroll(scrollY: number) {
    return {
        type: PAGE_SCROLL,
        scrollY,
    };
}
