export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return emailRegex.test(email);
}

export function isSuspiciousEmail(email: string) {
  const localPart = email.split("@")[0];

  // Too many dots
  if ((localPart.match(/\./g) || []).length > 3) return true;

  // Too many numbers
  if ((localPart.match(/\d/g) || []).length > 4) return true;

  // Very short segments
  const segments = localPart.split(".");
  if (segments.some(seg => seg.length <= 1)) return true;

  return false;
}