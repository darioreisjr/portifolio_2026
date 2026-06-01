import React from 'react';

export const SkeletonCard = React.memo(() => (
  <div className="bg-card border border-border rounded-lg overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-muted" />
    <div className="p-6 space-y-3">
      <div className="h-5 bg-muted rounded w-3/4" />
      <div className="h-4 bg-muted rounded w-full" />
      <div className="h-4 bg-muted rounded w-5/6" />
      <div className="flex gap-2 mt-4">
        <div className="h-6 bg-muted rounded w-16" />
        <div className="h-6 bg-muted rounded w-16" />
        <div className="h-6 bg-muted rounded w-16" />
      </div>
    </div>
  </div>
));

SkeletonCard.displayName = 'SkeletonCard';
