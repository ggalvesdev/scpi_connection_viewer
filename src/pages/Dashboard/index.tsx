import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import axios from "axios";

import { Form, Error, Table } from "./styles";

import "./styles.css";

const Dashboard: React.FC = () => {
  const [hostName, setHostName] = useState(
    "l4465-tmn.hci.eu1.hana.ondemand.com"
  );
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [inputError, setInputError] = useState("");

  // const [repositories, setRepositories] = useState<Repository[]>(() => {
  //   const storagedRepositories = localStorage.getItem(
  //     "@GithubExplorer:repositories"
  //   );

  //   if (storagedRepositories) {
  //     return JSON.parse(storagedRepositories);
  //   } else {
  //     return [];
  //   }
  // });

  // useEffect(() => {
  //   localStorage.setItem(
  //     "@GithubExplorer:repositories",
  //     JSON.stringify(repositories)
  //   );
  // }, [repositories]);

  async function handleConnectSCPI(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!hostName || !user || !pass) {
      setInputError("Digite os dados de conexão");
      return;
    }

    try {
      const token = Buffer.from(`${user}:${pass}`, "utf8").toString("base64");

      var myHeaders = new Headers();

      myHeaders.append("Authorization", `Basic ${token}`);
      myHeaders.append("Content-Type", "application/json");

      axios.defaults.headers.common["Authorization"] = `Basic ${token}`;
      axios.defaults.headers.common["InvalidateCache"] = true;
      axios.defaults.headers.post["Content-Type"] = "application/json";

      const response = await axios(
        `http://localhost:8010/proxy/api/v1/IntegrationConnections?$expand=IntegrationFlows&$filter=ResolvedConnection eq true&$inlinecount=allpages&$format=json`
      );

      console.log("[RESPONSE]", response);

      setInputError("");
    } catch (err) {
      console.log(err);
      setInputError("Erro ao conectar SCPI");
    }

    // try {
    //   const repo = repositories.find((repo) => repo.full_name === newRepo);

    //   if (!repo) {
    //     const response = await api.get<Repository>(`repos/${newRepo}`);
    //     const repository = response.data;

    //     setRepositories([...repositories, repository]);

    //     setInputError("");
    //   }
    // } catch (err) {
    //   setInputError("Erro na busca do repositório");
    // }

    // setNewRepo("");
  }

  return (
    <>
      <div className="container">
        <div className="leftContainer">
          <Form onSubmit={handleConnectSCPI}>
            <strong>Parâmetros de conexão</strong>
            <input
              value={hostName}
              placeholder="Host do tenant. ex: l99999-tmn.hci.eu1.hana.ondemand.com"
              onChange={(e) => setHostName(e.target.value)}
            />
            <input
              value={user}
              placeholder="ID de utilizador SAP"
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              value={pass}
              type="password"
              placeholder="Senha do utilizador SAP"
              onChange={(e) => setPass(e.target.value)}
            />
            <button type="submit">Conectar</button>
          </Form>

          {inputError && <Error>{inputError}</Error>}

          <Table>
            <tr>
              <th>Item</th>
              <th>Sender</th>
              <th>Receiver</th>
            </tr>
            <tr>
              <td>1</td>
              <td>l4465-tmn.hci.eu1.hana.ondemand.com</td>
              <td>pteccprd-1233</td>
            </tr>
            <tr>
              <td>2</td>
              <td>l4465-tmn.hci.eu1.hana.ondemand.com</td>
              <td>pteccprd-1233</td>
            </tr>
          </Table>
        </div>
        <div className="rightContainer">
          <Table>
            <thead>
              <tr>
                <th colSpan={3}>
                  Connection #1 between l4465-tmn.hci.eu1.hana.ondemand.com and
                  pteccprd-1233 found in following iFlows
                </th>
              </tr>
              <tr>
                <th>iFlow ID (iFlow Name)</th>
                <th>Sender Host Type</th>
                <th>Receiver Host Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>l4465-tmn.hci.eu1.hana.ondemand.com</td>
                <td>pteccprd-1233</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      {/* <Repositories>
        {repositories.map((repository) => (
          <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories> */}
    </>
  );
};

export default Dashboard;
