import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { products } from "@/components/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// This is a basic structure for your product page.
// You can expand this to show product details, images, etc.
export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // You can fetch product data based on the slug here
  // For now, we'll just display the product name from the slug
  const productName = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-12 px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-4">{productName}</h1>
        <p>More information about {productName} will be available here soon.</p>
      </main>
      <Footer />
    </div>
  );
}
