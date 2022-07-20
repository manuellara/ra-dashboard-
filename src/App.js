import * as React from "react";
import { Admin, Resource, CustomRoutes, useAuthenticated } from "react-admin";
import authProvider from "./admin/authProvider";
import LoginPage from "./admin/LoginPage";

const MyPage = () => {
  useAuthenticated(); // redirects to login if not authenticated
  return <div>...</div>;
};

const App = () => (
  <Admin loginPage={LoginPage} authProvider={authProvider}>
    <CustomRoutes>
      
    </CustomRoutes>
  </Admin>
);

export default App;
