import { Paragraph } from '@/_commons/components';
import { ResumeHeader } from '@/_commons/pages/home';
import {
  BlockArticle,
  type BlockArticleInterface,
} from '@/_commons/pages/home/BlockArticle';

const listExperience: (BlockArticleInterface & { id: React.Key })[] = [
  {
    id: 5,
    title: 'Frontend Developer',
    subTitle: 'PT. Infosys Solusi Terpadu, Feb 2023 – Now',
    description: `Build web application, create a stable and consistent website according to the design, integrate with APIs, fixing issue, etc.`,
  },
  {
    id: 4,
    title: 'Web Engineer Intern',
    subTitle: 'PT. Traveloka Indonesia, Feb 2022 – Juli 2022',
    description: `Part of the 'Kampus Merdeka' program by the Ministry of Education and Culture.Develop the interface of a product, change technology implementations, Refactor the application, work across teams, create reports, create documentation, create unit testing and integration testing, etc.`,
  },
  {
    id: 1,
    title: 'Practicum Lecturer Assistant',
    subTitle: 'Universitas Teknologi Digital Indonesia (2019 - 2021)',
    description:
      'Reviewing, assessing, and providing feedback on student practicum results. Coordinate with lecturer and students regarding the assessment and provide pre-test at each meeting.',
  },
  {
    id: 2,
    title: 'Head of Organization',
    subTitle: 'UKM WAMIKA, 2019 – 2021',
    description:
      'Lead the organization, make a work program for a period, establish cooperation with other organizations, build good teamwork, etc.',
  },

  {
    id: 3,
    title: 'Organization Advisor',
    subTitle: 'UKM WAMIKA & HIMAFORKA, 2021 – 2022',
    description: `Revaluate the work results of the organizations management, provide suggestions, and coordinate with the head of the organization.`,
  },
];

const listEducation: (BlockArticleInterface & { id: React.Key })[] = [
  {
    id: 4,
    title: 'Fullstack Web Javascript Development',
    subTitle: 'Binar Academy X Kampus Merdeka, Juli 2021 - Feb 2022',
  },
  {
    id: 3,
    title: 'Cloud Computing Learning Path',
    subTitle: 'Bangkit Academy 2021 by Google, Feb 2021 - June 2021',
  },
  {
    id: 5,
    title: 'Frontend Web Development with React',
    subTitle:
      'Coursera.com, online course by the Hong Kong University of Science and Technology, Sept 2020',
  },
  {
    id: 2,
    title: 'Teknik Informatika',
    subTitle: 'Universitas Teknologi Digital Indoenesia, 2018 - 2022',
  },
  {
    id: 1,
    title: 'Rekayasa Perangkat Lunak (RPL)',
    subTitle: 'SMK Negeri 1 Selong, 2015 – 2018',
  },
];

export default function Home() {
  return (
    <main className="w-svw min-h-svh text-neutral-2 md:flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
      <div className="xl:my-10 w-full h-full md:h-auto max-w-screen-lg bg-white shadow-black xl:rounded-md overflow-auto">
        <ResumeHeader />
        <div className="p-4 md:p-6 grid grid-rows-2 grid-flow-col gap-4 md:gap-x-10 md:gap-y-3 items-start">
          <aside className="row-span-2">
            <h2 className="text-primary-1 text-[12px] md:text-2xl">
              Work Exerience
            </h2>
            <div className="mt-1 md:mt-2 flex flex-col gap-3 md:gap-4">
              {listExperience.map((item) => (
                <BlockArticle
                  key={item.id}
                  title={item.title}
                  subTitle={item.subTitle}
                  description={item.description}
                />
              ))}
            </div>
          </aside>
          <aside>
            <h2 className="text-primary-1 text-[12px] md:text-2xl">
              Education & Learning
            </h2>
            <div className="mt-1 md:mt-2 flex flex-col gap-3 md:gap-4">
              {listEducation.map((item) => (
                <BlockArticle
                  key={item.id}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              ))}
            </div>
          </aside>
          <aside>
            <h2 className="text-primary-1 text-[12px] md:text-2xl">Skills</h2>
            <div className="mt-1 md:mt-2 flex flex-col gap-3 md:gap-4">
              <Paragraph className="text-justify">
                Clean code, create testing, working collaboration, critical
                thinking, create technical documentation, reporting, debugging,
                etc.
              </Paragraph>
              <Paragraph className="text-justify">
                Experienced with Agile methodologies.
              </Paragraph>
              <Paragraph>
                Coding Technologies:
                <br /> HTML, CSS,<b>JavaScript</b> , TailwindCSS, Material UI,
                ant-design, <b>Typescript, ReactJs, NextJs</b>.
              </Paragraph>
              <Paragraph className="text-justify">
                Nodejs, ExpressJs, MongoDB, PostgreSQL, Mongoose, Sequelize.
              </Paragraph>
              <Paragraph className="text-justify">
                <b>Version Control(GIT)</b>, github, gitlab, figma. (other
                tools)
              </Paragraph>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
