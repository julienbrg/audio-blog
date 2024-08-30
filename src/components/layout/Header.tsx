import React from 'react'
import { Flex, useColorModeValue, Spacer, Heading, Box, Link, Icon, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { LinkComponent } from './LinkComponent'
import { ThemeSwitcher } from './ThemeSwitcher'
import { SITE_NAME } from '../../utils/config'
import { FaGithub } from 'react-icons/fa'
import { HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image'

interface Props {
  className?: string
}

export function Header(props: Props) {
  const className = props.className ?? ''

  return (
    <Flex as="header" className={className} bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={5} mb={8} alignItems="center">
      <LinkComponent href="/">
        <Heading as="h1" size="md">
          {SITE_NAME}
        </Heading>
      </LinkComponent>

      <Spacer />

      <Flex alignItems="center" gap={4}>
        <Menu>
          <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="ghost" size="sm" />
          <MenuList>
            <LinkComponent href="/">
              <MenuItem fontSize="md">Home</MenuItem>
            </LinkComponent>
          </MenuList>
        </Menu>
        <IconButton
          as={Link}
          href="https://github.com/julienbrg/audio-blog"
          aria-label="GitHub"
          icon={<FaGithub />}
          variant="ghost"
          size="sm"
          color="white"
          _hover={{ color: 'white', bg: 'transparent' }}
          isExternal
        />
        <Box mb={1} ml={2}>
          <ThemeSwitcher />
        </Box>
      </Flex>
    </Flex>
  )
}
