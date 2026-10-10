import "dotenv/config";

function parseOrigins(raw: string | undefined): string[] {
  const local = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
  ];

  // Company site custom domains (macovin-frontend on Railway).
  const production = ["https://macovin.com", "https://www.macovin.com"];

  if (!raw || !raw.trim()) {
    return [...local, ...production];
  }

  return raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

export const config = {
  port: Number(process.env.PORT) || 3001,
  corsOrigins: parseOrigins(process.env.CORS_ORIGINS),
  contactDataDir: process.env.CONTACT_DATA_DIR || "./data",
};
