import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const [userForm, setUserForm] = useState({ name: '', password: '' });
  const { user, login } = useAuthContext();
  const navigate = useNavigate(); // hook para redirigir

  // si ya está logueado lo redirijo
  if (user) {
    return <Navigate to="/admin/alta-productos" />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // suponemos que login devuelve true/false según si se autentica correctamente
    const success = await login(userForm.name, userForm.password);

    if (success) {
      navigate('/admin/alta-productos');
    } else {
      alert('Credenciales incorrectas');
      setUserForm({ name: '', password: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>

      <div>
        <label>Nombre de usuario</label>
        <input
          type="text"
          name="name"
          value={userForm.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={userForm.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Iniciar sesión</button>
    </form>
  );
};
