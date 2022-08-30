/**
 *
 */

import axios from 'axios';
import data from '../constans/data';

const api = axios.create({
  baseURL: data.BASE_URL,
});
/**
  intercept any error responses from the api
  and check if the token is no longer valid.
  ie. Token has expired or user is no longer
  authenticated.
  logout the user if the token has expired
 **/

/* Log api requests */
api.interceptors.request.use(
  async request => {
    //  if (!request || !request.headers) {
    //    return request;
    //  }

    //  if (!accessToken) {
    //    const data = (await AsyncStorage.getItem('userInfo'))!;
    //    const newData = JSON.parse(data);

    //    if (newData?.token) {
    //      accessToken = newData?.token;
    //    }
    //  }

    //  if (accessToken) {
    //    request.headers['token'] = `${accessToken}`;
    //  }
    // console.log('...accessToken from api',accessToken);

    if (__DEV__) {
      let logObj = {};
      if (request.method === 'get') {
        logObj = {...request};
        // Prevent unnecessary properties from logging
        delete logObj['url'];
        delete logObj['method'];
        delete logObj['headers'];
        delete logObj['baseURL'];
        delete logObj['transformRequest'];
        delete logObj['transformResponse'];
        delete logObj['timeout'];
        delete logObj['xsrfCookieName'];
        delete logObj['xsrfHeaderName'];
        delete logObj['maxContentLength'];
        delete logObj['maxBodyLength'];
      } else if (request.method === 'post') {
        logObj = {...request?.data};
      } else {
        logObj = {...request};
      }

      if (request.baseURL) {
        console.log(
          '>>> Endpoint Request',
          request.method,
          request?.baseURL + request?.url,
          'token' + ':' + accessToken,
          JSON.stringify(logObj),
          '\n',
        );
      }
    }
    return request;
  },
  err => {
    return Promise.reject(err);
  },
);

/* Log api response & reset auth states if Access-Token is no longer valid */
api.interceptors.response.use(
  response => {
    console.log(
      '*** Endpoint Results',
      response.config.method,
      response.request?.responseURL,
      JSON.stringify(response?.data),
      '\n',
    );
    return response;
  },
  err => {
    // // Logout user if Access-Token no longer valid
    // if (err.response.data?.data?.errors?.errorCode === 999) {
    //   store.dispatch(resetAuth(err.response.data?.data?.errors?.message));
    // }
    console.log(
      '??? Endpoint Response Error',
      err.config.method,
      err.request.responseURL,
      JSON.stringify(err?.response?.data),
      '\n',
    );
    return Promise.reject(err);
  },
);

export default api;
