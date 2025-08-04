export function ValidatePasswordRequirements(password: string): boolean {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;
  let conditions = new RegExp(pattern);
  return pattern.test(password);
}
