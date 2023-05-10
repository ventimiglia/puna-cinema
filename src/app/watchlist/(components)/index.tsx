"use client"

import Card from "@/app/(home)/Card"
import { WatchlistContext } from "@/app/(home)/Context/WatchList"
import { Container } from "@/app/styles"
import { useContext } from "react"

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