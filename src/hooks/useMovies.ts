"use client";

import { FilterBy, RawMoviesResponse } from "@/service/@types";
import { getMovies, getMovieById } from "@/service/api";
import { useQuery, useInfiniteQuery } from "react-query";

export const useMovies = (search: string, filter: FilterBy | null) => {
  const result = useInfiniteQuery(
    ["movies", search, filter],
    ({ pageParam = 1 }) => {
      const param = search ? `/search/movie?query=${search}`:`/movie/${filter}`;
      return getMovies(param, pageParam)
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.page === lastPage.total_pages) return false;
        return lastPage.page + 1;
      },
      enabled: !!search || !!filter,
      refetchOnWindowFocus: false,
    }
  );

  return result;
}

export const useMovieDetail = (id: number | null, enabled?: boolean) => {
  return useQuery(
    ["movie", id],
    () => getMovieById(id),
    { enabled: enabled }
  );
}
