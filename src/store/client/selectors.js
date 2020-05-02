export const getClient = state => state.client.data
export const getClientId = state => getClient(state).identifier
export const getClientError = state => state.client.error
export const getClientFirstName = state => getClient(state).first_name
export const getClientLastName = state => getClient(state).last_name
export const getClientFullName = state =>
  `${getClientFirstName(state)} ${getClientLastName(state)}`
export const getClientEmail = state => getClient(state).email
export const getClientPhone = state => getClient(state).phone
