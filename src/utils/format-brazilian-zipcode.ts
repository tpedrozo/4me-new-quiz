export function brazilianZipcode(input: string) {
  let value = input.replace(/\D/g, "");

  if (value.length > 5) {
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  }

  return value;
}
