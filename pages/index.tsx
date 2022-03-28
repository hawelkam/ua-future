import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getAllFundraisersForHome, IFundraiser } from "./api/fundraisers";
import { getAllPostsForHome, IPost } from "./api/posts";
import { useTranslation } from "react-i18next";
import SwitchLanguagePanel from "../components/SwitchLanguagePanel";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<IPost[]>();
  const [fundraisers, setFundraisers] = useState<IFundraiser[]>();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getAllPostsForHome(i18n.language.toUpperCase()).then((data) =>
      setPosts(data)
    );
    getAllFundraisersForHome(i18n.language.toUpperCase()).then((data) =>
      setFundraisers(data)
    );
  }, [i18n.language]);

  return (
    <div className="">
      <Head>
        <title>UA Future</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <SwitchLanguagePanel />
        <Navbar />
        <div className="flex flex-col xl:flex-row justify-around h-96">
          <div className="basis-1/3 bg-red-400">
            {t("news-header")}
            {posts &&
              posts.map((post: any) => (
                <div key={post.title}>
                  <h2>{post.title}</h2>
                </div>
              ))}
          </div>
          <div className="basis-1/3 bg-orange-400">{t("form-header")}</div>
          <div className="basis-1/3 bg-amber-400">
            {t("fundraisers-header")}
            {fundraisers &&
              fundraisers.map((fundraiser: any) => (
                <div key={fundraiser.title}>
                  <h2>{fundraiser.title}</h2>
                  {/* {fundraiser.fundraiserLink && (
                    <div
                      style={{
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        width="400"
                        src={`${fundraiser.fundraiserLink.fundraiserlink}/widget/14`}
                        scrolling="no"
                      ></iframe>
                    </div>
                  )} */}
                </div>
              ))}
          </div>
        </div>
        <div className="h-48 bg-green-400">{t("about-header")}</div>
        <div className="h-48 bg-teal-400">{t("coop-header")}</div>
      </main>
    </div>
  );
};

export default Home;
