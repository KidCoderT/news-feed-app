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

const FakeData = [
  {
    source: {
      id: 'abc-news-au',
      name: 'ABC News (AU)'
    },
    author: 'ABC News',
    title:
      "Judge deemed Musk's Tesla tweet 'false and misleading', claim investors",
    description:
      'A 2018 tweet posted by Elon Musk in which he claimed to have secured the funding to take Tesla private has been deemed "false and misleading" by a judge, according to documents filed by investors suing his electric car company.',
    url: 'https://www.abc.net.au/news/2022-04-17/judge-deemed-elon-musk-tesla-tweet-false-and-misleading-claims/100996212',
    urlToImage:
      'https://live-production.wcms.abc-cdn.net.au/fb97b8e4b6cb22a79bf7a5b2fe8e1186?impolicy=wcms_crop_resize&cropH=1689&cropW=3000&xPos=0&yPos=68&width=862&height=485',
    publishedAt: '2022-04-17T07:24:44Z',
    content:
      'A 2018 tweet posted by Elon Musk in which he claimed to have secured the funding to take Tesla private was deemed "false and misleading" by a judge, according to documents filed by investors suing hi… [+2026 chars]'
  },
  {
    source: {
      id: null,
      name: 'Carandbike.com'
    },
    author: 'Reuters',
    title: "Ark's Wood Remains Bullish On Tesla As U.S. Recession Fears Rise",
    description:
      "Star stock picker Cathie Wood of Ark Invest remained bullish on top holding Tesla Inc. despite growing fears of a U.S. recession and shutdowns of the car maker's Shanghai factory due to spiking coronavirus cases.",
    url: 'https://www.carandbike.com/news/arks-wood-remains-bullish-on-tesla-as-u-s-recession-fears-rise-2894864',
    urlToImage:
      'https://c.ndtvimg.com/2022-04/ifmth9kk_tesla_625x300_03_April_22.jpg',
    publishedAt: '2022-04-17T07:12:18Z',
    content:
      "Star stock picker Cathie Wood of Ark Invest remained bullish on top holding Tesla Inc on Tuesday despite growing fears of a U.S. recession and shutdowns of the car maker's Shanghai factory due to spi… [+1496 chars]"
  },
  {
    source: {
      id: null,
      name: 'CNA'
    },
    author: null,
    title: 'Shanghai targets lockdown turning point by Wednesday: Sources',
    description:
      'SHANGHAI: Shanghai has set a target to stop the spread of COVID-19 outside of quarantined areas by Wednesday (Apr 20), two people familiar with the matter said, which would allow the city to further ease its lockdown and start returning to normal life as publ…',
    url: 'https://www.channelnewsasia.com/asia/shanghai-targets-lockdown-turning-point-wednesday-sources-2630236',
    urlToImage:
      'https://onecms-res.cloudinary.com/image/upload/s--4oCjxhQz--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2022-04-17t041353z_1_lynxnpei3g01n_rtroptp_3_health-coronavirus-shanghai-lockdown.jpg?itok=wgY_72f-',
    publishedAt: '2022-04-17T07:01:00Z',
    content:
      'TURNING POINT\r\n"The State Council Working Group, the municipal party committee and municipal government have asked that the turning point of the epidemic should appear on the 17th and that zero-COVID… [+2928 chars]'
  }
]

function App() {
  const filters = [
    'All',
    'International',
    'National',
    'State',
    'Business',
    'Sport'
  ]

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

        {/* .Panel */}
        <Flex
          paddingRight={8}
          paddingLeft={8}
          align="center"
          justify="spacebetween"
          fontFamily={'Fredoka One'}
          marginTop={3}
        >
          <Text>last fetched: 5hourse ago</Text>
          <Spacer />
          <Box maxW={80} fontFamily={'Fredoka One'}>
            <Select icon={<FaFilter />}>
              <Icon as={FaFilter} marginRight={1} />
              {filters.map((item, idx) => (
                <option key={idx}>{item}</option>
              ))}
            </Select>
          </Box>
        </Flex>
      </Container>

      {/* Data */}
      <Container maxW="container.lg" paddingTop={4}>
        <SimpleGrid minChildWidth={400} spacing={10}>
          {FakeData.map((data, idx) => (
            <FeedItem
              key={idx}
              title={data.title}
              author={data.source.name}
              date={data.publishedAt}
              description={data.description}
              link={data.url}
              tag={'international'}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default App
