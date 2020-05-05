import { baseApi } from "./base"

export async function getAllServices() {
  const response = await baseApi.get("services")
  return response.data
}

export async function postService(id, data) {
  const response = await baseApi.post(`bookings/${id}/services`, data)
  return response.data
}

export async function deleteService(booking_id, service_id) {
  const response = await baseApi.delete(
    `bookings/${booking_id}/services/${service_id}`
  )
  return response.data
}
