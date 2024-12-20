import router from './router';
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from '@/components/theme-provider';

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
