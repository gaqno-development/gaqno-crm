import React from 'react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="rounded-lg border bg-card p-6 text-card-foreground">
      <p className="text-muted-foreground">
        {description ?? `${title} — content coming soon.`}
      </p>
    </div>
  );
}
