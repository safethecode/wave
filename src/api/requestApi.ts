import axios, { AxiosInstance, AxiosPromise } from 'axios';
import type * as Api from 'common';

interface requestApiOptions {
  /**
   * Axios Instance
   */
  readonly client: AxiosInstance;
  /**
   * Get TodoList API
   *
   * @type {todoResponse}
   * @method GET
   */
  readonly getTodoList: () => AxiosPromise<Api.todoResponse>;
}

export const Client = (): requestApiOptions => {
  const client = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  });
  return {
    client,
    getTodoList: () => client.get('/todos'),
  };
};
