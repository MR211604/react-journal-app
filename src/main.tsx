import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JournalApp } from './JournalApp'
import { Provider } from 'react-redux'
import { store } from './store'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <JournalApp />
    </Provider>
  </StrictMode>,
)
