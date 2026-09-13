import { NicheHub } from "@/components/hub/NicheHub";
import { breadcrumbJsonLd, getSiteUrl } from "@/lib/seo";

export default function HomePage() {
  const site = getSiteUrl();
  const jsonLd = breadcrumbJsonLd([{ name: "Home", url: site }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NicheHub />
    </>
  );
}
