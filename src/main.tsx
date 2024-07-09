import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemePrivider } from './context/ThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemePrivider>
        <App />
    </ThemePrivider>
);
