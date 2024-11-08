import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRouter } from '../auth/routes/AuthRouter'
import { JournalRouter } from '../journal/routes/JournalRouter'
import { useCheckAuth } from '../hooks'
import { CheckingAuth } from '../ui'
export const AppRouter = () => {

  const { status } = useCheckAuth();

  if (status === 'checking') return <CheckingAuth />

  return (
    <Routes>
      {
        status === 'authenticated'
          ? <Route path='/*' element={<JournalRouter />} />
          : <Route path='/auth/*' element={<AuthRouter />} />
      }
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
