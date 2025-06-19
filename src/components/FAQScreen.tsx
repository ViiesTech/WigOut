/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AppColors from '../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FAQItem = ({question, answer, isOpen, onPress}: any) => {
  return (
    <View style={styles.faqItem}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.questionContainer,
          isOpen && {
            borderBottomWidth: 1,
            paddingBottom: responsiveHeight(1.5),
            borderBottomColor: AppColors.appBgColor,
          },
        ]}>
        <Text style={styles.question}>{question}</Text>
        <MaterialIcons
          name={isOpen ? 'arrow-drop-up' : 'arrow-drop-down'}
          size={responsiveFontSize(3)}
          color={AppColors.BTNCOLOURS}
        />
      </TouchableOpacity>
      {isOpen && <Text style={styles.answer}>{answer}</Text>}
    </View>
  );
};

const FAQScreen = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What is Eveno?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'How to make a payment?',
      answer:
        'You can contact support via the Help section or email us at support@example.com.',
    },
    {
      question: 'How do I can cancel booking?',
      answer: 'Invoices are available in the Billing section of your account.',
    },
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollView>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onPress={() => toggleFAQ(index)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: responsiveHeight(2),
    backgroundColor: AppColors.WHITE,
    borderRadius: 15,
    padding: responsiveWidth(5),
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  question: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: AppColors.BLACK,
  },
  toggle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  answer: {
    marginTop: 10,
    fontSize: responsiveFontSize(1.8),
    color: AppColors.GRAY,
  },
});

export default FAQScreen;
