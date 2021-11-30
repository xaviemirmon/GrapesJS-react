import React from "react";

import { Card, Image, Box, Heading, Text, Flex, Badge } from "theme-ui";

export const CardVertical = ({ image=`https://via.placeholder.com/600x400.png?text=Placeholder+Image` }) => (
  <Card
    sx={{
      borderRadius: "3",
      boxShadow: "0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.1)",
      maxWidth: `25em`
    }}
  >
    <Image
      src={ image }
      sx={{ borderTopLeftRadius: "3", borderTopRightRadius: "3" }}
    />
    <Box sx={{ p: "3" }}>
      <Heading as="h2" mb={2}>
        The Beach Front
      </Heading>
      <Text mb={3}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </Text>
      <Flex>
        <Badge mr={1}>summer</Badge>
        <Badge mr={1}>photography</Badge>
        <Badge mr={1}>travel</Badge>
      </Flex>
    </Box>
  </Card>
);

export const CardHorizontal = () => (
  <Card
    sx={{
      borderRadius: "3",
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      border: "1px solid",
      borderColor: "border",
      boxShadow: "0 8px 16px -4px rgba(0,0,0,.1)",
    }}
  >
    <Image
      src={beach}
      sx={{
        height: "100%",
        objectFit: "cover",
        borderTopLeftRadius: "3",
        borderBottomLeftRadius: "3",
      }}
    />
    <Box sx={{ p: "3" }}>
      <Heading as="h2" mb={2}>
        The Beach Front
      </Heading>
      <Text mb={3}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </Text>
      <Flex>
        <Badge mr={1}>summer</Badge>
        <Badge mr={1}>photography</Badge>
        <Badge mr={1}>travel</Badge>
      </Flex>
    </Box>
  </Card>
);
