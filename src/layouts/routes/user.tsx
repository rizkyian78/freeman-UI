import dynamic from 'next/dynamic'

const PublicContainer = dynamic(() => import('layouts/containers/Public'))

const routes = [
  {
    path: '/',
    layout: PublicContainer,
    exact: true,
  },
  {
    path: '/explore',
    layout: PublicContainer,
    exact: true
  },
  {
    path: '/explore/:id',
    layout: PublicContainer,
    exact: true
  },
  {
    path: '/transaction/:id',
    layout: PublicContainer,
    exact: true
  },
]

export default routes
