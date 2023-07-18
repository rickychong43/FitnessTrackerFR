import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './components'

const root = createRoot(document.querySelector('#App'));

root.render(<BrowserRouter>
    <App />
</BrowserRouter>
);