import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

import { getAllStarships } from "./services/sw-api";
import StarshipList from "./components/StarshipsList";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllStarships();
      setData(res.data.results);
      console.log(res.data.results);
    };
    fetchData();
  }, []);

  return (
    <Container fluid="md">{data && <StarshipList data={data} />}</Container>
  );
}

export default App;
