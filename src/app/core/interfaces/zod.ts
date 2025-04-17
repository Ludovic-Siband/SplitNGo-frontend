import { z } from 'zod';
import { DateTime } from 'luxon';

export type DateOptions =
  | string
  | {
      message?: string | undefined;
      offset?: boolean;
      precision?: number | null;
    };

export function date(options?: DateOptions) {
  return z
    .string()
    .datetime(options ?? { offset: true })
    .transform((d: string) => new Date(d));
}

export function dateTime() {
  return z.string().transform(d => {
    const date = DateTime.fromISO(d);
    if (date.invalidReason || date.invalidExplanation) throw new Error(date.invalidReason + date.invalidExplanation);
    return date as DateTime<true>;
  });
}

export function dateTimeNotNull() {
  return z.string().transform(asDateTimeNotNull);
}
function asDateTimeNotNull(d: string) {
  let date = DateTime.fromISO(d);
  if (date.invalidExplanation) {
    date = DateTime.fromFormat(d, 'dd-MM-yyyy HH:mm:ss', { locale: 'fr-FR' });
    if (date.invalidExplanation) throw new Error(date.invalidExplanation);
  }
  return date;
}

export function rangeSchema<I, Def extends z.ZodTypeDef, O>(dataType: z.ZodType<I, Def, O>) {
  return z.object({
    start: dataType.nullable(),
    end: dataType.nullable(),
  });
}
