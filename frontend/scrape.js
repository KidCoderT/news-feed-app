const axios = require('axios')
const cheerio = require('cheerio')

const base_url = 'https://timesofindia.indiatimes.com/'

function getMore(url) {
  axios(url).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    $('.pu1zi', html).each(function () {
      let title = $(this).find('h1').text()
      let span = $(this).find('p').find('span').text()
      console.log(span)
      console.log()
    })
  })
}

axios(base_url).then(response => {
  const html = response.data
  const $ = cheerio.load(html)
  $('.col_l_6', html).each(function () {
    let href = $(this).find('a').attr('href')
    if (href !== undefined) {
      console.log(href)
      getMore(href)
    }
  })
})
