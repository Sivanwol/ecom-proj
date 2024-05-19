export { auth as authMiddleware } from '@app/lib/auth';
export { rateLimitMiddleware as rateLimit } from '@app/middlewares/rate-limiter-handler';
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};