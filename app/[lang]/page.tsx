import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '@/components/Welcome/Welcome';

export default function HomePage() {
  return (
    <Container mih="calc(100vh - 328px)" mx="auto">
      <ColorSchemeToggle />
      <Welcome />
    </Container>
  );
}
