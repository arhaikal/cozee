import { baseApi } from "./base"

export async function getAllServices() {
  const response = await baseApi.get("services")
  return response.data
}

export async function postServices(id, data) {
  const response = await baseApi.post(`bookings/${id}/services`, data)
  return response.data
}
