
import { Routes, Route } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { lazy } from 'react';
import { SignInPage } from './pages/SignInPage';

// const SignUpPage = lazy(() => new Promise((resolve, reject) => {
//   import('./pages/SignUpPage')
//     .then(result => resolve(result.default ? result : { default: result }))
//     .catch(reject);
// }));

// const SignUpPage = lazy(() => import('./pages/SignUpPage'));
function App() {
    return (
        <Routes>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
            <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>
        </Routes>
    );
}

export default App;
