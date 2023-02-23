import React from 'react';
import { BlogCard, PageHeader } from '@/component/UI/molecules';

import DATA_BLOG from '@/constant/blog';

const Blog = () => {
  return (
    <React.Fragment>
      <section className="wrapper flex flex-col gap-[90px] my-[101px]">
        <div className="w-full border-b border-white/10 pb-[89px]">
          <PageHeader
            badge="blog"
            title="Get precise knowledge wherever you are"
            position="center"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center xl:justify-between gap-[50px]">
          {DATA_BLOG.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              img={blog.img}
              author={blog.author}
              estimate={blog.estimate}
            />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blog;
