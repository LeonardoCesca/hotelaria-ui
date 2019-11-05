import Register from './pages/Register'
import Home from './pages/Home'
import Reservation from './pages/Reservation'
import Clients from './pages/Clients'

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
    },
    {
        path: '/clientes',
        component: Clients
    }
]

export default routes;