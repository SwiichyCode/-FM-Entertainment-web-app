import React from "react";
import { useOutletContext } from "react-router-dom";
import useFetch from "use-http";
import Caroussel from "../../components/Caroussel/Caroussel";
import { HomeWrapper } from "./Home.style";

export default function Home() {
  const options = {}; // these options accept all native `fetch` options
  // the last argument below [] means it will fire onMount (GET by default)
  const {
    loading,
    error,
    data = [],
  } = useFetch("http://localhost:8080/movies", options, []);
  const [value, setValue] = useOutletContext();

  return (
    <HomeWrapper>
      <Caroussel data={data} />
    </HomeWrapper>
  );
}
