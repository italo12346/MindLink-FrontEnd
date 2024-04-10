import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserData } from "../../../service/api/apiProfile";
import PageTitle from "../pageTitle";
import "./index.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fetchUserData = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (token) {
        const userData = await getUserData(token);
        setUserName(userData.name);
        setUserImage(
          userData.profilePicturePath ||
            "https://cdn-icons-png.flaticon.com/512/6073/6073874.png"
        );
        console.log(userData.profilePicturePath);

        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUserName("");
    setUserImage("");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderUserLink = () => {
    if (isLoading) {
      return <p>Carregando...</p>;
    }

    if (isLoggedIn) {
      return (
        <div className="user">
          <div className="user-info" onClick={handleDropdownToggle}>
            <img className="profile" src={userImage} alt="Profile" />
            <span className="userName">{userName}</span>
          </div>
          {isDropdownOpen && (
            <div className="dropdown">
              <Link to="/profile">
                <button>Meu Perfil</button>
              </Link>
              <Link to="/forum">
                <button>Forúm</button>
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="user">
          <Link to="/login">
            <span className="text-login">Login</span>
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="navBar">
      <PageTitle title="MindLink" />
      <button
        className={`menuIcon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div className="menuLine"></div>
        <div className="menuLine"></div>
        <div className="menuLine"></div>
      </button>
      <div className={`links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/">
          <span>Home</span>
        </Link>
        <a href="#section-2">
          <span>Como Funciona</span>
        </a>
        <Link to="/quero-comecar">
          <span>Quero Começar</span>
        </Link>
        <Link to="/trabalhe-conosco">
          <span>Trabalhe Conosco</span>
        </Link>
      </div>
      {renderUserLink()}
    </div>
  );
}

export default NavBar;
