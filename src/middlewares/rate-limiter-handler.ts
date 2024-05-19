import rateLimit from '@app/lib/rate-limit';
import { NextRequest, NextResponse } from 'next/server';

const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 500, // Max 500 users per second
});
export async function rateLimitMiddleware(request: NextRequest) {
    try {
        const response = NextResponse.next()
        await limiter.check(response, 10, "CACHE_TOKEN"); // 10 requests per minute
        return response;
    } catch (error) {
        return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
}