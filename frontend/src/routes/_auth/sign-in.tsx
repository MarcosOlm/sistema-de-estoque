import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: 'sign in | stock'
      }
    ]
  })
})

function RouteComponent() {
  return <div>Hello "/(auth)/sign-in"!</div>
}
