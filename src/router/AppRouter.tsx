import { Routes, Route } from 'react-router-dom'
import { AuthRouter } from '../auth/routes/AuthRouter'
import { JournalRouter } from '../journal/routes/JournalRouter'


export const AppRouter = () => {
  return (
    <Routes>

      <Route path="/*" element={<JournalRouter />} />
      <Route path="/auth/*" element={<AuthRouter />} />


    </Routes>
  )
}
