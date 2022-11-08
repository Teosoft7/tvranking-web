const API_URL = "https://tvranking-api-7v3yuiawsa-uw.a.run.app";

export const getRatings = async (date, area, category) => {
  const dateParameter = `${date.substring(0, 4)}${date.substring(
    5,
    7
  )}${date.substring(8, 10)}`;

  let url = `${API_URL}/ratings`;
  url += `?date=${dateParameter}`;
  url += `&category=${category}`;
  url += `&area=${area}`;

  const res = await fetch(url);
  const data = res.json();

  return data;
};
