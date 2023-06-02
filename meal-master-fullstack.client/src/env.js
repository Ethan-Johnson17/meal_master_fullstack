export const dev = typeof window !== 'undefined' && window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'taylor-loves-coding.us.auth0.com'
export const clientId = 'aqOgKy6qSLFM3YJrgerZDnIKtuAdtHo7'
export const audience = 'https://taylor-codes.com'
