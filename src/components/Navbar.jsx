import { Heading,Flex,Text,Spacer,Button } from "@chakra-ui/react"


export default function Navbar() {
  return (
    <div className="nav bg-primary">
      <Flex className="text-white" gap="gap" as="nav">
              <Heading>Afrik</Heading> 
              <Spacer/>
              <Text>Home</Text>
              <Text>Blog</Text>
              <Text>FAQ</Text>
              <Text>Help</Text>
              <div className="Btn " >
                  <Button className="bg-blue">Login</Button>
                  <Button className="bg-primary">Sign up</Button>
              </div>    
      </Flex>  
    </div>
  )
}


