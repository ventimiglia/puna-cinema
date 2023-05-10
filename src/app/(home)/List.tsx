import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";
import { FilterBy, RawMoviesResponse, RawResult } from "@/service/@types";
import { InfiniteData } from "react-query";
import { Fragment } from "react";

type Props = {
  results?: InfiniteData<RawMoviesResponse>;
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  handleOpenModal: (id: number) => void;
  filterApplied: FilterBy | null;
};

export const List = ({
  results,
  fetchNextPage,
  hasNextPage,
  handleOpenModal,
  filterApplied
}: Props) => (
  <InfiniteScroll
    dataLength={results ? results?.pages.length : 0}
    next={() => fetchNextPage()}
    hasMore={!!hasNextPage}
    loader={<h4>Loading...</h4>}
    endMessage={<h4>End</h4>}
  >
    {results?.pages?.map((group, i) => (
      <Fragment key={i}>
        {group?.results?.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            onClick={(e) => {
              handleOpenModal(movie.id);
            }}
            filterApplied={filterApplied}
          />
        ))}
      </Fragment>
    ))}
  </InfiniteScroll>
);
