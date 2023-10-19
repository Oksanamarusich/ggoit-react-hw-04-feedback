import { useState} from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions ";
import { Statistics } from "./Statistics/Statistics";
import {Layout} from '../components/Layout'

export const App = ()=> {
   const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

const leaveFeedback = option => {
    if (option === 'good') {
        return (setGood(good + 1));
    } else if (option === 'neutral') {
        return (setNeutral(neutral + 1));
    } else if (option === 'bad') {
        return (setBad(bad + 1));
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };
    
const countPositiveFeedbackPercentage =Math.round((good*100)/countTotalFeedback());
     
    return <Layout>
            <Section title="Please leave feedback">
                <FeedbackOptions
                       options={Object.keys({good, neutral,bad})}
                onLeaveFeedback={leaveFeedback} />
    
            </Section>
            <Section title = "Statistics">
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage} /> 
                </Section>
            
    
        </Layout>
            
       

}
    


    

     
    
        
                
    



 










