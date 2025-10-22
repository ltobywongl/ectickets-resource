'use client';

import { Footer } from 'nextra-theme-docs';
import { Box, useComputedColorScheme } from '@mantine/core';
import { HorizontalLogo } from '../Logo/Logo';

/**
 * You can customize the Nextra Footer component.
 * Don't forget to use the MantineProvider component.
 *
 * @since 1.0.0
 *
 */
export const MantineFooter = () => {
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  return (
    <Box style={{ position: 'relative' }}>
      <Footer className="x:flex-col x:gap-4">
        <HorizontalLogo colorScheme={computedColorScheme} />
        <div className="x:flex x:flex-col x:gap-1 x:justify-between">
          <a href="https://www.ectickets.com/contact">Contact Us</a>
          <a href="https://www.ectickets.com/terms-and-conditions">Terms & Conditions</a>
          <a href="https://www.ectickets.com/privacy-policy">Privacy Policy</a>
        </div>
        <span>© {new Date().getFullYear()} Toby Information Technology. All rights reserved.</span>
      </Footer>
    </Box>
  );
};
