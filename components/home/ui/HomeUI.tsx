import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import cover_image from '../../../assets/picture.png'

export default function HomeUI() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            
            
            <Text color={"blue.400"} as={"span"}>
              Web applications
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"blue.500"}>
            Create accessible Next and React apps with speed
          </Text>
          <Wrap>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            {techStackButton("Next.js")}
            {techStackButton("React.js")}
            {techStackButton("Typescript")}
            {techStackButton("MongoDB (soon)")}
            </Stack>
          </Wrap>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={cover_image.src}
        />
      </Flex>
    </Stack>
  );

  function techStackButton(text: string) {
    return <Button rounded={"base"}>{text}</Button>;
  }
}
