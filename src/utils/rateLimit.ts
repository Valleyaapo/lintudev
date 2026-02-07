type RateLimitOptions = {
  windowMs: number;
  max: number;
  cleanupIntervalMs?: number;
};

export class RateLimiter {
  private requests: Map<string, number[]>;
  private windowMs: number;
  private max: number;
  private lastCleanup: number;
  private cleanupIntervalMs: number;

  constructor(options: RateLimitOptions) {
    this.requests = new Map();
    this.windowMs = options.windowMs;
    this.max = options.max;
    // Default cleanup interval to same as window if not provided,
    // but at least 10 seconds to avoid too frequent scans if window is small
    this.cleanupIntervalMs = options.cleanupIntervalMs || Math.max(options.windowMs, 10000);
    this.lastCleanup = Date.now();
  }

  check(ip: string): boolean {
    const now = Date.now();

    // Lazy cleanup: only check if enough time has passed
    if (now - this.lastCleanup > this.cleanupIntervalMs) {
        this.cleanup(now);
    }

    const key = ip;
    const timestamps = this.requests.get(key) || [];

    // Filter timestamps in current window
    const validTimestamps = timestamps.filter(t => now - t < this.windowMs);

    if (validTimestamps.length >= this.max) {
        // If we filtered out some old ones, update the map
        if (validTimestamps.length < timestamps.length) {
            this.requests.set(key, validTimestamps);
        }
        return false;
    }

    validTimestamps.push(now);
    this.requests.set(key, validTimestamps);
    return true;
  }

  private cleanup(now: number) {
      this.lastCleanup = now;
      for (const [key, timestamps] of this.requests.entries()) {
          const valid = timestamps.filter(t => now - t < this.windowMs);
          if (valid.length === 0) {
              this.requests.delete(key);
          } else if (valid.length < timestamps.length) {
              this.requests.set(key, valid);
          }
      }
  }

  // Method to manually clear everything (useful for tests or hard reset)
  reset() {
      this.requests.clear();
      this.lastCleanup = Date.now();
  }
}
