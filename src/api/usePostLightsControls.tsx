// http://192.168.1.27:8010/version

import useApiPostItem from "./useApiPostItem";

import { GARDYN_AP_IP } from "./config";

interface PostLightsControlArgs {
  // no args
}

export interface PostLightsControlResponse {
  code: number;
  data: {
    status: string;
  };
  page: string;
}

export function usePostLightsOn() {
  return useApiPostItem<PostLightsControlArgs, PostLightsControlResponse>(
    `${GARDYN_AP_IP}/test/lights/on`
  );
}

export function usePostLightsOff() {
  return useApiPostItem<PostLightsControlArgs, PostLightsControlResponse>(
    `${GARDYN_AP_IP}/test/lights/off`
  );
}

export function usePostLightsBoost() {
  return useApiPostItem<PostLightsControlArgs, PostLightsControlResponse>(
    `${GARDYN_AP_IP}/test/lights/boost`
  );
}

export function usePostLightsLighter() {
  return useApiPostItem<PostLightsControlArgs, PostLightsControlResponse>(
    `${GARDYN_AP_IP}/test/lights/lighter`
  );
}

export function usePostLightsDimmer() {
  return useApiPostItem<PostLightsControlArgs, PostLightsControlResponse>(
    `${GARDYN_AP_IP}/test/lights/dimmer`
  );
}
