import Register from './pages/Register'
import Home from './pages/Home'
import Reservation from './pages/Reservation'
import Clients from './pages/Clients'
import Booking from './pages/Booking'
import Checkin from './pages/Checkin'

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
        path: '/efetuar-reserva',
        component: Reservation
    },
    {
        path: '/clientes',
        component: Clients
    },
    {
        path: '/reservas',
        component: Booking
    },
    {
        path: '/checkin',
        component: Checkin
    }
]

export default routes;