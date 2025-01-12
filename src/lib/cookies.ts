type CookieOptions = {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
};

export const setCookie = (
  name: string,
  value: string,
  options: CookieOptions = {}
) => {
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (options.path) cookie += `; path=${options.path}`;
  if (options.expires) cookie += `; expires=${options.expires.toUTCString()}`;
  if (options.maxAge) cookie += `; max-age=${options.maxAge}`;
  if (options.domain) cookie += `; domain=${options.domain}`;
  if (options.secure) cookie += "; secure";
  if (options.httpOnly) cookie += "; httpOnly";
  if (options.sameSite) cookie += `; samesite=${options.sameSite}`;

  document.cookie = cookie;
};

export const getCookie = (name: string): string | null => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=").map((c) => c.trim());
    if (cookieName === encodeURIComponent(name)) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};

export const deleteCookie = (name: string) => {
  setCookie(name, "", { expires: new Date(0) });
};
