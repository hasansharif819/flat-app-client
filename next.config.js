// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [{ protocol: "https", hostname: "**" }],
//   },
//   // typescript: {
//   //   ignoreBuildErrors: true,
//   // },
// };

// module.exports = nextConfig;


const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "https",
				hostname: "i.ibb.co",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},
};

module.exports = nextConfig;
