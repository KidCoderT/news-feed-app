import {
  Box,
  Flex,
  Spacer,
  Text,
  Link,
  Tag,
  useColorModeValue
} from '@chakra-ui/react'
import Divider from './Divider'
import PropTypes from 'prop-types'

const FeedItem = ({ title, author, date, description, link, tag }) => {
  const bgColor = useColorModeValue('light.400', 'dark.400')
  const tagColor = useColorModeValue('light.600', 'dark.900')
  const borderColor = useColorModeValue('light.600', 'dark.600')
  return (
    <Box
      bg={bgColor}
      borderRadius="xl"
      borderWidth={5}
      borderColor={borderColor}
    >
      <Flex minH="340px" p={4} direction="column">
        <Text fontFamily={'Fredoka One'} fontSize="2xl">
          {title}
        </Text>

        <Divider
          height={0.5}
          colorOnDark={'whiteAlpha.800'}
          colorOnLight={'blackAlpha.800'}
        />

        <Text fontFamily={'Fredoka One'} fontSize="xl">
          {' '}
          - {author}
        </Text>
        <Text fontFamily={'Fredoka One'} fontSize="xl">
          {date}
        </Text>
        <Text fontFamily={'Fredoka One'} marginTop={5}>
          {description}
        </Text>

        <Spacer />

        <Flex
          align="center"
          justify="space-between"
          fontFamily={'Fredoka One'}
          marginTop={3}
        >
          <Link href={link}>
            <Text as="u" fontFamily={'Fredericka the Great'}>
              Go To Page
            </Text>
          </Link>
          <Spacer />
          <Tag bg={tagColor}>{tag}</Tag>
        </Flex>
      </Flex>
    </Box>
  )
}

FeedItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  tag: PropTypes.string
}

export default FeedItem
