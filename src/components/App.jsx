import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  //State для каждого элемента
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  //const options = ['good', 'neutral', 'bad'];

  //State - объект элементов
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  //Метод для сбора feedback по нажатию кнопки
  const handleFeedback = evt => {
    const { name } = evt.target;

    //Когда в стэйте объект элементов
    setOptions({ ...options, [name]: options[name] + 1 });

    //Когда в стэйте каждый элемент отдельно
    // switch (name) {
    //   case 'good':
    //     setGood(prevGood => prevGood + 1);
    //     break;
    //   case 'neutral':
    //     setNeutral(prevNeutral => prevNeutral + 1);
    //     break;
    //   case 'bad':
    //     setBad(prevBad => prevBad + 1);
    //     break;

    //   default:
    //     break;
    // }
  };

  // Подсчет суммы feedback
  const countTotalFeedback = () => {
    //Когда объект элементов в стэйте
    return Object.values(options).reduce((total, item) => total + item, 0);

    //Когда в стэйте каждый элемент отдельно
    //good + neutral + bad;
  };

  //Определяет % positive feedback
  const countPositiveFeedbackPercentage = () => {
    return Math.round((options.good / countTotalFeedback()) * 100); //ключ good с объекта options
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
