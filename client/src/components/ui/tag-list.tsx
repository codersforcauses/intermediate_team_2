import type { Tag } from "@/hooks/events";

// this component is responsible for displaying the array of tags
interface TagListProps {
  tags: Tag[];
}

export default function TagList({ tags }: TagListProps) {
  if (!tags.length) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-2 py-2">
      {tags.map((tag) => (
        <span key={tag.id} className="rounded-full bg-muted px-3 py-1 text-sm">
          {tag.name}
        </span>
      ))}
    </div>
  );
}
