import {z} from 'zod';


export const CharacterSchema = z.object({
    id: z.number(),
    name: z.string(),
    ki: z.string(),
    maxKi: z.string(),
    race: z.string(),
    gender: z.string(),
    description: z.string(),
    image: z.string(),
    affiliation: z.string(),
    deletedAt: z.date().nullable(),
})


export const LinksSchema = z.object({
    first : z.string().nullable(),
    next : z.string().nullable(),
    last : z.string().nullable(),
})


export const MetaSchema = z.object({
    totalItems : z.number(),
    itemCount : z.number(),
    itemsPerPage : z.number(),
    totalPages : z.number(),
    currentPage : z.number(),
})

export const ApiResponseGetCharacters = z.object({
    items: z.array(CharacterSchema),
    links: LinksSchema,
    meta: MetaSchema,
})

export type Link = z.infer<typeof LinksSchema>
export type Character = z.infer<typeof CharacterSchema>
export type ApiResponseGetCharacter = z.infer<typeof ApiResponseGetCharacters>
