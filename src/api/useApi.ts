import { useCallback, useState } from "react";
import axios from "axios";

type MethodType = "GET" | "POST" | "PUT";

export default function useApi<Targs, TResponse>(
  method: MethodType,
  url: string
) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const doNetworkCall = useCallback(
    (args: Targs) => {
      function doIt() {
        setIsLoading(true);
        setError(null);
        setData(null);
        return axios({
          method: method,
          url: url,
          data: {
            ...args,
          },
        })
          .then((response) => {
            setIsLoading(false);
            console.log(response);
            const payload = response.data as TResponse;
            setData(payload);
            return payload;
          })
          .catch((err) => {
            setIsLoading(false);
            setData(null);
            setError(err);
            console.log(err);
            return null;
          });
      }
      try {
        return doIt();
      } catch (err) {
        setIsLoading(false);
        setData(null);
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error(JSON.stringify(err)));
        }
        console.log(err);
        return null;
      }
    },
    [method, url]
  );
  return { doNetworkCall, isLoading, data, error };
}
