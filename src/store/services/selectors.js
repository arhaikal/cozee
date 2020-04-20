export const selectedHomeServiceDuration = state =>
  (state.services.selectedData &&
    state.services.selectedData[0].options[0].duration) ||
  0
