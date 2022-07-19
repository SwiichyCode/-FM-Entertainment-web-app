import React from "react";
import useFetch from "use-http";
import { HomeWrapper } from "./Home.style";

export default function Home() {
  const options = {}; // these options accept all native `fetch` options
  // the last argument below [] means it will fire onMount (GET by default)
  const {
    loading,
    error,
    data = [],
  } = useFetch("http://localhost:8080/movies", options, []);

  console.log(data);
  return <HomeWrapper>Home</HomeWrapper>;
}
