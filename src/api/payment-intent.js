import { baseApi } from "./base"

export async function postPaymentIntent(id) {
  const response = await baseApi.post(`bookings/${id}/payment_intents`)
  return response.data
}

export async function getPaymentIntentKey() {
  const response = await baseApi.get("stripe/api_key")
  return response.data
}
