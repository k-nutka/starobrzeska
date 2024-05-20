export function apartmentLoader({ params: { apartmentId } }) {
  return fetch(`http://localhost:3001/apartments/${apartmentId}`);
}
