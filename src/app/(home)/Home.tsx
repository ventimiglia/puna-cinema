"use client";

import cx from "classnames";
import { Button, ButtonWatchList, Container, Input } from "../styles";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { useMovies, useMovieDetail } from "@/hooks/useMovies";
import { FilterBy, RawResult } from "@/service/@types";
import { List } from "./List";
import { useContext } from "react";
import { WatchlistContext } from "./Context/WatchList";
import { HomeModal } from "./Components/Modal";
import Link from "next/link";

const HomeClient = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterBy, setFilterBy] = useState<FilterBy | null>(FilterBy.POPULAR);
  const [movieId, setMovieId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { watchlist, setWatchlist } = useContext(WatchlistContext);
  const debouncedValue = useDebounce(searchTerm, 500);

  const {
    data: movies,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useMovies(debouncedValue, filterBy);

  const { data: movieDetail } = useMovieDetail(movieId, !!modalOpen);

  const handleToggleWatchlist = (id: number) => {
    const alreadyInWatchlist = watchlist.some(
      (item: RawResult) => item.id === id
    );

    if (alreadyInWatchlist) {
      const newWatchlist = watchlist.filter(
        (item: RawResult) => item.id !== id
      );
      setWatchlist(newWatchlist);
    } else {
      const movieToAdd = movies?.pages
        .flatMap((page) => page.results)
        .find((movie) => movie?.id === id);
      if (movieToAdd) {
        setWatchlist([...watchlist, movieToAdd]);
      }
    }
  };

  const handleFilter = (filterBy: FilterBy) => {
    setFilterBy(filterBy);
    setSearchTerm("");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setFilterBy(null);
    if (e.target.value === "") {
      setFilterBy(FilterBy.POPULAR);
    }
  };

  const handleOpenModal = (id: number) => {
    setModalOpen(true);
    setMovieId(id);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <header className="grid grid-cols-12 gap-4 mb-4 grid-flow-row">
        <Link href="/watchlist" className="col-span-12 lg:col-span-2">
          <Button className="list">Watchlist</Button>
        </Link>
        <Input
          name="search"
          type="text"
          placeholder="Harry Potter..."
          autoComplete="off"
          onChange={handleSearch}
          value={searchTerm}
          className="col-span-12 lg:col-span-4"
        />
        <Button
          className={cx("col-span-4 lg:col-span-2", {
            active: filterBy === FilterBy.POPULAR,
          })}
          onClick={() => handleFilter(FilterBy.POPULAR)}
        >
          Popular
        </Button>
        <Button
          className={cx("col-span-4 lg:col-span-2", {
            active: filterBy === FilterBy.VOTE_AVERAGE,
          })}
          onClick={() => handleFilter(FilterBy.VOTE_AVERAGE)}
        >
          Top Rated
        </Button>
        <Button
          className={cx("col-span-4 lg:col-span-2", {
            active: filterBy === FilterBy.RELEASE_DATE,
          })}
          onClick={() => handleFilter(FilterBy.RELEASE_DATE)}
        >
          Now Playing
        </Button>
      </header>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <List
          results={movies}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          handleOpenModal={handleOpenModal}
          filterApplied={filterBy}
        />
      )}

      {!!movieDetail && (
        <HomeModal
          movie={movieDetail}
          handleCloseModal={handleCloseModal}
          modalOpen={modalOpen}
        >
          {watchlist?.some((movie) => movie.id === movieDetail.id) ? (
            <ButtonWatchList
              className="bg-red-500 hover:bg-red-700"
              onClick={() => handleToggleWatchlist(movieDetail.id)}
            >
              Remove from watchlist
            </ButtonWatchList>
          ) : (
            <ButtonWatchList
              className="bg-green-500 hover:bg-green-700"
              onClick={() => handleToggleWatchlist(movieDetail.id)}
            >
              Add to watchlist
            </ButtonWatchList>
          )}
        </HomeModal>
      )}
    </Container>
  );
};

export default HomeClient;
