const routes = [{
    path: '/',
    component: () =>
        import ('layouts/MyLayout.vue'),
    children: [{
            path: '',
            component: () =>
                import ('pages/SeasonView.vue')
        },
        // {
        //     path: 'games',
        //     component: () =>
        //         import ('pages/Games.vue')
        // },
        {
            path: 'login',
            component: () =>
                import ('pages/Login.vue')
        },
        // {
        //     path: 'ranking',
        //     component: () =>
        //         import ('pages/Ranking.vue')
        // },
        {
            path: 'season-view',
            component: () =>
                import ('pages/SeasonView.vue')
        },
        {
            path: 'settings',
            component: () =>
                import ('pages/Settings.vue')
        },
        {
            path: 'user/:id',
            component: () =>
                import ('pages/User.vue')
        },
    ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    })
}

export default routes