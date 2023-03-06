export const debounce = (fn: ((text: string) => void), delay: number) => {
    let timerId: NodeJS.Timeout;
    return (e: string) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(e), delay);
    }
};