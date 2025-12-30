import './sign.css'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className="form-text">
        <h1>Entre na sua conta</h1>
        <p>Gerencie seus produtos com facilidade</p>
      </div>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' placeholder='seu@email.com' />
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' placeholder='********' />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
