import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import Modal from "../../components/Modal";
import Signup from "./Signup";
import Logo from "../../assets/images/logo.png";

const Login = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // const handleSignUp = () => {
  //   console.log("Sign Up clicked");
  //   handleCloseModal();
  // };
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <Card
        shadow={false}
        className="md:px-24 md:py-14 py-8 border border-gray-300"
      >
        <CardHeader shadow={false} floated={false} className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="!text-3xl lg:text-4xl"
          >
            <img
              src={Logo}
              alt="Brothers Logo"
              className="mx-auto size-28 text-center"
            />
          </Typography>
          <Typography className="!text-gray-600 text-[18px] font-bold md:max-w-sm">
            Please enter your credentials to login!
          </Typography>
        </CardHeader>
        <CardBody>
          <form action="#" className="flex flex-col gap-4 md:mt-8">
            <div>
              <label htmlFor="email">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Your Email
                </Typography>
              </label>

              <Input
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="name.father'sname@brothersitplc.com"
                className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
              />
              <label htmlFor="password">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium my-2"
                >
                  Your Password
                </Typography>
              </label>
              <Input
                id="password"
                color="gray"
                size="lg"
                type="password"
                name="password"
                className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
              />
            </div>
            <Button size="lg" className="bg-primary1">
              sign in
            </Button>
            {/* <Button
              onClick={() => handleOpenModal("xxl")}
              variant="outlined"
              size="lg"
              className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
              fullWidth
            >
              create a new account{" "}
            </Button> */}

            <Typography
              variant="small"
              className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600"
            >
              Upon signing in, you consent to abide by our{" "}
              <a href="#" className="text-gray-900">
                Terms of Service
              </a>{" "}
              &{" "}
              <a href="#" className="text-gray-900">
                Privacy Policy.
              </a>
            </Typography>
          </form>
        </CardBody>
      </Card>{" "}
      {/* Modal for Sign Up */}
      {/* <Modal
        open={openModal}
        onClose={handleCloseModal}
        title="Create a New Account"
        confirmText="Sign Up"
        onConfirm={() => console.log("Sign Up Confirmed")}
      >
        {/* Render Signup Component as modal body */}
      {/* <Signup /> */}
      {/* </Modal> */}
    </div>
  );
};
export default Login;
