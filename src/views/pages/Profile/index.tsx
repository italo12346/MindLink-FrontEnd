import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { getUserData, updateUser } from "../../../service/api/apiProfile";

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    password: "*******",
    profilePicturePath:
      "https://cdn-icons-png.flaticon.com/512/6073/6073874.png",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null); // Estado para armazenar a imagem selecionada
  const [previewImage, setPreviewImage] = useState<string | null>(null); // Estado para armazenar o URL temporário da imagem selecionada
  const selectedImageInputRef = useRef<HTMLInputElement>(null); // Referência para o input de arquivo

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (token) {
          const userDataFromApi = await getUserData(token);
          setUserData(userDataFromApi);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    // Atualiza a visualização da imagem selecionada sempre que ela for alterada
    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
      setPreviewImage(imageUrl);
    }
  }, [selectedImage]);

  const handleUpdateUser = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (token) {
        // Verifica se há uma nova imagem selecionada e a adiciona aos dados do usuário
        const updatedUserData = selectedImage
          ? {
              ...userData,
              profilePicturePath: previewImage || userData.profilePicturePath,
            }
          : userData;

        await updateUser(updatedUserData); // Passando os dados atualizados do usuário para a função updateUser
        alert("Usuário atualizado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      alert(
        "Ocorreu um erro ao atualizar o usuário. Por favor, tente novamente mais tarde."
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleChangePassword = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      password: newPassword,
    }));
    setNewPassword("");
    setShowChangePasswordModal(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const triggerFileInput = () => {
    if (selectedImageInputRef.current) {
      selectedImageInputRef.current.click();
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="title">
          <h2>Profile</h2>
        </div>
        <div className="profile-field-image">
          <label>Imagem de Perfil:</label>
          {previewImage ? (
            <img src={previewImage} alt="Profile" className="profile-image" />
          ) : (
            <img
              src={userData.profilePicturePath}
              alt="Profile"
              className="profile-image"
            />
          )}
          {/* Input de arquivo oculto */}
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
            ref={selectedImageInputRef}
          />
          <button onClick={triggerFileInput}>Alterar Imagem</button>{" "}
          {/* Botão para disparar o input de arquivo */}
        </div>
        <div className="profile-field">
          <label>Nome :</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div className="profile-field">
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="profile-field">
          <label>Senha :</label>
          <input type="password" name="password" value="*******" readOnly />
          <button onClick={() => setShowChangePasswordModal(true)}>
            Alterar Senha
          </button>
        </div>
        <button onClick={handleUpdateUser}>Salvar</button>
      </div>
      {showChangePasswordModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Alterar Senha</h3>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleChangePassword}>Salvar</button>
              <button onClick={() => setShowChangePasswordModal(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
