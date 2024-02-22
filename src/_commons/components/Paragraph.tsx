import { clsx } from 'clsx';

interface ParagraphInterface {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className }: ParagraphInterface) => {
  return (
    <p className={clsx('text-[10px] md:text-base', className)}>{children}</p>
  );
};
