'use client';

import { IconArrowRight, IconTicket, IconUsers } from '@tabler/icons-react';
import { Button, Card, Grid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      {/* Hero Section */}
      <Title maw="80vw" mx="auto" mt="lg" className={classes.title} ta="center">
        ECTickets Resource Centre
      </Title>

      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="sm">
        This page is a centralized hub for all resources related to ECTickets, including
        documentation, tutorials, and support materials to help you get the most out of our
        services.
      </Text>

      {/* Navigation Cards */}
      <Grid gutter="md" mt="xl" justify="center">
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <ThemeIcon variant="light" size={40} radius="md" color="blue">
              <IconUsers size={24} />
            </ThemeIcon>
            <Title order={3} mt="md">
              For Attendees
            </Title>
            <Text mt="xs" c="dimmed">
              Learn how to find events, buy tickets, and manage your purchases.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              component="a"
              href="/docs/attendee"
              rightSection={<IconArrowRight size={14} />}
            >
              Explore Attendees Guide
            </Button>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <ThemeIcon variant="light" size={40} radius="md" color="green">
              <IconTicket size={24} />
            </ThemeIcon>
            <Title order={3} mt="md">
              For Organizers
            </Title>
            <Text mt="xs" c="dimmed">
              Discover tools to set up events, sell tickets, and track attendance.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              component="a"
              href="/docs/organizer"
              rightSection={<IconArrowRight size={14} />}
            >
              Explore Organizers Guide
            </Button>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Overview Section */}
      <Text c="dimmed" ta="center" size="lg" maw={700} mx="auto" mt="xl" mb="xl">
        ECTickets is a user-friendly platform for event ticketing, enabling organizers to create and
        manage events effortlessly while allowing attendees to discover, purchase, and manage
        tickets for concerts, sports, festivals, and more.
      </Text>
    </>
  );
}
