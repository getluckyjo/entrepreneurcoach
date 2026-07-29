import { site, offers, faqs, workshop, workshopFaqs, cohorts } from "~/data/site";

/**
 * Title helpers.
 *
 * `pageTitle("foo")`            → "foo | Johannes le Roux — Entrepreneur Coach"
 * `pageTitle("foo", { raw: true })` → "foo"   (use when the title already contains the brand)
 * `pageTitle()`                 → homepage default
 */
export function pageTitle(specific?: string, opts: { raw?: boolean } = {}) {
  if (!specific) return `Entrepreneur Coach Cape Town | Pitch Decks & Fundraising — Johannes le Roux`;
  if (opts.raw) return specific;
  return `${specific} | ${site.brand}`;
}

export function canonical(pathname: string) {
  const lower = pathname.toLowerCase();
  const trimmed = lower.replace(/\/+$/, "") || "/";
  return new URL(trimmed, site.domain).toString();
}

/* ───────────── JSON-LD builders. Compose pages with these. ───────────── */

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Johannes le Roux",
  url: site.domain,
  image: `${site.domain}/img/johannes-portrait.jpg`,
  jobTitle: "Entrepreneur Coach",
  description: "Cape Town–based operator turned coach. Founder of six brands across SA, Europe, and the US. Coaches founders on pitch decks, fundraising, and international expansion.",
  worksFor: { "@type": "Organization", name: "Johannes le Roux Coaching" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Cambridge Judge Business School", description: "Executive Education — Funding from Seed to Exit" },
  ],
  sameAs: [
    site.social.linkedin,
    "https://www.theduchess.co.za",
    "https://www.dopedrinks.com",
    "https://getluckygolfclub.com",
  ].filter(Boolean),
  knowsAbout: [
    "Pitch decks",
    "Fundraising",
    "Founder coaching",
    "FMCG brand building",
    "International expansion",
    "Beverage industry",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.domain}/#business`,
  name: site.brand,
  url: site.domain,
  image: `${site.domain}/img/johannes-portrait.jpg`,
  email: site.email,
  priceRange: "R2,500 – R45,000",
  description: "Operator-first entrepreneur coaching from Cape Town. Pitch decks, fundraising, founder OS, and international expansion for South African founders.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.address.geo.lat,
    longitude: site.address.geo.lng,
  },
  areaServed: [
    { "@type": "Country", name: "South Africa" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Place", name: "European Union" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  founder: { "@type": "Person", "@id": `${site.domain}/about#person`, name: "Johannes le Roux" },
  sameAs: [site.social.linkedin].filter(Boolean),
};

/** Each productised offer rendered as its own Service node. */
export const serviceSchemas = offers.map((o) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${site.domain}/coaching#${o.slug}-service`,
  name: o.name,
  serviceType: "Entrepreneur coaching",
  description: o.summary,
  provider: { "@type": "Person", name: "Johannes le Roux", url: site.domain },
  areaServed: [
    { "@type": "Country", name: "South Africa" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  audience: { "@type": "Audience", audienceType: o.bestFor },
  ...(o.priceNumeric > 0 && {
    offers: {
      "@type": "Offer",
      price: o.priceNumeric,
      priceCurrency: "ZAR",
      availability: "https://schema.org/InStock",
      url: `${site.domain}/coaching#${o.slug}`,
      eligibleDuration: o.cadence,
    },
  }),
}));

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ───────────── Workshop: Claude for Entrepreneurs ───────────── */

/**
 * The workshop as a Course. Always emitted.
 *
 * Google wants a `Course` for a repeatable programme and an `EducationEvent`
 * for each dated run — `hasCourseInstance` below links the two. While
 * `cohorts` is empty we emit the Course alone, because an Event without a
 * startDate is invalid and gets dropped.
 */
export const workshopCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${site.domain}/workshop#course`,
  name: `Workshop: ${workshop.name}`,
  description: workshop.promise,
  url: `${site.domain}/workshop`,
  inLanguage: "en-ZA",
  teaches: [
    "Using Claude for business administration",
    "Prompt and brief writing for executives",
    "Connecting AI to business data",
    "Automating recurring business tasks",
  ],
  provider: {
    "@type": "Person",
    "@id": `${site.domain}/about#person`,
    name: "Johannes le Roux",
    url: site.domain,
  },
  audience: {
    "@type": "Audience",
    audienceType: "Business owners, founders and executives",
  },
  offers: {
    "@type": "Offer",
    price: workshop.founding.active ? workshop.founding.amount : workshop.price.amount,
    priceCurrency: "ZAR",
    availability: "https://schema.org/InStock",
    url: `${site.domain}/workshop`,
    category: "Professional development",
  },
  // Omitted entirely while there are no dates — an empty array is noise to crawlers.
  ...(cohorts.length > 0 && {
    hasCourseInstance: cohorts.map((c) => ({
      "@type": "CourseInstance",
      courseMode: "Onsite",
      courseWorkload: workshop.durationISO,
      startDate: c.startISO,
      endDate: c.endISO,
      location: {
        "@type": "Place",
        name: `${workshop.venue.name}, ${workshop.venue.area}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
      },
    })),
  }),
};

/** One EducationEvent per scheduled cohort. Empty until dates are set. */
export const workshopEventSchemas = cohorts.map((c) => ({
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  "@id": `${site.domain}/workshop#${c.date}`,
  name: `Workshop: ${workshop.name} — ${c.display}`,
  description: workshop.promise,
  startDate: c.startISO,
  endDate: c.endISO,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  maximumAttendeeCapacity: workshop.seats,
  inLanguage: "en-ZA",
  organizer: { "@type": "Person", name: "Johannes le Roux", url: site.domain },
  location: {
    "@type": "Place",
    name: `${workshop.venue.name}, ${workshop.venue.area}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
  },
  offers: {
    "@type": "Offer",
    price: c.founding ? workshop.founding.amount : workshop.price.amount,
    priceCurrency: "ZAR",
    url: `${site.domain}/workshop`,
    availability:
      c.seatsLeft > 0 ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
  },
}));

export const workshopFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: workshopFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function articleSchema(opts: {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  url: string;
  image?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image: opts.image ? [opts.image] : [`${site.domain}/img/og-default.svg`],
    datePublished: opts.pubDate.toISOString(),
    dateModified: (opts.updatedDate ?? opts.pubDate).toISOString(),
    articleSection: opts.category,
    author: { "@type": "Person", name: "Johannes le Roux", url: site.domain },
    publisher: {
      "@type": "Organization",
      name: site.brand,
      logo: { "@type": "ImageObject", url: `${site.domain}/img/og-default.svg` },
    },
    mainEntityOfPage: opts.url,
  };
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/** WebSite + Person rolled into one knowledge-graph block for the homepage. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.domain}/#website`,
  url: site.domain,
  name: site.brand,
  description: site.description,
  inLanguage: "en-ZA",
  publisher: { "@id": `${site.domain}/#business` },
};
