import React, { useEffect, useState } from "react";

import api from "./services/api";
import DevItem from "./components/DevItem/index.jsx";
import DevForm from "./components/DevForm/index.jsx";

import "font-awesome/css/font-awesome.min.css";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [devs, setDevs] = useState([]);
  const [removeDevs, setRemoveDevs] = useState("");

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, [removeDevs]);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  async function handleRemoveDev(id) {
    setRemoveDevs(id);
    await api.delete(`/devs/${id}`);
    setRemoveDevs("");
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} remove={handleRemoveDev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
