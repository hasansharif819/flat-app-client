// import { TFlat } from "@/types/Flats";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Chip,
//   Grid,
//   Stack,
//   Typography,
//   Divider,
// } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import SingleBedIcon from "@mui/icons-material/SingleBed";
// import SquareFootIcon from "@mui/icons-material/SquareFoot";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import { usePathname } from "next/navigation";
// import defaultFlatImage from "../../../assets/images/flat.jpg";


// const FlatCard = ({ flat }: { flat: TFlat }) => {
//   console.log("flat = ", flat)
//   console.log("flat?.image = ", flat?.image);
//   const flatImage = flat?.image;
//   const pathname = usePathname();
//   const isFeatured = pathname === "/";
//   // const placeholder =
//   //   "https://i.ibb.co.com/0jwXqjh/flat1.jpg";
//   return (
//     <Card
//       sx={{
//         borderRadius: "15px",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         height: { xs: "auto", md: 250 },
//       }}
//     >
//       <Grid container spacing={0}>
//         {/* Image Grid */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               position: "relative",
//               height: { xs: 200, md: "100%" },
//               width: "100%",
//               overflow: "hidden",
//             }}
//           >
//             <Image
//               // src={flat?.image || defaultFlatImage}
//               src='https://i.ibb.co.com/0jwXqjh/flat1.jpg'
//               alt="flat image"
//               width={100}
//               height={350}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />

//             {isFeatured ? (
//               <Chip
//                 label="FEATURED"
//                 color="primary"
//                 size="small"
//                 sx={{ position: "absolute", top: 10, left: 10 }}
//               />
//             ) : (
//               <Chip
//                 label={flat?.rent ? "RENT" : "BUY"}
//                 color="primary"
//                 size="small"
//                 sx={{ position: "absolute", top: 10, right: 10 }}
//               />
//             )}
//           </Box>
//         </Grid>
//         {/* Content Grid */}
//         <Grid item xs={12} md={6}>
//           <CardContent
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               height: "100%",
//               padding: { xs: 2, md: 3 },
//             }}
//           >
//             <Typography variant="h6" fontWeight={600}>
//               {flat?.title}
//             </Typography>
//             <Stack
//               direction="row"
//               alignItems="center"
//               spacing={1}
//               sx={{ color: "text.secondary", mt: 1 }}
//             >
//               <LocationOnIcon />
//               <Typography>{flat?.location}</Typography>
//             </Stack>
//             <Stack
//               direction="row"
//               alignItems="center"
//               spacing={3}
//               sx={{ mt: 1 }}
//             >
//               <Stack
//                 direction="row"
//                 alignItems="center"
//                 spacing={1}
//                 sx={{ color: "text.secondary" }}
//               >
//                 <SingleBedIcon />
//                 <Typography>{flat?.totalBedrooms}</Typography>
//               </Stack>
//               <Stack
//                 direction="row"
//                 alignItems="center"
//                 sx={{ color: "text.secondary" }}
//               >
//                 <SquareFootIcon />
//                 <Typography>{flat?.squareFeet} sqft</Typography>
//               </Stack>
//             </Stack>
//             <Divider sx={{ my: 2 }} />
//             <Stack
//               direction="row"
//               alignItems="center"
//               justifyContent="space-between"
//             >
//               <Stack direction="row" alignItems="center">
//                 <AttachMoneyIcon sx={{ mr: 0.5 }} />
//                 <Typography variant="h5" fontWeight={700}>
//                   {flat?.rent}
//                 </Typography>
//               </Stack>
//               <Link href={`/flats/${flat?.id}`} passHref>
//                 <Button variant="contained" size="small">
//                   Details
//                 </Button>
//               </Link>
//             </Stack>
//           </CardContent>
//         </Grid>
//       </Grid>
//     </Card>
//   );
// };

// export default FlatCard;



import { TFlat } from "@/types/Flats";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { usePathname } from "next/navigation";
import defaultFlatImage from "../../../assets/images/flat.jpg";

const FlatCard = ({ flat }: { flat: TFlat }) => {
  console.log("Flat = ", flat)
  const pathname = usePathname();
  const isFeatured = pathname === "/";

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: { xs: "auto", md: 280 },
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        '&:hover': {
          transform: "translateY(-5px)",
          boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Grid container>
        {/* Image Section */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              position: "relative",
              height: { xs: 200, md: "100%" },
              overflow: "hidden",
              borderRadius: { xs: "15px 15px 0 0", md: "15px 0 0 15px" },
            }}
          >
            <Image
              src={flat?.image || defaultFlatImage}
              alt="flat image"
              width={500}
              height={450}
            />

            {isFeatured ? (
              <Chip
                label="FEATURED"
                color="secondary"
                size="small"
                sx={{ position: "absolute", top: 10, left: 10 }}
              />
            ) : (
              <Chip
                label={flat?.rent ? "RENT" : "BUY"}
                color="primary"
                size="small"
                sx={{ position: "absolute", top: 10, right: 10 }}
              />
            )}
          </Box>
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} md={7}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: { xs: 2, md: 3 },
              height: "100%",
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {flat?.title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ color: "text.secondary" }}
            >
              <LocationOnIcon />
              <Typography variant="body2">{flat?.location}</Typography>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ my: 1 }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <SingleBedIcon />
                <Typography variant="body2">{flat?.totalBedrooms} Beds</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <SquareFootIcon />
                <Typography variant="body2">{flat?.squareFeet} sqft</Typography>
              </Stack>
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center">
                <AttachMoneyIcon sx={{ mr: 0.5 }} />
                <Typography variant="h5" fontWeight={700}>
                  {flat?.rent}
                </Typography>
              </Stack>
              <Link href={`/flats/${flat?.id}`} passHref>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    bgcolor: "primary.main",
                    '&:hover': {
                      bgcolor: "primary.dark",
                    },
                  }}
                >
                  Details
                </Button>
              </Link>
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FlatCard;
