import "server-only"

import { createClient } from "@sanity/client"

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export const sanityConfig = {
  projectId: requireEnv("SANITY_PROJECT_ID"),
  dataset: requireEnv("SANITY_DATASET"),
  apiVersion: process.env.SANITY_API_VERSION ?? "2024-01-01",
  token: requireEnv("SANITY_TOKEN"),
} as const

export const sanityClient = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  token: sanityConfig.token,
  useCdn: false,
})
