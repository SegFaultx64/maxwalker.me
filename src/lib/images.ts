const basePath = process.env.NODE_ENV === 'production' ? '/maxwalker.me' : '';

export function img(path: string): string {
  return `${basePath}${path.startsWith('/') ? path : '/' + path}`;
}
