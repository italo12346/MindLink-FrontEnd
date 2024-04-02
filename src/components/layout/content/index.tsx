import { Route, Routes } from "react-router-dom";

import Home from "../../../views/pages/Home";
import LoginPage from "../../../views/pages/Login";
import ProfilePage from "../../../views/pages/Profile";
import SignUpUserPage from "../../../views/pages/Register";
import QueroComecar from "../../../views/pages/QueroComecar";

function Content() {
  return (
    <div className="Content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singUpUser" element={<SignUpUserPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/quero-comecar" element={<QueroComecar />} />
        <Route path="*" element={""} />
      </Routes>
    </div>
  );
}

export default Content;
