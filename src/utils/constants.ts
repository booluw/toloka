import { lazy } from "react"

export const ROUTES = [
  {
    path: '/',
    component: lazy(() => import('../views/home/indexView.jsx'))
  },
  {
    path: '/tasks',
    component: lazy(() => import('../views/tasks/indexView.jsx'))
  }
]