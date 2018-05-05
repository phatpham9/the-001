const { getPosts } = require('../utils/scraper');
const celebData = require('../../celebs.json');

const TIME_INTERVAL = 3 * 60 * 1000; // 3 mins
let celebIndexProcessing = 0;

const runScraper = (celeb) => {
  if (!celeb && celebData.length > 0) celeb = celebData[celebIndexProcessing];

  console.info(`processing get posts from ${celeb.name}`);
  getPosts(celeb);
  celebIndexProcessing += 1;
  if (celebIndexProcessing === celebData.length) celebIndexProcessing = 0;
};

const loadScraperCron = () => {
  setInterval(() => {
    const celeb = celebData[celebIndexProcessing];
    runScraper(celeb);
  }, TIME_INTERVAL);
};

module.exports = {
  runScraper,
  loadScraperCron,
};
