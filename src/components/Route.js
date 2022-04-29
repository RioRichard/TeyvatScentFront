
import { Route, Routes, useRoutes, } from 'react-router';
import { ForgetPassword } from './Account/ForgetPassword';

export function Route() {    
    return(
        <div className="wrapper">
        <Routes>
            <Route path='/forgetpassword' element={<ForgetPassword />} />
        </Routes>
        {/* <Route path='/counter' component={Counter} /> */}
    
    </div>
    );

}