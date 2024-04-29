import { getCategoryNews } from "@/utils/getCategoryNews";

const DynamicNewsPage = async ({ params, searchParams }) => {
  const { data } = getCategoryNews(searchParams.category);

  return (
    <div>
      <h1>
        Total {searchParams.category} news: {data.length}
      </h1>
    </div>
  );
};

export default DynamicNewsPage;
