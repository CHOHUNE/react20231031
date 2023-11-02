import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"gold"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted green"}>
        Accusamus, voluptates.
      </Box>
      <Box bg={"red"} borderBottom={"7px double yellow"}>
        Odit, omnis.
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.500"}>
        Quod, sapiente?
      </Box>
      <Box borderY={"10px dotted"} borderColor={"gray.700"}>
        Libero, quis?
      </Box>
      <Box border={"5px solid blue"} borderRadius={"30px"}>
        Consectetur, incidunt!
      </Box>
      <Box border={"5px solid black"} borderRadius={50}>
        Ea, pariatur.
      </Box>
      <Box border={"5px solid black "} borderTopRadius={50}>
        Neque, perferendis.
      </Box>
      <Box border={"5px solid black"} borderBottomRadius={50}>
        Dolore, minima.
      </Box>
      <Box border={"5px solid black"} borderRightRadius={50}>
        Fuga, quam.
      </Box>
      <Box shadow={"10px 5px 5px red"}>Corporis, laudantium.</Box>
      <Box shadow={"xl "}>Aspernatur, minus.</Box>
      <Box shadow={"md"}>Earum, fugit.</Box>
      <Box bg={"blue.300"} mt={10}>
        Incidunt, reiciendis.
      </Box>
      <Box bg={"yellow.700"} mx={10}>
        Maxime, tenetur.
      </Box>
      <Box bg={"facebook.800"} m={10}>
        Laudantium, praesentium?
      </Box>
      <Box bg={"red.400"} p={10}>
        Lorem ipsum.
      </Box>
      <Box bg={"whatsapp.700"} px={10}>
        Lorem ipsum.
      </Box>
      <Box bg={"gray.700"} pt={10}>
        Lorem ipsum.
      </Box>
      <Box bg={"whiteAlpha.700"} pl={10}>
        Lorem ipsum.
      </Box>
      <Box bg={"violet.600"} pr={10}>
        Lorem ipsum.
      </Box>
    </>
  );
}

export default App;
