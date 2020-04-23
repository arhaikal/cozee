export const getClient = state => state.client.data
export const getClientError = state => state.client.error
export const getClientFullName = state =>
  `${getClient(state).firstName} ${getClient(state).lastName}`
export const getClientEmail = state => getClient(state).email
