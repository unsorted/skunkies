import styled from '@emotion/styled';
import tw from 'twin.macro';

type Props = {
  content: string;
  children?: never;
};

const StyledContainer = styled.div`
  ${tw`max-w-4xl mx-auto`}
  .markdown {
    ${tw`text-lg leading-relaxed`}
    p, ul, ol, blockquote {
      ${tw`my-6`}
    }
    h2 {
      ${tw`text-3xl mt-12 mb-4 leading-snug`}
    }
    h3 {
      ${tw`text-2xl mt-8 mb-4 leading-snug`}
    }

    blockquote {
      ${tw`p-2 mx-0 bg-gray-100 mb-4 border-l-4 border-gray-400 italic`};
      > p {
        ${tw`mt-0 mb-0`}
      }
    }
  }
`;

export const PostBody: React.FC<Props> = ({ content }) => {
  return (
    <StyledContainer>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </StyledContainer>
  );
};
