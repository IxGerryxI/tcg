export {
    debounce
}

/**
 * waits for the given delay before executing the given function
 * if the functions gets called again
 * @param {Function} callback 
 * @param {Number} delay 
 * @returns 
 */
function debounce(callback, delay = 250) {
    let timeout

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}