import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChatPage } from "./pages/chat.page";
import { HomePage } from "./pages/home.page";
import { NomatchPage } from "./pages/nomatch.page";
import { RegistrationPage } from "./pages/registration.page";
import { Provider } from "react-redux";
import { setupStore } from "./store";


const store = setupStore()

export const App = () => (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/registration'} element={<RegistrationPage />} />
          <Route path={'/chat'} element={<ChatPage />} />
          <Route path={'*'} element={<NomatchPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
)