import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Por favor, indique o seu nome completo (mínimo 2 caracteres).')
    .max(100, 'O nome não pode exceder 100 caracteres.'),
  phone: z
    .string()
    .regex(/^(\+351)?[29]\d{8}$/, 'Por favor, indique um número de telefone válido em Portugal (9 dígitos).'),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Por favor, indique um endereço de e-mail válido.')
    .or(z.literal(''))
    .optional(),
  service: z.enum(
    ['cremacao-individual', 'cremacao-coletiva', 'recolha-urgente', 'duvidas-gerais'],
    { message: 'Por favor, selecione um serviço.' }
  ),
  location: z.enum(['sintra', 'pombal', 'outro'], {
    message: 'Por favor, selecione o centro de preferência.',
  }),
  message: z
    .string()
    .min(5, 'Por favor, descreva brevemente o seu pedido (mínimo 5 caracteres).')
    .max(1000, 'A mensagem não pode exceder 1000 caracteres.'),
  honeypot: z.string().max(0, 'Submissão inválida detetada.').optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function validateContactForm(data: unknown): {
  success: boolean;
  data?: ContactFormData;
  errors?: Record<string, string>;
} {
  const result = contactFormSchema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0];
    if (typeof field === 'string' && !errors[field]) {
      errors[field] = issue.message;
    }
  }
  return { success: false, errors };
}
