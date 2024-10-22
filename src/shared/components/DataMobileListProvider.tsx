import { useQuery } from "@tanstack/react-query";
import { fetchMobileListData } from '@api/discoverMovies'

const DataMobileListProvider = ({ children }) => {
  const { status, data, error } = useQuery({ queryKey: ['mobileList'], queryFn: fetchMobileListData });
  // Call the function passed as children with data and response
  return children(status, data, error);
};

export default DataMobileListProvider
