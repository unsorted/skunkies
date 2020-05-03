import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string;
  children?: never;
};

export const PostBody: React.FC<Props> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
