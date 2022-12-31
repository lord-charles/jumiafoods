import React from 'react';
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS, constants, SIZES, icons, FONTS} from '../../constants';
import {TwoPointsSlider, TextButton, TextIconButton,TextTags} from '../../components';

const FilterModal = ({isVisible, onClose}) => {
  const [deriveryTime, setDeriveryTime] = React.useState(3);
  const [ratings, setRatings] = React.useState(5);
  const [tags, setTags] = React.useState(3);

  const [showFilterModal, setShowFilterModal] = React.useState(isVisible);
  //animation
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680],
  });

  const Section = ({containerStyle, title, children}) => {
    return (
      <View
        style={{
          marginTop: 8,
          ...containerStyle,
        }}>
        <Text className="font-bold text-[18px] text-red-500">{title}</Text>
        {children}
      </View>
    );
  };
  function renderDistance() {
    return (
      <View className="ml-1">
        <Section title="Distance">
          <View className="mx-auto">
            <TwoPointsSlider
              values={[3, 10]}
              min={1}
              max={20}
              postfix="km"
              onValuesChange={values => console.log(values)}
            />
          </View>
        </Section>
      </View>
    );
  }
  function renderDeriveryTime() {
    return (
      <View className="mx-auto mt-8">
        <Section title="Derivery Time">
          <View className="flex-row mt-2 ">
            {constants.delivery_time.map((item, index) => {
              return (
                <TextButton
                  key={`derivery_time-${index}`}
                  label={item.label}
                  labelStyle={{
                    color: item.id == deriveryTime ? COLORS.white : COLORS.gray,
                    ...FONTS.body3,
                  }}
                  buttonContainerStyle={{
                    width: '22%',
                    height: 50,
                    margin: 5,
                    alignItems: 'center',
                    borderRadius: SIZES.base,
                    backgroundColor:
                      item.id == deriveryTime
                        ? COLORS.primary
                        : COLORS.lightGray2,
                  }}
                  onPress={() => setDeriveryTime(item.id)}
                />
              );
            })}
          </View>
        </Section>
      </View>
    );
  }
  function renderPricingRange() {
    return (
      <View className="ml-1 mt-5">
        <Section title="Price Range">
          <View className="mx-auto mt-1">
            <TwoPointsSlider
              values={[200, 999]}
              min={1}
              max={2000}
              postfix="Ksh"
              onValuesChange={values => console.log(values)}
            />
          </View>
        </Section>
      </View>
    );
  }
  function renderRatings() {
    return (
      <View className="mt-7">
        <Section title="Ratings">
          <View className="flex-row mt-3">
            {constants.ratings.map((item, index) => {
              return (
                <TextIconButton
                  key={`Ratings-${index}`}
                  containerStyle={{
                    backgroundColor:
                      item.id == ratings ? COLORS.primary : COLORS.lightGray2,
                  }}
                  label={item.label}
                  labelStyle={{
                    color: item.id == ratings ? COLORS.white : COLORS.black,
                  }}
                  icon={icons.star}
                  iconStyle={{
                    tintColor: item.id == ratings ? COLORS.white : COLORS.lightOrange3,
                  }}
                  onPress={() => setRatings(item.id)}
                          />
              );
            })}
          </View>
        </Section>
      </View>
    );
  }
  function renderTags(){
    return(
      <View className="mt-5">
        <Section title="Tags">
          <View className="flex-row flex-wrap ">
            {
              constants.tags.map((item, index) =>{
                return (
                  <TextTags
                    key={`Tags.${index}`}
                    label={item.label}
                    labelStyle={{
                      color: item.id == tags ? COLORS.white : "black",
                      ...FONTS.body3,
                    }}
                    containerStyle={{
                      backgroundColor:
                        item.id == tags ? COLORS.primary : COLORS.lightOrange3,
                    }}
                    onPress={() => setTags(item.id)}
                  />
                );
              })
            }
          </View>
        </Section>
      </View>
    )
  }
  return (
    <Modal transparent={true} visible={isVisible} animationType="fade">
      <View
        className="bg-slate-200 flex-1"
        style={{backgroundColor: COLORS.transparentBlack7}}>
        {/* transparent background */}
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View className="absolute top-0 left-0 right-0 bottom-0 " />
        </TouchableWithoutFeedback>
        {/* animated pushup */}
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: '100%',
            height: '100%',
            padding: 8,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
            backgroundColor: 'white',
          }}>
          {/* header */}
          <View className="flex-row justify-between mx-2">
            <Text className="font-bold text-[20px] text-black">
              Filter Your Search
            </Text>
            <TouchableOpacity onPress={() => setShowFilterModal(false)}>
              <Image
                source={icons.cross}
                className="h-[30px] w-[30px] bg-gray-200 rounded-lg"
                style={{tintColor: 'red'}}
              />
            </TouchableOpacity>
          </View>
          {/* body */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 250,
            }}>
            {/* Distance */}
            {renderDistance()}
            {/* Derivery time */}
            {renderDeriveryTime()}
            {/* render pricing range  */}
            {renderPricingRange()}
            {/* render rating  */}
            {renderRatings()}
            {/* render tags  */}
            {renderTags()}
          </ScrollView>
          {/* apply filters button  */}
          <TouchableOpacity className="absolute bottom-[165px] right-2 left-2 h-[50px] bg-orange-500 rounded-lg items-center justify-center"
          onPress={()=>console.log("filteres applied")}
          >
            <Text className="text-white text-[20px] font-bold">Apply Filters</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
