import Image from "next/image";
import { blogAuthor } from "@/lib/blog/author";

export function BlogAuthorCard() {
  return (
    <div className="flex items-center gap-5 border-t border-charcoal/10 pt-8">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-neutral-100">
        <Image
          src={blogAuthor.image}
          alt={blogAuthor.imageAlt}
          fill
          className="object-cover object-[28%_top]"
          sizes="80px"
        />
      </div>
      <div>
        <p className="text-lg font-medium text-charcoal">{blogAuthor.name}</p>
        <p className="mt-1 text-sm leading-relaxed text-charcoal/70">{blogAuthor.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{blogAuthor.bio}</p>
      </div>
    </div>
  );
}
