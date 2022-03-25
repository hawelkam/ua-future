export interface IPost {
  content: string;
  excerpt: string;
  title: string;
  slug: string;
}

const getPostsData = (json: any[]): IPost[] =>
  json.map((item) => ({
    content: item.content.rendered,
    excerpt: item.excerpt.rendered,
    title: item.title.rendered,
    slug: item.slug.rendered,
  }));

export async function getAllPostsForHome(lang: string): Promise<IPost[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}posts?lang=${lang}`,
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

  const mappedPosts = getPostsData(json);

  return mappedPosts;
}
