
/**show verify or not */
function prerequisiteStats(to, from, next) {
    /**check if we have authenticated */
    if (authenticated()) return next({
        name: "Home",
        replace: true
    })

    /**we are not authenticated
     * check mobile number filled or not
     */
    if (!store.state.at.kind) {
        next({
            name: "Login",
            replace: true
        })
    } else {
        next()
    }
}

/**export the guard */
export {
    prerequisiteStats,
}