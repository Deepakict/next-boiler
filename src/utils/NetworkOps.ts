import axios, {AxiosError, AxiosRequestHeaders, AxiosResponse} from 'axios';
import {debugLog} from './Logger';
import {ApiEndPoints} from '@/factory/api-endpoints';

const TAG = 'NetworkOps: ';

export interface CustomAxiosResponse extends AxiosResponse {
  data: {
    code: string;
    message: string;
  };
}

export interface CommonHeaderProperties extends AxiosRequestHeaders {
  Authorization: string;
  'x-os': string;
  'x-os-version': string;
  'x-app-version': string;
  'x-device-id': string;
  'x-lang': 'en';
  'X-Request-Id': string;
  'X-CLIENT-ID': string;
}

const unAuthRoutes = [ApiEndPoints.todo.getTodos];

function getCommonHeaders() {
  return {
    'x-os': 'android',
    'x-os-version': 'x',
    'x-app-version': 'x',
    'x-device-id': 'x',
    'X-Request-Id': 'x',
    'X-CLIENT-ID': 'xx',
  };
}

const API_TIMEOUT = 25000;
const instance = axios.create({
  timeout: API_TIMEOUT,
});

instance.interceptors.request.use(
  config => {
    let newConfig = config;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const url = config.url!;
    try {
      const isTokenRequired = !unAuthRoutes.includes(url);
      const commonHeaders = getCommonHeaders();

      if (isTokenRequired) {
        const token = '';
        newConfig = {
          ...newConfig,
          headers: {
            ...newConfig.headers,
            ...commonHeaders,
            Authorization: `Bearer ${token}`,
          } as CommonHeaderProperties,
          timeout: API_TIMEOUT,
        };
      } else {
        debugLog(TAG, 'creating headers without token');
        newConfig = {
          ...newConfig,
          headers: {
            ...newConfig.headers,
            ...commonHeaders,
          } as CommonHeaderProperties,
          timeout: API_TIMEOUT,
        };
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(TAG, `xError in interceptor request', ${e.message}`);
      }
    }
    return newConfig;
  },
  (error: AxiosError) => {
    console.error(TAG, `yError in interceptor request', ${error.message}`);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res: CustomAxiosResponse) => {
    try {
      const {data} = res;
      const {code, message} = data;
      if (code === '00000') {
        debugLog(TAG, `${code} - ${message} - ${res.config.url ?? ''}`);
        return res as AxiosResponse;
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error(TAG, `zError in interceptor response ${e.message}`);
      }
    }
    return res as AxiosResponse;
  },
  error => {
    return getErrorResponse(error);
  }
);

export function getErrorResponse(error: {response?: CustomAxiosResponse}) {
  const response = error?.response as CustomAxiosResponse;
  let code = response?.data?.code || '';
  let message = response?.data?.message || '';
  const url = response?.config?.url ?? '';
  debugLog(TAG, `error - ${url} - ${code} - ${message}}`);

  if (code.length === 0) {
    code = '00INE';
    message = 'Something went wrong';
  }
  return {
    data: {
      code,
      message,
    },
  } as AxiosResponse;
}

export const getHeaderWithIdempotencyKey = (idempotencyKey: string) => {
  const token = '';
  return {
    headers: {
      'idempotency-key': idempotencyKey,
      Authorization: `Bearer ${token}`,
    },
  };
};

export const makeGetRequest = <T>(URL: string) => instance.get<T>(URL);
export const makePostRequest = <T>(URL: string, data: object | undefined) =>
  instance.post<T>(URL, data);
export const makePutRequest = <T>(URL: string, data: object | undefined) =>
  instance.put<T>(URL, data);
export const makePatchRequest = <T>(URL: string, data: object | undefined) =>
  instance.patch<T>(URL, data);
export const makeDeleteRequest = <T>(URL: string) => instance.delete<T>(URL);
