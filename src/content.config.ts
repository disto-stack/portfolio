import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		id_number: z.string(),
		year: z.number(),
		badge: z.string(),
		title: z.string(),
		short_description: z.string(),
		stack: z.array(z.string()),
		highlight_color: z.string().optional(),
		role: z.string(),
		type: z.string()
	})
});

export const collections = {
	projects: projectsCollection
};
