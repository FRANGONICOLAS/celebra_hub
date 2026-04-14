import { RouterProvider } from 'react-router-dom'
import { appRouter } from './app/router'
import { MockAuthProvider } from './modules/users/hooks/useMockAuth'

function App() {
  return (
    <MockAuthProvider>
      <RouterProvider router={appRouter} />
    </MockAuthProvider>
  )
}

export default App
