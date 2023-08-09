import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"], // Needs to be an array
    queryFn: getCabins, // Funtion for fetching data from API
  });

  return { isLoading, cabins, error };
}
