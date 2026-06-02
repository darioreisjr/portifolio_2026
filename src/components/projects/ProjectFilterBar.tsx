import React, { useCallback } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FilterCategory } from '@/types/filter';

interface ProjectFilterBarProps {
  categories: FilterCategory[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
}

export const ProjectFilterBar = React.memo(({ categories, activeFilter, onFilterChange }: ProjectFilterBarProps) => {
  const handleClick = useCallback(
    (id: string) => () => onFilterChange(id),
    [onFilterChange]
  );

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeFilter === category.id ? 'default' : 'outline'}
          size="sm"
          onClick={handleClick(category.id)}
          className={`transition-all duration-300 ${
            activeFilter === category.id
              ? 'bg-primary text-primary-foreground'
              : 'border-border hover:border-primary/50'
          }`}
        >
          <Filter className="w-4 h-4 mr-2" />
          {category.label}
        </Button>
      ))}
    </div>
  );
});

ProjectFilterBar.displayName = 'ProjectFilterBar';
