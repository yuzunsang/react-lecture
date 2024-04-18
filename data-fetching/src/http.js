export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places"); // valid URL
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}
