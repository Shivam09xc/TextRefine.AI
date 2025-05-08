// src/ai/flows/refine-text.ts
'use server';

/**
 * @fileOverview AI-powered text refinement flow for improved clarity and tone adjustment.
 *
 * - refineText - A function that refines the input text.
 * - RefineTextInput - The input type for the refineText function.
 * - RefineTextOutput - The return type for the refineText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineTextInputSchema = z.object({
  text: z.string().describe('The text to be refined.'),
  tone: z
    .string()
    .optional()
    .describe('The desired tone of the refined text (e.g., formal, informal, friendly).'),
});

export type RefineTextInput = z.infer<typeof RefineTextInputSchema>;

const RefineTextOutputSchema = z.object({
  refinedText: z.string().describe('The refined text output.'),
});

export type RefineTextOutput = z.infer<typeof RefineTextOutputSchema>;

export async function refineText(input: RefineTextInput): Promise<RefineTextOutput> {
  return refineTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'refineTextPrompt',
  input: {schema: RefineTextInputSchema},
  output: {schema: RefineTextOutputSchema},
  prompt: `Refine the following text for clarity and conciseness, adjusting the tone to be {{tone}}:

{{{text}}}`,
});

const refineTextFlow = ai.defineFlow(
  {
    name: 'refineTextFlow',
    inputSchema: RefineTextInputSchema,
    outputSchema: RefineTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
