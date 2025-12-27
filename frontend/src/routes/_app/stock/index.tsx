import './stock.css'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/stock/')({
  component: RouteComponent,
})

// Parametro opcional. Se não tiver parametro, mostrar todos.

function RouteComponent() {
  return <div>Hello "/(app)/stock/"!</div>
}
