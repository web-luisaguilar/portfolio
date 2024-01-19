const ArticleGridSkeleton = () => {
  const articlesSkeleton = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <section className="grid grid-cols-[repeat(auto-fill,325px)] gap-4 items-center justify-center lg:justify-between">
      {articlesSkeleton.map((value, index) => (
        <div className="card animated-bg" key={value.toString() + index.toString() + '-key-skeleton'}>
          <div className=" w-full aspect-video mb-2 flex-shrink-0 shadow-sm animated-bg "></div>
          <h2 className=" m-0 animated-bg w-full h-[2ch]"></h2>
          <h3 className=" m-0 animated-bg w-full h-[2ch]"></h3>
          <div className="flex gap-2 my-1 justify-between">
            <span className="h-[2ch] w-14 px-1 py-0.5 animated-bg"></span>
            <span className="h-[2ch] w-14 px-1 py-0.5 animated-bg"></span>
            <span className="h-[2ch] w-14 px-1 py-0.5 animated-bg"></span>
            <span className="h-[2ch] w-14 px-1 py-0.5 animated-bg"></span>
          </div>
          <div className=" flex justify-end">
            <span className=" w-20 h-[2ch] animated-bg"></span>
          </div>
          <p className="w-full  animated-bg h-[1ch]"></p>
          <p className="w-full  animated-bg h-[1ch]"></p>
          <p className="w-full  animated-bg h-[1ch]"></p>
          <p className="w-full  animated-bg h-[1ch]"></p>
          <p className="w-full  animated-bg h-[1ch]"></p>
          <p className="w-full  animated-bg h-[1ch]"></p>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-2 mt-2">
            <div className=" h-[3ch] w-20 animated-bg "></div>
            <div className=" h-[3ch] w-20 animated-bg "></div>
            <div className=" h-[3ch] w-20 animated-bg "></div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ArticleGridSkeleton
