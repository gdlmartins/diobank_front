import {
    Box, Input, Center, Text, Button, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react"

export default function Login() {

    return (

        <Box
        boxShadow=" 2px 2px 6px 1px "
            padding="2rem"
            borderRadius="16px" background="#FFF"  
            margin="30px 0"
        >
            <FormControl display="flex"  flexDirection="column" minW="700px" >
                <Center> <Text fontWeight="bold" fontSize="30px">
                    Login</Text></Center>
                    <FormLabel margin="18px 0">Email address</FormLabel>
                    <Input
                    border="1px solid black"
                    padding="16px" 
                    width="full" 
                    placeholder='email' 
                    margin="4px 0" 
                    borderRadius="10px" 
                    />
                      <FormLabel margin="18px 0">Password</FormLabel>
                <Input
                    border="1px solid black"
                    padding="16px" 
                    width="full" 
                    placeholder='password' 
                    margin="4px 0" 
                    borderRadius="10px" 
                    />
                <Button
                    margin="10px 0"
                    borderRadius="8px"
                    padding="10px"
                    alignSelf="flex-end"
                    width="30%"
                    bg="#CCC" variant="solid"
                    type="submit"
                >Login</Button>
            </FormControl>
        </Box>

    )
}