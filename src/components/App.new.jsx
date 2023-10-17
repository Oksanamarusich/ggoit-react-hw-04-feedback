import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions ";
import { Statistics } from "./Statistics/Statistics";


export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
//   const leaveFeedback = option => {
//         this.setState(prevState => {
//             return {
//                 [option]: prevState[option] + 1,
//             };
//         });
//     };

//     state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// }
//     leaveFeedback = option => {
//         this.setState(prevState => {
//             return {
//                 [option]: prevState[option] + 1,
//             };
//         });
//     };

// countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return good + neutral + bad;
//     }  
    
// countPositiveFeedbackPercentage = () => {
//         const { good } = this.state;
//         return Math.round((good*100)/this.countTotalFeedback());
//      }
     
    
        return (<div>
            <Section title="Please leave feedback">
                <FeedbackOptions
                       options={Object.keys(this.state)}
                onLeaveFeedback={leaveFeedback} />
    
            </Section>
            <Section title = "Statistics">
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()} /> 
                </Section>
            
    
        </div>)
        
                
    }

