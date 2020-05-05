export const homeServiceDuration = state =>
  (state.services.selectedData &&
    state.services.selectedData.find(x => x.identifier === "home_cleaning")
      .service_option.duration) ||
  0
