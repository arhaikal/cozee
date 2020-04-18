import { baseApi } from "./base"

export async function getAvailableTimes(data) {
  const response = await baseApi.get("available_times/", {
    params: {
      from: data.from,
      to: data.to,
      duration: data.duration,
    },
  })
  return response.data
}
