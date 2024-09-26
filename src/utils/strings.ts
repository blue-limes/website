export function addTrailingSlash(path: string): string {
  if (!path.endsWith("/")) {
    path += "/";
  }
  return path;
}

export function readingTime(post: string): number {
  const wpm = 225;
  const words = post.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
