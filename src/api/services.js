import { baseApi } from "./base"

export async function getAllServices() {
  const response = await baseApi.get("services")
  return response.data
}
