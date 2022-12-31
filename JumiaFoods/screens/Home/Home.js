import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {COLORS, icons, dummyData} from '../../constants/index';
import {HorizontalFoodCard, VerticalFoodCard} from '../../components';
import {FilterModal} from '../index';
const Home = ({navigation}) => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [selectedMenuType, setSelectedMenuType] = React.useState(1);
  const [menuList, setMenuList] = React.useState([]);
  const [recommends, setRecommends] = React.useState([]);
  const [popular, setpopular] = React.useState([]);
  const [showFilterModal, setShowFilterModal] = React.useState(false);
  React.useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  // handler
  function handleChangeCategory(categoryId, menuTypeId) {
    //retrieve popular menu
    let selectedPopular = dummyData.menu.find(a => a.name == 'Popular');
    //retrieve the recommended menu
    let selectedRecommend = dummyData.menu.find(a => a.name == 'Recommended');

    //find the menubased on the menuid
    let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId);
    //set popular menu based on the categoryid
    setpopular(
      selectedPopular?.list.filter(a => a.categories.includes(categoryId)),
    );
    //set recommended based on the menuid
    setRecommends(
      selectedRecommend?.list.filter(a => a.categories.includes(categoryId)),
    );
    //set menu based on categoryid
    setMenuList(
      selectedMenu?.list.filter(a => a.categories.includes(categoryId)),
    );
  }

  function renderMenuTypes() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        className="p-2 mt-3 "
        renderItem={({item, index}) => (
          <TouchableOpacity
            className="ml-3 bg-orange-400 rounded-lg px-[8px] mt-4"
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}>
            <Text
              className="font-bold text-lg text-red-700 "
              style={{color: selectedMenuType == item.id ? 'red' : 'black'}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
  function renderRecommendedSection() {
    return (
      <View>
        <View className="flex-row justify-between mx-3 mt-5">
          <Text className="font-bold text-[20px] text-gray-700">
            Recommended
          </Text>
          <TouchableOpacity>
            <Text className="font-bold text-[20px] text-orange-500">
              Show All
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={recommends}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View className="bg-gray-200 p-3 mt-1 rounded-lg ml-2 relative left-0 h-[130px] w-[390px]">
              <HorizontalFoodCard
                item={item}
                icons={icons}
                onPress={() => navigation.navigate('FoodDetail', item)}
              />
            </View>
          )}
        />
      </View>
    );
  }
  function renderPopularSection() {
    return (
      <View>
        <View className="flex-row justify-between mx-3 mt-5">
          <Text className="text-gray-700 font-bold text-[18px]">
            Popular Near You
          </Text>
          <TouchableOpacity>
            <Text className="text-orange-500 font-bold text-[17px]">
              Show All
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={popular}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View className="w-[188px] h-[230px] bg-gray-200 rounded-lg ml-3 mt-1 ">
              <VerticalFoodCard
                item={item}
                icons={icons}
                onPress={() => navigation.navigate('FoodDetail', item)}
              />
            </View>
          )}
        />
      </View>
    );
  }
  function renderFoodCategory() {
    return (
      <View>
        <FlatList
          data={dummyData.categories}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              className="flex-row bg-gray-200 mt-3 ml-1 rounded-lg px-2 w-[180px]"
              style={{
                backgroundColor:
                  selectedCategoryId == item.id
                    ? 'orange'
                    : COLORS.lightOrange3,
              }}
              onPress={() => {
                setSelectedCategoryId(item.id);
                handleChangeCategory(item.id, selectedMenuType);
              }}>
              <Image source={item.icon} className="h-[60px] w-[60px]" />
              <Text className="relative top-4 left-5 font-bold text-[15px] text-black">
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  function renderDeriveryTo() {
    return (
      <View className="ml-2 mt-7">
        <Text className=" font-bold text-orange-500">DELIVERY TO</Text>
        <TouchableOpacity className="flex-row gap-1">
          <Text className="text-black font-bold">
            {dummyData?.myProfile.address}
          </Text>
          <Image source={icons.down_arrow} className="w-[20px] h-[20px]" />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View>
      {/* searchbar */}
      <View className="w-[90%] h-[40px] bg-gray-200 rounded-lg mt-5 mx-auto justify-between flex-row">
        <View className="flex-row ">
          <Image
            source={icons.search}
            className="w-[25px] h-[25px] mt-2 ml-2"
          />
          <TextInput
            placeholder="Search food..."
            className="ml-3 w-[70%] text-black"
          />
        </View>
        <TouchableOpacity onPress={() => setShowFilterModal(true)}>
          <Image
            source={icons.filter}
            className="w-[25px] h-[25px] mr-2 mt-2"
          />
        </TouchableOpacity>
      </View>
      {/* filltermodal */}
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}

      {/* list */}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Derivery to */}
            {renderDeriveryTo()}
            {/* food category  */}
            {renderFoodCategory()}
            {/* Popular */}
            {renderPopularSection()}
            {/* Recommended */}
            {renderRecommendedSection()}
            {/* menuitems */}
            {renderMenuTypes()}
          </View>
        }
        renderItem={({item}) => {
          return (
            <View className="bg-gray-200 mt-1 rounded-lg mx-3">
              <HorizontalFoodCard
                item={item}
                icons={icons}
                onPress={() => navigation.navigate('FoodDetail', item)}
              />
            </View>
          );
        }}
        ListFooterComponent={<View className="h-[330px]" />}
      />
    </View>
  );
};

export default Home;
