const cleanDB = exports.cleanDB = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 5000)
    })
}