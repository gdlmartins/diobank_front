import { Box, Center, Text, Flex } from '@chakra-ui/react'

export default function Layout({ children }: any) {

    return (
        <>
            <Box
                minH="100vh" bg="#9413dc"
            >
                <Flex display="flex" flexDirection="column" width="100%">
                    <Box display="flex" bg="#BBBBBB" height="8vh" boxShadow=" 0 0 20px 1px ">
                        <Text
                            fontWeight="bold"
                            fontSize="36px"
                            margin="10px auto"
                        >DIO BANK</Text>
                    </Box>
                    <Box margin="0 auto">
                        {children}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}