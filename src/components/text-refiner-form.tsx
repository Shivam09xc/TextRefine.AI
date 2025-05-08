'use client';

import type { RefineTextInput } from '@/ai/flows/refine-text';
import { refineText } from '@/ai/flows/refine-text';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  text: z.string().min(1, { message: 'Please enter some text to refine.' }),
  tone: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export default function TextRefinerForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [refinedText, setRefinedText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
      tone: '',
    },
  });

  async function onSubmit(values: FormSchema) {
    setIsLoading(true);
    setRefinedText(null);
    setError(null);

    try {
      const result: RefineTextInput = { text: values.text };
      if (values.tone && values.tone.trim() !== '') {
        result.tone = values.tone;
      }
      const output = await refineText(result);
      setRefinedText(output.refinedText);
      toast({
        title: 'Success!',
        description: 'Text refined successfully.',
      });
    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
      setError(errorMessage);
      toast({
        title: 'Error',
        description: `Failed to refine text: ${errorMessage}`,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Refine Your Text</CardTitle>
          <CardDescription>Enter text and an optional tone, and let AI enhance it for clarity and conciseness.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Text to Refine</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your text here..."
                        className="min-h-[150px] resize-y rounded-md focus:ring-primary focus:border-primary transition-shadow"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Tone (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g., formal, friendly, persuasive" 
                        {...field} 
                        className="rounded-md focus:ring-primary focus:border-primary transition-shadow"
                      />
                    </FormControl>
                    <FormDescription>
                      Leave blank for a general refinement.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full rounded-md transition-transform hover:scale-[1.02]" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Refining...
                  </>
                ) : (
                  'Refine Text'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && !isLoading && (
        <Card className="mt-6 bg-destructive/10 border-destructive rounded-xl animate-in fade-in duration-300">
          <CardHeader>
            <CardTitle className="text-destructive">Refinement Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">{error}</p>
          </CardContent>
        </Card>
      )}

      {refinedText && !isLoading && (
        <Card className="mt-6 rounded-xl animate-in fade-in duration-300">
          <CardHeader>
            <CardTitle>Refined Text</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-foreground">{refinedText}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
