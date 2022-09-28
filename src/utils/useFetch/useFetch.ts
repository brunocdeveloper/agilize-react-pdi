import { useState } from "react";
import { api } from "../Axios/axios";

type Methods = "get" | "post" | "put" | "delete";

export interface UseFetchProps {
  onSuccess?: (data: any) => any;
  onError?: (data: any) => any;
}

export const useFetch = (
  endpoint: string,
  method: Methods,
  props: UseFetchProps = {}
) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const { onSuccess, onError } = props;

  const doFetch = async (body: any = undefined) => {
    setIsLoading(true);
    try {
      const { data } = await api[method](endpoint);
      setData(data.data);

      if (onSuccess) {
        onSuccess(data?.data);
      }
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
    setIsLoading(false);
  };

  return {
    doFetch,
    data,
    setData,
    isLoading,
  };
};
