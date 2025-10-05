import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/eggfree-cake-diploma-baking-course",
        destination: "/eggfree-cake-diploma-baking-course-in-kolkata",
        permanent: true,
      },
      {
        source: "/classic-cake-diploma-baking-course",
        destination: "/classic-cake-diploma-baking-course-in-kolkata",
        permanent: true,
      },
      {
        source: "/eggfree-cake-baking-certification-course",
        destination: "/eggfree-cake-baking-certification-course-in-kolkata",
        permanent: true,
      },
      {
        source: "/classic-cake-baking-certification-course",
        destination: "/classic-cake-baking-certification-course-in-kolkata",
        permanent: true,
      },
      {
        source: "/home-bakers-certificate-course",
        destination: "/home-bakers-certificate-course-in-kolkata",
        permanent: true,
      },
      {
        source: "/master-cake-pastry-and-baking-classes",
        destination: "/master-cake-pastry-and-baking-classes-in-kolkata",
        permanent: true,
      },
      {
        source: "/one-day-cake-pastry-and-baking-class",
        destination: "/one-day-cake-pastry-and-baking-class-in-kolkata",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
