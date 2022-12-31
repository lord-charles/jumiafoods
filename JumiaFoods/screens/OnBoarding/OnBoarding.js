import React from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {COLORS, constants, images, SIZES} from '../../constants';

const OnBoarding = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current; // for dot animation
  const FlatListRef = React.useRef(0);
  // now we need to keep track of which page we are in so that we can render (LETS GET STARTED) button
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const onViewChangeRef = React.useRef(({viewableItems, changed}) => {
    setCurrentIndex(viewableItems[0].index);
  });
  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View className="items-center flex-row  justify-center gap-x-3 relative top-[-100px]">
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: 'clamp',
          });
          //for dot animation

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 16, 10],
            extrapolate: 'clamp',
          });
          const dotHeight = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 16, 10],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              className="rounded-full"
              style={{
                backgroundColor: dotColor,
                width: dotWidth,
                height: dotHeight,
              }}
            />
          );
        })}
      </View>
    );
  };
  function renderHeaderlogo() {
    return (
      <View className="items-center">
        <Image
          source={images.logo_02}
          resizeMode="contain"
          className="h-[100px] w-[200px] absolute top-2"
        />
      </View>
    );
  }
  function renderFooter() {
    return (
      <View>
        {/* pagination dots */}
        <View>
          <Dots />
        </View>
        {/* skip & Next button  */}
        {currentIndex < constants.onboarding_screens.length - 1 ? (
          <View className="justify-between flex-row mx-5 mt-[-50px] items-center relative top-[-10px]">
            <TouchableOpacity>
              <Text
                className="p-2 bg-orange-300 rounded-lg text-black font-bold"
                onPress={() => navigation.replace('SignIn')}>
                skip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                let index = Math.ceil(Number(scrollX._value / 600));
                if (index < constants.onboarding_screens.length - 1) {
                  //scroll to the next page
                  FlatListRef?.current?.scrollToIndex({
                    index: index + 1,
                    Animated: true,
                  });
                } else {
                  navigation.replace('SignIn');
                }
              }}>
              <Text className="p-2 text-lg w-[100px] text-center bg-orange-500 rounded-lg font-extrabold text-black">
                Next
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="mx-5 mt-[-50px] items-center relative top-[-14px]">
            <TouchableOpacity onPress={()=>navigation.replace('SignIn')}>
              <Text className="text-black font-extrabold text-[25px] bg-orange-400 py-3 px-[91px] rounded-lg">
                Let's Get Started
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* renderHeaderlogo */}
      {renderHeaderlogo()}
      <Animated.FlatList
        ref={FlatListRef} //useful when clecking next to move to next slide
        horizontal
        pagingEnabled //displays each image on its own page
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center" // snapss on a page
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )} // for dot animation
        onViewableItemsChanged={onViewChangeRef.current} //helps me which page am on
        renderItem={({item, index}) => {
          return (
            <View>
              <View className="flex-3 h-[70vh]">
                <ImageBackground
                  source={item.backgroundImage}
                  className="flex-1 h-[100%] w-[100%] items-center justify-end">
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: SIZES.width * 0.8,
                      height: SIZES.height * 0.8,
                      marginBottom: -112,
                    }}
                  />
                </ImageBackground>
              </View>

              {/* DETAILS */}
              <View className="items-center  w-screen mx-1 mt-3">
                <Text className="font-extrabold text-[23px] text-black">
                  {item.title}
                </Text>
                <Text className="font-bold text-[15px] text-black mt-2">
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {/* renderFooter */}
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
