import { baseApi } from "./base"

export async function postClient(id, data) {
  const response = await baseApi.post(`bookings/${id}/clients`, data)
  return response.data
}

export async function patchClient(id, data) {
  const response = await baseApi.patch(`clients/${id}/`, data)
  return response.data
}
