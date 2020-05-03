import Link from 'next/link';

export const Header: React.FC<{ children?: never }> = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Insightful blog</a>
      </Link>
      .
    </h2>
  );
};
