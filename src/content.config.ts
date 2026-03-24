import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ pattern: '[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      desc: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

const archive = defineCollection({
    loader: glob({ pattern: '[^_]*.md', base: "./src/blog/archive" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      desc: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

export const collections = { blog, archive };
