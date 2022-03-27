export interface IFundraiser {
  title: string;
  slug: string;
}

export async function getAllFundraisersForHome(
  lang: string
): Promise<IFundraiser[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query GetFundraisers($lang: LanguageCodeFilterEnum!) {
          fundraisers(where: { language: $lang }) {
            nodes {
              title
            }
          }
        }
      `,
      variables: {
        lang,
      },
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data.fundraisers.nodes;
}
