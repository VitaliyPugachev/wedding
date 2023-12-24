export function throttle(callback, timeout) {
    let timer = null;
    return () => {
        if(timer){
            return
        }

        timer = setTimeout(() => {
            callback();
            clearTimeout(timer);
            timer = null;
        }, timeout);
    }
}