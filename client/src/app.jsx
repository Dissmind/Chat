import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChatPage } from "./pages/chat.page";
import { HomePage } from "./pages/home.page";
import { Nomatch } from "./pages/nomatch";


export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/chat'} element={<ChatPage />} />
            <Route path={'*'} element={<Nomatch />} />
        </Routes>
    </BrowserRouter>
)