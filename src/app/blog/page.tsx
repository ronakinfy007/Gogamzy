import { BlogBanner, BlogBannerSkeleton } from "@/components/blog-banner";
import CategoryBanner, {
  CategoryBannerSkeleton,
} from "@/components/category-banner";
import AdCustomWrapper from "@/components/AdCustom"; // Import the wrapper
import React, { Suspense } from "react";

const Blog = () => {
  return (
    <main className="flex w-full max-w-[1440px] self-center flex-1 flex-col flex-wrap h-auto gap-2 px-5 md:px-10 mt-10">
      <Suspense fallback={<BlogBannerSkeleton />}>
        <BlogBanner />
      </Suspense>
      <Suspense fallback={<CategoryBannerSkeleton />}>
        <CategoryBanner />
      </Suspense>
      {/* Use the wrapper */}
      <AdCustomWrapper dataAdId={""} width={0} height={0} />
    </main>
  );
};

export default Blog;
