import { Routes, Route } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import DashBoardPage from './pages/DashBoardPage';
import { CampaignPage } from './pages/CampaignPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>
            <Route
                path="/campaign"
                element={<CampaignPage></CampaignPage>}
            ></Route>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        </Routes>
    );
}

export default App;
