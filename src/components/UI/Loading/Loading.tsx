// import { Box } from "@mui/material";

// const Loading = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         background: "#EBF0F4",
//         color: "#00026E",
//       }}
//     >
//       Loading...
//     </Box>
//   );
// };

// export default Loading;

import Loading from '@/components/Loading/Loading';
import { Stack, Typography } from '@mui/material';

const LoadingCompo = () => {
	return (
		<Stack
			justifyContent='center'
			alignItems='center'
			gap={4}
			sx={{
				height: '100vh',
				backgroundColor: '#fff'
			}}
		>
			<Loading />
			<Typography
				variant='h4'
				fontWeight='300'
				sx={{
					letterSpacing: {
						xs: 8,
						sm: 15
					},
					color: '#1586FD'
				}}
			>
				Best Flat
			</Typography>
		</Stack>
	);
};

export default LoadingCompo;
