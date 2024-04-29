const DynamicNewsPage = ({ params, searchParams }) => {
  return (
    <div>
      <h1>Dynamic news page: {searchParams.category}</h1>
    </div>
  );
};

export default DynamicNewsPage;
