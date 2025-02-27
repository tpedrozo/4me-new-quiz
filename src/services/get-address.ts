export async function getAddress(zipcode: string) {
  const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`);

  return response.json();
}
