import type { ApiResponse, Payload } from '@/models';

export const useHttpService = () => {
  const apiPath = import.meta.env.VITE_API_BASE;
  const headers = new Headers({ 'Content-Type': 'application/json' });

  const get = async <T>(url: string, payload: Payload = {}): Promise<ApiResponse<T | null>> => {
    const u = new URLSearchParams();

    for (const k of Object.keys(payload)) {
      const v = payload[k];
      if (v) {
        u.append(k, v.toString());
      }
    }

    try {
      const fetchUrl = `${apiPath}${url}${Object.keys(payload).length > 0 ? `?${u.toString()}` : ''}`;
      const response = await fetch(fetchUrl, { headers });
      const data = await response.json();

      if (response && response.ok) {
        return { data, error: null };
      } else {
        throw {
          data: null,
          error: { ok: response.ok, status: response.status, statusText: response.statusText, errorCode: data.errorCode, errorMessage: data.errorMessage },
        };
      }
    } catch (error) {
      return { data: null, error };
    }
  };

  return { get };
};
