import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChatPage } from "./pages/chat.page";
import { HomePage } from "./pages/home.page";
import { NomatchPage } from "./pages/nomatch.page";
import { RegistrationPage } from "./pages/registration.page";


export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/registration'} element={<RegistrationPage />} />
            <Route path={'/chat'} element={<ChatPage />} />
            <Route path={'*'} element={<NomatchPage />} />
        </Routes>
    </BrowserRouter>
)