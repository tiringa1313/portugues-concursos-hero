// src/lib/pixel.ts
declare global {
  interface Window { fbq?: (...args: any[]) => void }
}
export function track(event: string, data?: Record<string, any>) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq('track', event, data || {});
  }
}
export function initPurchase(value: number, currency = 'BRL', data: Record<string, any> = {}) {
  track('Purchase', { value, currency, ...data });
}
