import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';
import styles from '../../styles/Footer.module.css'

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={10}
            h={10}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blue.400', 'blue.300')
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© 2021 Devtech </Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'https://twitter.com'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'Linkedin'} href={'https://linkedin.com'}>
                        <FaLinkedin />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://instagram.com'}>
                        <FaInstagram />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://github.com'}>
                        <FaGithub />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}
