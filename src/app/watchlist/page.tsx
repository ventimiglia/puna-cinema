'use client'

import { useContext } from "react";
import { WatchlistContext } from "../(home)/Context/WatchList";
import { Container } from "../styles";
import Card from "../(home)/Card";

const WatchlistClient = () => {
  const { watchlist } = useContext(WatchlistContext)
  return (
    <Container>
      <h1 className="text-4xl mb-4">
        Watchlist
      </h1>
      {watchlist?.reverse().map((movie) => (
        <Card
          key={movie.id}
          movie={movie}
          filterApplied={null}
        />
      ))}
    </Container>
  )
}

export default WatchlistClient