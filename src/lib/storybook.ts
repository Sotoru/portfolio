export const storyUrl = (base: string, id: string) => `${base}/?path=/story/${id}`;
export const storyIframe = (base: string, id: string) => `${base}/iframe.html?id=${id}&viewMode=story`;

// Uno Storybook non ancora pubblicato non va linkato come se lo fosse: senza index.json niente link né iframe.
export const storybookPubblico = (base: string) =>
  fetch(`${base}/index.json`, { signal: AbortSignal.timeout(5000) })
    .then((r) => r.ok)
    .catch(() => false);
