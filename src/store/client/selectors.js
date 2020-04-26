export const getClient = state => state.client.data
export const getClientId = state => getClient(state).identifier
export const getClientError = state => state.client.error
export const getClientFullName = state =>
  `${getClient(state).first_name} ${getClient(state).last_name}`
export const getClientEmail = state => getClient(state).email
