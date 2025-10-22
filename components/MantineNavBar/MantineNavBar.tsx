'use client';

import { Group, Text } from '@mantine/core';
import { IconArchive } from '@tabler/icons-react';
import { Navbar } from 'nextra-theme-docs';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import { MantineNextraThemeObserver } from '../MantineNextraThemeObserver/MantineNextraThemeObserver';
import { Logo } from '../Logo/Logo';

/**
 * You can customize the Nextra NavBar component.
 * Don't forget to use the MantineProvider and MantineNextraThemeObserver components.
 *
 * @since 1.0.0
 *
 */
export const MantineNavBar = () => {
  return (
    <>
      <MantineNextraThemeObserver />
      <Navbar
        logo={
          <Group align="center" gap={6}>
            <Logo />
            <Text size="lg" fw={800} c="blue" visibleFrom="xl">
              ECTickets Resource Centre
            </Text>
          </Group>
        }
        projectIcon={<IconArchive />}
        projectLink="https://www.ectickets.com"
      >
          <ColorSchemeControl />
      </Navbar>
    </>
  );
};
