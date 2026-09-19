import "dotenv/config";

function parseOrigins(raw: string | undefined): string[] {
  const fallback = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
  ];

  if (!raw || !raw.trim()) {
    return fallback;
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
