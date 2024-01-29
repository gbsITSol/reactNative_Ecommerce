// import React from 'react';
// import { View, ScrollView, Image, StyleSheet, TouchableOpacity , Text} from 'react-native';
// import productData from '../Products';
// import ItemCard from './ItemCard'; 
// import { addToCart , addToWishlist} from '../Redux/actions'
// import { useDispatch } from 'react-redux';
// import WishList from './WishList';



// const Main = () => {
//   const dispatch = useDispatch()

//   const handleAddToCart = (item) => {
//     dispatch(addToCart(item)); // Dispatch the addToCart action with the selected item
//     console.log('Item added to cart:', item.name);
    
//   };



//   const handleAddToWishlist = (item) => {
//     dispatch(addToWishlist(item));
//     console.log('Item added to wishlist:', item.name);
   
//   };

  



//   return (
//     <ScrollView>
//       <Image source={require('../images/banner.jpeg')} style={styles.bannerImage} />

      
//       <View style={styles.categoryButtonsContainer}>
//         {productData.map((item, index) => (
//           <TouchableOpacity key={index} style={styles.categoryButton}>
//             <Text style={styles.categoryButtonText}>{item.category}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Product Categories */}
//       {productData.map((item, index) => (
//         <View key={index} style={styles.categoryContainer}>
//           <Text style={styles.categoryTitle}>{item.category}</Text>

//           <ScrollView horizontal>

//             {item.data.map((item, itemIndex) => (
//               <ItemCard key={itemIndex} item={item}   handleAddToCart={() => handleAddToCart(item)}  handleAddToWishlist={() => handleAddToWishlist(item)}/>
//             ))}
//           </ScrollView>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

























// const styles = StyleSheet.create({
//   bannerImage: {
//     width: '100%',
//     height: 200,
//   },
//   categoryButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 10,
//   },
//   categoryButton: {
//     padding: 10,
//     backgroundColor: '#3498db',
//     borderRadius: 5,
//   },
//   categoryButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   categoryContainer: {
//     marginTop: 20,
//   },
//   categoryTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
// });

// export default Main;















// ///////////////////////////////
// /////////////
// /////////
import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import productData from '../Products';
import ItemCard from './ItemCard';
import { addToCart, addToWishlist } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlistReducer);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log('Item added to cart:', item.name);
  };

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
    console.log('Item added to wishlist:', item.name);
  };

  return (
    <ScrollView>
   
   
           <Image source={require('../images/banner.jpeg')} style={styles.bannerImage} />
      
            
           <View style={styles.categoryButtonsContainer}>
              {productData.map((item, index) => (
                <TouchableOpacity key={index} style={styles.categoryButton}>
                  <Text style={styles.categoryButtonText}>{item.category}</Text>
                </TouchableOpacity>
              ))}
            </View>
   



      {productData.map((category, categoryIndex) => (
        <View key={categoryIndex} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category.category}</Text>
          <ScrollView horizontal>

          
            {category.data.map((item, itemIndex) => (
              <ItemCard
                key={itemIndex}
                item={item}
                handleAddToCart={() => handleAddToCart(item)}
                handleAddToWishlist={() => handleAddToWishlist(item)}
              />
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  bannerImage: {
    width: '100%',
    height: 200,
  },
  categoryButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  categoryButton: {
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  categoryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginTop: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Main;