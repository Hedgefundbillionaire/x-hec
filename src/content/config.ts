import { defineCollection, z } from "astro:content";

const programs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    lang: z.enum(["fr", "en"]).default("fr"),
    program: z.string(),
    updated: z.string(),
    canonical: z.string(),
    alternate: z.string().optional(),
    keywords: z.array(z.string()).default([])
  })
});

export const collections = { programs };
