import useApi from "./useApi";

export default function useApiPostItem<Targs, TResponse>(url: string) {
  const { doNetworkCall, isLoading, data, error } = useApi<Targs, TResponse>(
    "POST",
    url
  );
  return { createItem: doNetworkCall, isLoading, data, error };
}
