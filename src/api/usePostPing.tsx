import useApiPostItem from "./useApiPostItem";

import { GARDYN_AP_IP } from "./config";

interface PostPingArgs {
  // no args
}

export interface PostPingResponse {
  code: number;
  data: {
    status: string;
  };
  page: string;
}

export function usePostPing() {
  return useApiPostItem<PostPingArgs, PostPingResponse>(
    `${GARDYN_AP_IP}/ping`
  );
}
