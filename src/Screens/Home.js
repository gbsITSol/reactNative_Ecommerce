// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React, { useState } from 'react';

// import Main from '../Bottom/Main';
// import Search from '../Bottom/Search';
// import Cart from '../Bottom/Cart';
// import Wishlist from '../Bottom/WishList';
// import Profile from '../Bottom/Profile';

// const Home = () => {

//   const [selectedTab, setSelectedTab] = useState(0);

//   return (
//     <View style={{flex : 1 }}>
//     {selectedTab === 0 ? <Main /> : selectedTab === 1 ? <Search /> : selectedTab === 2 ? <Cart /> : selectedTab === 3 ? <Wishlist /> : <Profile />}
//     <View style={styles.bottomContainer}>
//       <TouchableOpacity style={styles.iconContainer} onPress={() => { setSelectedTab(0) }}>
//         <Image source={require("../images/home.png")} style={styles.icon} />
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconContainer} onPress={() => { setSelectedTab(1) }}>
//         <Image source={require("../images/search-interface-symbol.png")} style={styles.icon} />
//       </TouchableOpacity>

//       <View style={styles.centerIconContainer}>
//         <TouchableOpacity onPress={() => { setSelectedTab(2) }}>
//           <Image source={require("../images/shopping-cart.png")} style={styles.centerIcon} />
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.iconContainer} onPress={() => { setSelectedTab(3) }}>
//         <Image source={require("../images/heart.png")} style={styles.icon} />
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconContainer} onPress={() => { setSelectedTab(4) }}>
//         <Image source={require("../images/user.png")} style={styles.icon} />
//       </TouchableOpacity>
//     </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   bottomContainer: {
//     width: '100%',
//     height: 70,
//     backgroundColor: '#ede9e8',
//     position: 'absolute',
//     bottom: 0,
//     flexDirection: 'row',
//     justifyContent: 'space-around', // Adjust as needed
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//   },
//   iconContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   centerIconContainer: {
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//     borderRadius: 25,
//     marginTop: 10,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//   },
//   centerIcon: {
//     width: 30,
//     height: 30,
//     tintColor: 'white', // Adjust icon color as needed
//   },
// });

// export default Home;










import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import Main from '../Bottom/Main';
import Search from '../Bottom/Search';
import Cart from '../Bottom/Cart';
import Wishlist from '../Bottom/WishList';
import Profile from '../Bottom/Profile';
// import { wishlistReducer } from '../Redux/Reducer2';









const Home = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);



  const cartItems = useSelector(state => state);
  const wishlistItems = useSelector(state => state);


 





  return (
    <View style={{ flex: 1 }}>
      {selectedTab === 0 ? <Main /> : selectedTab === 1 ? <Search /> : selectedTab === 2 ? <Cart /> : selectedTab === 3 ? <Wishlist /> : <Profile />}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => setSelectedTab(0)}>
          <Image source={require("../images/home.png")} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => setSelectedTab(1)}>
          <Image source={require("../images/search-interface-symbol.png")} style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.centerIconContainer}>
          <TouchableOpacity onPress={() => setSelectedTab(2)}>
          <Image source={require("../images/shopping-cart.png")} style={styles.centerIcon} />
          <Text style={styles.countBadge}>{cartItems.reducers.length}</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.iconContainer} onPress={() => setSelectedTab(3)}>
        <View>
          <Image source={require("../images/heart.png")} style={styles.icon} />
          <Text style={styles.countBadge}>{wishlistItems.wishlistReducer.length}</Text>
        </View>
      </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => setSelectedTab(4)}>
          <Image source={require("../images/user.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    width: '100%',
    height: 70,
    backgroundColor: '#ede9e8',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around', // Adjust as needed
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Added position relative for count badge positioning
  },
  centerIconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 25,
    marginTop: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  centerIcon: {
    width: 20,
    height: 30,
    tintColor: 'white', // Adjust icon color as needed
  },
  countBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    color: 'white',
    // borderRadius: 30,
    paddingHorizontal: 3,
    paddingVertical: 2,
    fontSize: 12,
  },
  countBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 12,
  },
});

export default Home;
