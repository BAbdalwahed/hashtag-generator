import React from "react";
import PropTypes from "prop-types";

const StatsResults = ({ statsResults }) => {
  if (!statsResults) {
    return (
      <p className="no-stats-results-message">
        Sorry, we couldn&apos;t find anything.
      </p>
    );
  }
  if (!statsResults.tweets) {
    return <p className="no-stats-results-message">loading</p>;
  }
  return (
    <div className="stats-search-results">
      {/* Real-time stats for #{statsResults.tag}
      <ul>
        <li>{statsResults.tweets.toLocaleString()} tweets per hour</li>
        <li>{statsResults.exposure.toLocaleString()} exposure per hour</li>
        <li>{statsResults.retweets.toLocaleString()} retweets per hour</li>
        <li>{Math.round(statsResults.images * 100)}% tweets contain images</li>
        <li>{Math.round(statsResults.links * 100)}% tweets contain links</li>
        <li>
          {Math.round(statsResults.mentions * 100)}% tweets contain mentions
        </li>
      </ul> */}
      {/* <div className="container"> */}
      <div className="Real-time-stats">
        Real-time stats for #{statsResults.tag} per hour
      </div>
      <div className="tweets">Tweets</div>
      <div className="exposure">Exposure</div>
      <div className="reteets">Reteets</div>
      <div className="mentions">Mentions</div>
      <div className="number">{statsResults.tweets.toLocaleString()}</div>
      <div className="number2">{statsResults.exposure.toLocaleString()}</div>
      <div className="number3">{statsResults.retweets.toLocaleString()}</div>
      <div className="number4">{Math.round(statsResults.mentions * 100)}%</div>
    </div>
    // </div>
  );
};

export default StatsResults;

StatsResults.propTypes = {
  statsResults: PropTypes.shape({
    tag: PropTypes.string,
    tweets: PropTypes.number,
    exposure: PropTypes.number,
    retweets: PropTypes.number,
    images: PropTypes.number,
    links: PropTypes.number,
    mentions: PropTypes.number,
    color: PropTypes.number,
    hashtag: PropTypes.string,
  }).isRequired,
};
