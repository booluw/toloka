import { Heading, Flex, Text, Spacer, Button, Box, HStack, IconButton } from "@chakra-ui/react"
import { APP_NAME } from "$/utils/constants.ts"

// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'


export default function Navbar() {
  return (
      <Box sx={{ height: "100vh" }}  className="nav bg-[url('src/assets/bgimg.gif')]">
           {/* <IconButton aria-label="Open Menu" size={lg} mr={2} icon={<HamburgerIcon />}  */}
             {/* display={['flex','flex','none','none']} */}
           {/* /> */}
      
      <Flex className="text-white" alignItems="center" gap="30px" as="nav" p={5}  >
              <Heading ml={5}>{APP_NAME}</Heading> 
              <Spacer />
              <HStack gap={30} display={['none', 'none', 'flex', 'flex']} >
                  <Text _hover={{ color: "brand.600" }}>Home</Text>
                  <Text _hover={{ color: "brand.600" }}>Blog</Text>
                  <Text _hover={{ color: "brand.600" }}>FAQ</Text>
                  <Text _hover={{ color: "brand.600" }}>Help</Text>

              <Box className="Btn" >
                  <Button className="" _hover={{ color: "brand.600", bg:"white"}}  mr={5} color='white' bg='brand.600'>Login</Button>
                      <Button className="" _hover={{ color: "brand.600", bg:"white"}} mr={5} color='white' bg='brand.600'>Sign up</Button>
                </Box>  
             </HStack>    
      </Flex> 

      <Heading>Get paid to do short tasks online</Heading>
    </Box>
  )
}


