import { Avatar } from '@/components/blog/avatar';
import { DateFormater } from '@/components/blog/date-formater';
import { CoverImage } from '@/components/blog/cover-image';
import { PostTitle } from '@/components/blog/post-title';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
  author: {
    name: string;
    picture: string;
  };
  children?: never;
};

export const PostHeader: React.FC<Props> = ({ slug, title, coverImage, date, author }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormater dateString={date} />
        </div>
      </div>
    </>
  );
};
