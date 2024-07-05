import Image from 'next/image';
import Link from 'next/link';

import { Paragraph } from '@/_commons/components';

interface LinkType {
  id: React.Key;
  label: string;
  textLink: string;
  href: string;
}

const links: LinkType[] = [
  {
    id: 1,
    label: 'Email',
    textLink: 'ahmadnzr.dev@gmail.com',
    href: 'mailto:ahmadnzr.dev@gmail.com',
  },
  {
    id: 2,
    label: 'Linkedin',
    textLink: 'linkedin.com/in/ahmadnzr',
    href: 'http://linkedin.com/in/ahmadnzr',
  },
  {
    id: 3,
    label: 'Website',
    textLink: 'portfolio-ahmadrpl.vercel.app/',
    href: 'https://portfolio-ahmadrpl.vercel.app/',
  },
  {
    id: 4,
    label: 'Github',
    textLink: 'github.com/ahmadnzr',
    href: 'https://www.github.com/ahmadnzr',
  },
];

export const ResumeHeader = () => {
  return (
    <div className="p-4 md:p-10 bg-primary-4 flex justify-between items-center gap-4 md:gap-10">
      <div className="flex-auto">
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full h-12 w-12 md:h-24 md:w-24 object-cover"
            src="/photo.png"
            alt="ok"
            width={200}
            height={200}
          />
          <div className="flex flex-col">
            <h1 className="text-lg md:text-3xl font-semibold">Ahmad Nizar</h1>
            <span className="text-[12px] md:text-2xl text-primary-1">
              Frontend Web Developer
            </span>
          </div>
        </div>
        <Paragraph className="mt-2 max-w-lg text-justify">
          I am a consistent, diligent, and focused worker. I have experience
          building and developing website interfaces. Some experience also build
          applications on the backend side. I enjoy working in close
          collaboration with cross-tech teams.
        </Paragraph>
      </div>
      <div className="flex-auto flex flex-col gap-1 md:gap-2">
        {links.map((item) => (
          <div key={item.id} className="flex flex-col">
            <h3 className="text-primary-1 text-[10px] md:text-base">
              {item.label}
            </h3>
            <Link
              className="font-semibold text-[10px] md:text-base underline"
              href={item.href}
            >
              {item.textLink}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
