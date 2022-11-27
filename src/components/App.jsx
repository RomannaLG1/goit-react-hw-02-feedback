import React, { Component } from 'react';
import Box from './Box';
import { FeedbackForm } from './FeedbackForm';
import { FeedbackOptions } from './FeedbackOptions';
import { FeedbackStatistics } from './FeedbackStatistics';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackIncrement = event => {
    const { name } = event.currentTarget;

    this.setState(prevState => ({
     
        [name]: prevState[name] + 1,
        
      
    }));
    
  };

  countTotalFeedback = () => {
     return Object.values(this.state).reduce((acc, stat) => acc + stat, 0);
  };

  countPositiveFeedbackPercentage = total => {
    return (!total ? 0 : ((this.state.good / total) * 100).toFixed(1)) + ' %';
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    return (
      <Box ml={"auto"} mr={"auto"} as="main" p={5}>
        <FeedbackForm title="Please, leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onFeedbackIncrement={this.feedbackIncrement}
          />
        </FeedbackForm>

        <FeedbackForm title="Statistics">
          {
          total > 0 ? (
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </FeedbackForm>
      </Box>
    );
  }
}
