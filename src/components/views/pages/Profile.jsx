import React from "react";
import Header from "../../helpers/Header";
import { usuarios } from "../../config/dataBase";
import './Profile.css'

const Profile = () => {
  return (
    <div className="container">
      <Header />
      <section className="card">
        <section className="imagen">
          <img src="/public/user.avif" alt="" />
        </section>
        <div className="informacion">
          <section>
            {usuarios.map((usuario) => (
              <section key={usuario.user}>
                <h4>Empresa: {usuario.companyName}</h4>
                <h4>Contratacion: {usuario.hireDate}</h4>
                <h4>Salario: {usuario.salary}</h4>
                <h4>Nombre: {usuario.name}</h4>
                <h4>Correo: {usuario.email}</h4>
              </section>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Profile;
