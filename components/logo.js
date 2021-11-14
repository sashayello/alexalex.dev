import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 1.125rem;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    img {
        transform: rotate(-20deg);
        transition: .2s ease-in-out
    }
    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const printImage = `/images/keyboard${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={printImage} width={20} height={20} alt="logo" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily="IBM Plex Sans"
                        fontWeight="bold"
                        ml={3}>
                        AlexAlexDev
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo