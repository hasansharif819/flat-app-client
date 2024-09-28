"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegister } from "@/services/actions/userRegister";
import { USER_ROLE } from "@/constants/role";
import { registerValidationSchema } from "@/constants/schema";
import { useState } from "react";

const RegisterPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = {
      ...values,
      role: USER_ROLE.USER,
    };

    try {
      setLoading(true);
      const res = await userRegister(data);
      // console.log("res = ", res);

      if (res?.data?.id) {
        toast.success("User registered successfully!");
        const result = await userLogin({
          password: values.password,
          identifier: values.email || values.username,
        });
        // if (result?.data?.accessToken) {
        //   storeUserInfo({ accessToken: result?.data?.accessToken });
        //   router.push("/dashboard");
        // }
      }
      setLoading(false);
    } catch (err: any) {
      console.error(err.message);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
            background: "#EBF0F4",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            spacing={2}
          >
            <Typography
              variant="h3"
              fontWeight={600}
              style={{ color: "#0B1134CC", marginTop: "20px" }}
            >
              Register
            </Typography>
            <Typography
              component="p"
              fontWeight={400}
              style={{ color: "#0B1134CC" }}
            >
              Already have an account?{" "}
              <Link
                href="/login"
                style={{
                  color: "#00026E",
                  textDecoration: "underline",
                  fontWeight: "500",
                }}
              >
                Login
              </Link>
            </Typography>
          </Stack>

          <Box m={5}>
            <PHForm
              onSubmit={handleRegister}
              resolver={zodResolver(registerValidationSchema)}
              defaultValues={{
                username: "",
                email: "",
                password: "",
              }}
            >
              <Stack spacing={3} my={1}>
                <Box
                  fontWeight={400}
                  style={{ color: "#0B1134CC", textAlign: "start" }}
                >
                  <Typography style={{ marginBottom: "10px" }}>
                    Username*
                  </Typography>
                  <PHInput
                    name="username"
                    label="Username"
                    type="text"
                    fullWidth={true}
                  />
                </Box>
                <Box
                  fontWeight={400}
                  style={{ color: "#0B1134CC", textAlign: "start" }}
                >
                  <Typography style={{ marginBottom: "10px" }}>
                    Email*
                  </Typography>
                  <PHInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Box>
                <Box
                  fontWeight={400}
                  style={{ color: "#0B1134CC", textAlign: "start" }}
                >
                  <Typography style={{ marginBottom: "10px" }}>
                    Password*
                  </Typography>
                  <PHInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Box>
              </Stack>

              <Link href={"/"}>
                <Typography
                  mb={1}
                  textAlign="start"
                  component="p"
                  fontWeight={300}
                  sx={{
                    textDecoration: "underline",
                  }}
                >
                  By hitting the Register button, you agree to the Terms
                  conditions & Privacy Policy
                </Typography>
              </Link>

              {/* <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button> */}

<Button type='submit' fullWidth sx={{ mt: 2 }} disabled={loading}>
							{loading ? (
								<>
									<svg
										className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
									>
										<circle
											className='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											strokeWidth='4'
										></circle>
										<path
											className='opacity-75'
											fill='currentColor'
											d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
										></path>
									</svg>
									<span className='ml-2'>Signing Up</span>
								</>
							) : (
								'Sign Up'
							)}
						</Button>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
