// import { z } from 'zod';

// const Schema = z.object({
//     name: z.string(),
//     email: z.string().email(),
//     password: z.string().nullable(),
// });

// export type SchemaType = z.infer<typeof Schema>;~

export interface SchemaType {
    repository:     string;
    authtype:       string;
};