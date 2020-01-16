import React from "react";

import "./styles.css";

function DevItem({ dev, remove }) {
  async function handleRemove(e) {
    e.preventDefault();
    await remove(dev._id);
  }

  return (
    <li className="dev-item">
      <button className="remove" onClick={handleRemove}>
        <i className="fa fa-trash-o"></i>
      </button>
      <button className="edit">
        <i className="fa fa-edit"></i>
      </button>
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_userName}`}>
        Acessar perfil no Github
      </a>
    </li>
  );
}

export default DevItem;
