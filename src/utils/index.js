import axios from 'axios'
import {print} from 'graphql/language/printer'

const url = {
  prod: 'https://little-jesus-api.now.sh',
  prod2020: 'https://little-jesus-api-git-lj2020.min1.now.sh',
  dev: 'https://little-jesus-api-git-develop.min1.now.sh',
  local: 'http://localhost:5050',
}
let BASEURL = url.dev

export function setApiServer() {
  if (window.location.host.indexOf('localhost') === 0) {
    BASEURL = url.local
  }
  global.logger.info('api-server: ' + BASEURL)
}

export async function req(query, variables = {}) {
  let config = {headers: {'Content-Type': 'application/json'}}
  const result = await axios.post(BASEURL, {query: print(query), variables}, config)
  if (result.data.errors) {
    throw result.data.errors
  }
  return result.data.data
}
