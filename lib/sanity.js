import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'fpsfosi0',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skrRQ6ZX2CzdbB0vsk8SzE628vrtick9DSYfRgHHLMefTU6LPBPJfsA3QbmSn5T2nxCAIL8gyFf1h0MsiABArJrv6YO3xoc6sn91aizNcr5WkojmJj7PggQssiATQWPv5mlvByN8Cyp9Aj0qjXH4PAo7hbITEJhrLBwBQE2GwlkrDtrxWzn2',
  useCdn: false,
});
