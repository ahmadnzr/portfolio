import Image from 'next/image';
import Link from 'next/link';

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
    textLink: 'ahmadnizar.web.app',
    href: 'https://www.ahmadnizar.web.app',
  },
  {
    id: 4,
    label: 'Github',
    textLink: 'github./com/ahmadnzr',
    href: 'https://www.github.com/ahmadnzr',
  },
];

export default function Home() {
  return (
    <main className="bg-neutral-5 w-svw min-h-svh text-neutral-2">
      <div className="mx-auto w-[60%] h-full bg-white shadow-black">
        <div className="p-6 bg-primary-4 flex justify-between gap-5">
          <div className="flex-auto">
            <div className="flex items-center gap-3">
              <Image
                className="rounded-full h-24 w-24 object-cover"
                src="/photo.png"
                alt="ok"
                width={200}
                height={200}
              />
              <div>
                <h1 className="text-3xl font-semibold">Ahmad Nizar</h1>
                <span className="text-2xl text-primary-1">
                  Frontend Web Developer
                </span>
              </div>
            </div>
            <p className="mt-2 max-w-[600px] text-justify">
              I am a consistent, diligent, and focused worker. I have experience
              building and developing website interfaces. Some experience also
              build applications on the backend side. I enjoy working in close
              collaboration with cross-tech teams.
            </p>
          </div>
          <div className="flex-auto flex flex-col gap-2">
            {links.map((item) => (
              <div key={item.id}>
                <h3 className="text-primary-1">{item.label}</h3>
                <Link className="font-semibold underline" href={item.href}>
                  {item.textLink}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
