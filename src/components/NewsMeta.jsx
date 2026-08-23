import { Clock3 } from "lucide-react";
import { formatNewsDate } from "../utils/news";

export default function NewsMeta({ article, light = false }) {
  const textColor = light ? "text-ink-200" : "text-ink-500";

  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${textColor}`}>
      <span className="font-semibold">{article.author}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={article.date}>{formatNewsDate(article.date)}</time>
      <span aria-hidden="true">·</span>
      <span className="inline-flex items-center gap-1.5">
        <Clock3 aria-hidden="true" size={15} strokeWidth={1.5} />
        {article.readTime} menit baca
      </span>
    </div>
  );
}
