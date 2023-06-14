export const dev = typeof window !== 'undefined' && window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'lionbolddesigns.us.auth0.com'
export const clientId = '9mHGBLlYdEzUdJ9ry3Is6b2lHLr6SRXX'
export const audience = 'https://LionBoldDesigns.com'
