const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://catalystpublicschool.in";

interface BreadcrumbItem {
  label: { en: string; hi: string };
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: { en: "Home", hi: "होम" }, href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label.en,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 md:px-8 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i === 0 && <span className="material-icons-round text-base">home</span>}
              {i > 0 && <span className="material-icons-round text-xs">chevron_right</span>}
              {i === allItems.length - 1 ? (
                <span className="text-slate-900 dark:text-slate-100 font-medium">{item.label.en}</span>
              ) : (
                <a href={item.href} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">{item.label.en}</a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
