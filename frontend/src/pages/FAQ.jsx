import { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is Solar Data Viewer?',
      answer:
        'Solar Data Viewer is a platform that provides real-time insights into solar energy generation. It allows users to monitor and analyze solar power data from their solar plants.',
    },
    {
      question: 'How do I sign up?',
      answer:
        "You can sign up by clicking on the 'Sign Up' button on the homepage or by navigating to the Sign Up page through the navigation menu.",
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, your data is stored securely with encryption and access controls to ensure your information is protected.',
    },
    {
      question: 'Can I view data from multiple solar plants?',
      answer:
        'Yes, Solar Data Viewer allows you to monitor data from multiple solar plants within a single account.',
    },
    {
      question: 'How frequently is the data updated?',
      answer:
        "The data is updated in real-time, providing you with the latest information on your solar plant's energy generation.",
    },
    {
      question: 'Can I download my data?',
      answer:
        'Yes, you can download your solar energy generation data in CSV format for further analysis or record-keeping.',
    },
    {
      question: 'Is there a mobile app?',
      answer:
        'Currently, Solar Data Viewer is a web-based platform. A mobile app is under development and will be available soon.',
    },
    {
      question: 'What if I forget my password?',
      answer:
        "If you forget your password, you can click on the 'Forgot Password' link on the Sign In page to reset your password.",
    },
    {
      question: 'How do I contact customer support?',
      answer:
        'You can contact our customer support team through the Contact page. We’re here to assist you with any questions or issues.',
    },
    {
      question: 'Are there any subscription plans?',
      answer:
        'Solar Data Viewer offers both free and premium subscription plans. Premium plans provide additional features such as advanced analytics and reporting.',
    },
    {
      question: 'Can I integrate Solar Data Viewer with other software?',
      answer:
        'Yes, Solar Data Viewer offers API access for integration with other software platforms. Contact us for more details.',
    },
    {
      question: 'Is training available for new users?',
      answer:
        'Yes, we provide training resources and tutorials to help new users get started with Solar Data Viewer.',
    },
    {
      question: 'How do I update my account information?',
      answer:
        'You can update your account information by visiting the Profile page after signing in.',
    },
    {
      question: 'What is the refund policy?',
      answer:
        'We offer a 30-day money-back guarantee for all premium subscriptions. If you’re not satisfied, contact us for a full refund.',
    },
    {
      question: 'Can I share my data with others?',
      answer:
        "Yes, you can share your solar energy data with other users by providing them with access through the platform's sharing options.",
    },
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
