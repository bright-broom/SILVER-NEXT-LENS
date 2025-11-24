import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string | ReactNode;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn('text-center mb-16', className)}>
      {typeof title === 'string' ? (
        <h2 className={cn('text-4xl font-bold mb-4', titleClassName)}>
          {title}
        </h2>
      ) : (
        <div className={cn('mb-4', titleClassName)}>{title}</div>
      )}
      {description && (
        <p className={cn('text-lg text-muted-foreground', descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}

