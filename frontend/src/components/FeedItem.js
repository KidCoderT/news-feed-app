import {
  Flex,
  Spacer,
  Text,
  Link,
  Tag,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Divider from './Divider'
import PropTypes from 'prop-types'

const FeedItem = ({ title, imgUrl, link, tag }) => {
  const bgColor = useColorModeValue('light.400', 'dark.400')
  const tagColor = useColorModeValue('light.600', 'dark.900')
  const borderColor = useColorModeValue('light.600', 'dark.600')
  return (
    <Flex
      bg={bgColor}
      borderRadius="xl"
      borderWidth={5}
      borderColor={borderColor}
      direction="column"
    >
      <Image src={imgUrl} fallbackSrc="https://via.placeholder.com/500" />
      <Spacer />
      <Divider
        height={1}
        colorOnDark={'whiteAlpha.800'}
        colorOnLight={'blackAlpha.800'}
      />
      <Flex minH="140px" maxH="200px" p={4} direction="column">
        <Text fontFamily={'Fredoka One'} fontSize="2xl">
          {title}
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
    </Flex>
  )
}

FeedItem.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  link: PropTypes.string,
  tag: PropTypes.string
}

export default FeedItem
