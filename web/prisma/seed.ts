import { PrismaClient, type Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// Demo data for local development. Slugs are unique, so re-running this seed
// only adds missing companies and never overwrites edits made in the app.
const companies: Prisma.CompanyCreateManyInput[] = [
  {
    name: "MTN Nigeria",
    slug: "mtn-nigeria",
    industry: "Telecommunications",
    description:
      "Nigeria's largest telecoms operator. Huge reach, big targets, and a famously fast-paced HQ.",
    website: "https://www.mtn.ng",
    country: "Nigeria",
    region: "Lagos",
    city: "Lagos",
    verification: "DOMAIN_VERIFIED",
    reviewCount: 1284,
    ratingAverage: 3.2,
  },
  {
    name: "Dangote Group",
    slug: "dangote-group",
    industry: "Conglomerate",
    description:
      "Cement, sugar, fertiliser and more. One of Africa's biggest industrial groups, headquartered in Lagos.",
    website: "https://www.dangote.com",
    country: "Nigeria",
    region: "Lagos",
    city: "Lagos",
    verification: "DOMAIN_VERIFIED",
    reviewCount: 742,
    ratingAverage: 2.9,
  },
  {
    name: "Google Nigeria",
    slug: "google-nigeria",
    industry: "Technology",
    description:
      "Search, ads and cloud, with a Lagos office. Global perks, local market realities.",
    website: "https://about.google",
    country: "Nigeria",
    region: "Lagos",
    city: "Lagos",
    verification: "DOMAIN_VERIFIED",
    reviewCount: 318,
    ratingAverage: 4.5,
  },
  {
    name: "Access Bank",
    slug: "access-bank",
    industry: "Banking",
    description:
      "One of Nigeria's largest banks, with a fast-moving retail and digital banking arm.",
    website: "https://www.accessbankplc.com",
    country: "Nigeria",
    region: "Lagos",
    city: "Lagos",
    verification: "DOMAIN_VERIFIED",
    reviewCount: 963,
    ratingAverage: 3.1,
  },
  {
    name: "Jumia",
    slug: "jumia",
    industry: "E-commerce",
    description:
      "Pan-African e-commerce and logistics platform. High volume, tight deadlines, lots of moving parts.",
    website: "https://www.jumia.com.ng",
    country: "Nigeria",
    region: "Lagos",
    city: "Lagos",
    verification: "DOMAIN_VERIFIED",
    reviewCount: 587,
    ratingAverage: 3.4,
  },
  {
    name: "Flutterwave",
    slug: "flutterwave",
    industry: "Fintech",
    description:
      "Payments infrastructure for African businesses. Fast-growing, product-led, and globally ambitious.",
    website: "https://flutterwave.com",
    country: "Nigeria",
    region: "Lagos",
    city: "Lagos",
    verification: "DOMAIN_VERIFIED",
    reviewCount: 214,
    ratingAverage: 4.0,
  },
  {
    name: "Paystack",
    slug: "paystack",
    industry: "Fintech",
    description:
      "Online payments for African businesses, now part of Stripe. Engineering-heavy and remote-friendly.",
    website: "https://paystack.com",
    country: "Nigeria",
    region: "Lagos",
    city: "Lagos",
    verification: "DOMAIN_VERIFIED",
    reviewCount: 176,
    ratingAverage: 4.3,
  },
  {
    name: "Guaranty Trust Bank",
    slug: "gtbank",
    industry: "Banking",
    description:
      "Tier-1 Nigerian bank known for its service culture, strong brand, and demanding operations teams.",
    website: "https://www.gtcoplc.com",
    country: "Nigeria",
    region: "Lagos",
    city: "Lagos",
    verification: "DOMAIN_VERIFIED",
    reviewCount: 845,
    ratingAverage: 3.7,
  },
  {
    name: "ZebrealtyCo",
    slug: "zebrealtyco",
    industry: "Real Estate",
    website: "https://zebrealtyco.ltd",
    country: "Nigeria",
    region: "Lagos",
  },
];

async function main() {
  const result = await prisma.company.createMany({
    data: companies,
    skipDuplicates: true,
  });

  const total = await prisma.company.count();
  console.log(
    `Seed complete: ${result.count} new companies added, ${total} total in the database.`
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
