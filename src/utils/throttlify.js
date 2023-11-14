const throttle = (function () {
    let timeout = undefined;
    return (callback) => {
        if (timeout === undefined) {
            callback();
            timeout = setTimeout(() => {
                timeout = undefined;
            }, 10);
        }
    }
})();

export const throttlify = (callback) => {
    return (event) =>  {
        throttle(() => {
            callback(event);
        });
    }
}