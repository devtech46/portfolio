import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon, ChevronDownIcon, } from "@chakra-ui/icons";
import Link from "next/link";
import Image from 'next/image'
import Logo from '../../../assets/Logo.svg'
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Links = [
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "Contact",
    path: "/contact/",
  },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">
            <a className="brand">
              <Image src={Logo} alt="Loading" width={100} height={80} />
            </a>
          </Link>

          

          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
              <Flex alignItems={"center"}>
                <Menu>
                  <MenuButton as={Button} variant={"outline"} colorScheme={"purple"} size={"sm"} rightIcon={<ChevronDownIcon />}>
                    Menu
                  </MenuButton>
                  <MenuList>
                    <MenuItem><a target="_blank" rel="noopener noreferrer nofollow"
                      href="https://magnolia-app.herokuapp.com">
                      Django</a></MenuItem>
                    <MenuItem ><a target="_blank" rel="noopener noreferrer nofollow"
                      href="https://devtech46.github.io/app">React</a></MenuItem>
                    <MenuDivider />
                  </MenuList>
                </Menu>
              </Flex>
            </HStack>
            <ColorModeSwitcher ml={1}/>
          </HStack>
          {/* Mobile */}
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="outline"
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}

              <Flex alignItems={"center"}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"sm"}
                    variant={"link"}
                    cursor={"pointer"}
                  >
                  <MenuButton 
                    as={Button} variant={"outline"} 
                    colorScheme={"blue"} size={"sm"} 
                    rightIcon={<ChevronDownIcon />}>
                    Menu
                  </MenuButton>
                  </MenuButton>
                  <MenuList>
                    <MenuItem><a target="_blank" rel="noopener noreferrer nofollow"
                      href="https://magnolia-app.herokuapp.com">Django</a></MenuItem>
                    <MenuItem><a target="_blank" rel="noopener noreferrer nofollow"
                      href="https://devtech46.github.io/app">React</a></MenuItem>
                    <MenuDivider />
                  </MenuList>
                </Menu>
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
