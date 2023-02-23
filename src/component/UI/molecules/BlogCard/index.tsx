import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
  img: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  estimate: string;
};

const BlogCard: React.FC<Props> = ({
  id,
  title,
  img,
  description,
  author,
  date,
  estimate,
}) => {
  return (
    <Link
      to={id.toString()}
      key={id}
      className="w-full max-w-[326px] flex flex-col gap-[30px] hover:-translate-y-2 transition"
    >
      <img src={img} alt="" className="w-full rounded-[5px]" />
      <div className="flex flex-col">
        <h3 className="text-white text-xl font-bold mb-2.5 leading-[34px]">
          {title}
        </h3>
        <p className="text-muted text-lg font-medium mb-[30px] leading-[34px]">
          {description}
        </p>
        <div className="flex flex-row items-center gap-[21px]">
          <img src={author.avatar} alt={author.name} />
          <div className="flex flex-col gap-[13px]">
            <span className="text-white font-semibold">{author.name}</span>
            <span className="text-muted text-sm">
              {date} . {estimate}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
