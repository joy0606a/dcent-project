import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import { getFullLocaleCode } from '@/lib/locale';

/**
 * A custom hook that wraps useQuery and automatically includes locale in the query key
 * @param options - UseQuery options
 * @returns UseQueryResult with locale included in query key
 */
export const useLocaleQuery = <
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, readonly unknown[]>,
): UseQueryResult<TData, TError> => {
  const locale = useLocale();
  const fullLocale = getFullLocaleCode(locale);

  return useQuery({
    ...options,
    queryKey: [...(options.queryKey || []), { locale: fullLocale }],
  });
};
