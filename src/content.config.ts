import { file, glob } from "astro/loaders";
import { defineCollection, z, reference } from "astro:content";

const tags = defineCollection({
  loader: file("src/content/tags.json"),
  schema: z.object({
    id: z.string()
  })
});

const posts = defineCollection({
  loader: glob({ base: "src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    description: z.string(),
    tags: z.array(
      reference("tags")
    ),
    draft: z.boolean().optional().default(false),
    image: z.string().optional(),
  })
});

const projects = defineCollection({
  loader: glob({ base: "src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    link: z.string().url().optional(),
  })
});

export const collections = { tags, posts, projects };