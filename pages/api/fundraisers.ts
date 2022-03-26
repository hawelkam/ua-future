export interface IFundraiser {
  title: string;
  slug: string;
}

const getFundraiserData = (json: any[]): IFundraiser[] =>
  json.map((item) => ({
    title: item.title.rendered,
    slug: item.slug.rendered,
  }));

export async function getAllFundraisersForHome(
  lang: string
): Promise<IFundraiser[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}fundraiser?lang=${lang}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  const mappedFundraisers = getFundraiserData(json);

  return mappedFundraisers;
}
