/**
 * home page
 * @author: panbr
 * @time: 2018-08-10 15:09:00
 */

export default [{
    path: '/',
    name: 'home',
    component: () => {
        return import('./views/home')
    },
    meta: {
        bind: []
    }
}]
