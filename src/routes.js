import Register from './pages/Register'
import Home from './pages/Home'
import Reservation from './pages/Reservation'

const routes = 
[
    {
        path: '/',
        component: Home
    },
    {
        path: '/cadastro',
        component: Register
    },
    {
        path: '/reservas',
        component: Reservation
    }
]

export default routes;