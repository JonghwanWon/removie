import axios from 'axios';

import {
  PATH_BASE, PARAM_LIMIT, PARAM_SORT, PARAM_GENRE, PARAM_PAGE,
} from 'components/Constant';

const FetchToServer = (limit, sort, genre, page, func) => {
  if (typeof this.source !== typeof undefined) {
    this.source.cancel('canceled due to new request');
  }

  this.source = axios.CancelToken.source();

  return axios(
    `${PATH_BASE}?${PARAM_LIMIT + limit}&${PARAM_SORT + sort}&${PARAM_GENRE
      + genre}&${PARAM_PAGE}${page}`,
    { cancelToken: this.source.token },
  )
    .then(result => func(result.data.data))
    .catch((err) => {
      if (axios.isCancel(err)) {
        console.log('Request canceled', err);
      } else {
        console.log(err);
      }
    });
};

const FetchToServerDetail = (id, func) => {
  if (typeof this.source !== typeof undefined) {
    this.source.cancel('canceled due to new request');
  }

  this.source = axios.CancelToken.source();

  return axios(`https://yts.am/api/v2/movie_details.json?movie_id=${id}`, {
    cancelToken: this.source.token,
  })
    .then(result => func(result.data.data))
    .catch((err) => {
      if (axios.isCancel(err)) {
        console.log('Request canceled', err);
      } else {
        console.log(err);
      }
    });
};

export { FetchToServer, FetchToServerDetail };
