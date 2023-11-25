type Success<TBody> = {
  data: TBody;
  ok: true;
};

type Fail = {
  ok: false;
  error: Error;
};

export type TResponse<TBody> = Success<TBody> | Fail;

const sendRequest = async <TResponseData, TRequestPayload = void>(
  url: string,
  method: string,
  body?: TRequestPayload,
): Promise<TResponse<TResponseData>> => {
  const headers: HeadersInit = {
    Accept: 'application/json',
  };

  if (body) {
    headers['Content-Type'] = 'application/json';
  }

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (response.ok) {
      return {
        data: (await response.json()) as TResponseData,
        ok: true,
      };
    }

    return {
      ok: false,
      error: new Error(response.statusText),
    };
  } catch (e: unknown) {
    return {
      ok: false,
      error: e as Error,
    };
  }
};

export const post = <TResponse, TBody = object>(url: string, body?: TBody) =>
  sendRequest<TResponse, TBody>('POST', url, body);

export const get = <TResponseData>(url: string) =>
  sendRequest<TResponseData>(url, 'GET');
