import React, { useRef, useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { Footer, Slide } from "../../components/Index";
import styles from "./OnboardingStyles";
import { SIZES } from "../../constants/theme";

const slides = [
  {
    id: '1',
    image: require('../../../assets/images/bg2.jpg'),
    title: 'Find Your Bliss, Find Your Home',
    description: 'Escape the hustle and bustle of the city with our serene suburban gems. The perfect place to find tranquility.'
  },
  {
    id: '2',
    image: require('../../../assets/images/bg5.jpg'),
    title: 'Luxury Living, Every Day',
    description: 'Indulge in the epitome of urban luxury with our exquisite, high-rise apartments. Enjoy urban living at its finest.'
  },
  {
    id: '3',
    image: require('../../../assets/images/bg6.jpg'),
    title: 'Where Every Room Tells a Story',
    description: 'Step back in time with our beautifully restored historic homes. Own a piece of history with all the modern comforts.'
  }
]


const Onboarding = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const ref = useRef(null);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width)
    setCurrentSlideIndex(currentIndex)
  }

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length ) {
      const offset = nextSlideIndex * SIZES.width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex)
    }
  }

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * SIZES.width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex) 
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        contentContainerStyle={styles.flatlist}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer 
        navigation={navigation}
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        goNextSlide={goNextSlide}
        skip={skip}
      />
    </SafeAreaView>
  )
}

export default Onboarding;