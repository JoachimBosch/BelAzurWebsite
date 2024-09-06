import { Routes, Route } from "react-router-dom";

import { ProtectedRoute } from "./protectedroute";
import Home from "../assets/home";


const AuthRoutes = () => {
    /* const { token } = useAuth(); */

    return (
      <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />

          {/* Protected routes */}
          {/* <Route path="/profile" element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route> */}
      </Routes>
  );
};

export default AuthRoutes;