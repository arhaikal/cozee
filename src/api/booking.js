import { baseApi } from "./base"

export async function postBooking(data) {
  const response = await baseApi.post("bookings/", data)
  return response.data
}

export async function patchBooking(id, data) {
  const response = await baseApi.patch(`bookings/${id}`, data)
  return response.data
}

export async function getBooking(id) {
  const response = await baseApi.get(`bookings/${id}`)
  return response.data
}
