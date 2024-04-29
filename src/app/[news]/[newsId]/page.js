import { getSingleNews } from "@/utils/getSingleNews";

const NewsDetailPage = async ({ params }) => {
  const { data } = await getSingleNews(params.newsId);
  console.log(data);
  return <div>{params.newsId}</div>;
};

export default NewsDetailPage;
