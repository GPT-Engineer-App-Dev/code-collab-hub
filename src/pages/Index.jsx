import { Box, Button, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FaCode, FaSearch, FaHandshake } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.50">
      {/* Hero */}
      <Box bg="purple.600" color="white" py={24}>
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" mb={4}>
            Find World-Class Software Developers
          </Heading>
          <Text fontSize="xl" mb={8}>
            Particles connects companies with top software development talent <br />
            for any job - large or small. Hire with confidence.
          </Text>
          <Button size="lg" colorScheme="orange">
            View Developer Listings
          </Button>
        </Container>
      </Box>

      {/* Features */}
      <Container maxW="container.lg" py={20}>
        <Heading textAlign="center" mb={16}>
          Why Particles?
        </Heading>
        <Flex gap={12}>
          <Stack align="center" spacing={6}>
            <Box fontSize="4xl" as={FaSearch} color="purple.600" />
            <Heading size="md">Extensive Developer Database</Heading>
            <Text align="center" color="gray.500">
              Search our network of over 250K vetted software experts in 100+ countries.
            </Text>
          </Stack>
          <Stack align="center" spacing={6}>
            <Box fontSize="4xl" as={FaCode} color="purple.600" />
            <Heading size="md">All Development Skills</Heading>
            <Text align="center" color="gray.500">
              From front-end, back-end, mobile, devops and more, find developers for any technology stack.
            </Text>
          </Stack>
          <Stack align="center" spacing={6}>
            <Box fontSize="4xl" as={FaHandshake} color="purple.600" />
            <Heading size="md">Flexible Engagements</Heading>
            <Text align="center" color="gray.500">
              Hire developers for one-time projects or ongoing basis. Cancel anytime.
            </Text>
          </Stack>
        </Flex>
      </Container>

      {/* CTA */}
      <Box bg="purple.600" py={20}>
        <Container maxW="container.lg">
          <Flex align="center" direction="column">
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB3b3JraW5nfGVufDB8fHx8MTcxMzA0ODY0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Software developers" w={400} mb={12} />
            <Heading color="white" size="xl" mb={6}>
              Start Working with Top Developers
            </Heading>
            <Button size="lg" colorScheme="orange">
              View Developer Listings
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
