import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "weather",
  initialState: {
    error: "",
    fetchingData: false,
    weatherData: {},
  },
  reducers: {
    changeError: (state, action) => {
      state.error = action.payload;
    },
    changeWeather: (state, action) => {
      state.weatherData = action.payload;
    },
    changeFetchingData: (state, action) => {
      state.fetchingData = action.payload;
    },
  },
});

export const { changeError, changeWeather, changeFetchingData } = slice.actions;

export const selectWeatherData = (state) => {
  return state.weather.weatherData;
};

export const selectFetchingData = (state) => {
  return state.weather.fetchingData;
};

export const selectError = (state) => {
  return state.weather.error;
};

export default slice.reducer;
