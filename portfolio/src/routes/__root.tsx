import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

function RootLayout() {
  useEffect(() => {
    const root = document.documentElement

    root.style.setProperty('--mouse-x', `${window.innerWidth / 2}px`)
    root.style.setProperty('--mouse-y', `${window.innerHeight / 2}px`)

    const handleMouseMove = (event: MouseEvent) => {
      root.style.setProperty('--mouse-x', `${event.clientX}px`)
      root.style.setProperty('--mouse-y', `${event.clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-bg text-text">
      <div className="cursor-glow pointer-events-none fixed inset-0 z-0" />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
