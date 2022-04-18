import React from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  Icon,
  Select,
  SimpleGrid
} from '@chakra-ui/react'
import ThemeToggleButton from './components/ThemeToggleButton'
import { FaFilter } from 'react-icons/fa'
import Divider from './components/Divider'
import FeedItem from './components/FeedItem'

function App() {
  let [feeds, setFeeds] = React.useState([])

  React.useEffect(() => {
    getFeeds()
  }, [])

  let getFeeds = async () => {
    let response = await fetch('http://localhost:8000/')
    let data = await response.json()
    console.log(data)
    setFeeds(data)
  }

  return (
    <Box minH="100vh" as="main" marginBottom={50}>
      <Container maxW="container.lg" paddingTop={8}>
        {/* Header */}
        <Flex paddingRight={8} paddingLeft={8} align="center">
          <Heading fontFamily={'Fredericka the Great'} fontSize={96}>
            News Feed
          </Heading>
          <Spacer />
          <ThemeToggleButton />
        </Flex>

        <Divider
          height={1}
          colorOnDark={'whiteAlpha.800'}
          colorOnLight={'blackAlpha.800'}
        />
      </Container>

      {/* Data */}
      <Container maxW="container.lg" paddingTop={4}>
        <SimpleGrid minChildWidth={400} spacing={10}>
          {feeds.map((data, idx) => (
            <FeedItem
              key={idx}
              title={data['title']}
              imgUrl={data['img_url']}
              link={data['url']}
              tag={data['tag']}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default App
