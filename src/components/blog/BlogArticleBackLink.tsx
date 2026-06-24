import { articlesPath } from "@/lib/site-config";
import { BackNavButton } from "@/components/ui/BackNavButton";

export function BlogArticleBackLink() {
  return (
    <BackNavButton href={articlesPath} ariaLabel="Back to clinical articles" theme="dark" />
  );
}
