import { Paragraph } from '@/_commons/components';

export interface BlockArticleInterface {
  title: string;
  subTitle: string;
  description?: string;
}

export const BlockArticle = ({
  title,
  subTitle,
  description,
}: BlockArticleInterface) => {
  return (
    <article className="flex flex-col">
      <h3 className="text-[12px] text-neutral-2 md:text-xl font-semibold">
        {title}
      </h3>
      <Paragraph className="mt-1 md:mt-2 text-neutral-3 font-semibold font-serif">
        {subTitle}
      </Paragraph>
      {description ? (
        <Paragraph className="mt-0 md:mt-1 text-justify">
          {description}
        </Paragraph>
      ) : null}
    </article>
  );
};
