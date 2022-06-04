import logo from '../logo.svg';
import '../App.css';

const HomePage = () => {
  
  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(getProducts());
  });
  
  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
    // return (
    //     <div style={{backgroundColor: 'gray'}}>
    //         <p>
    //           Página Teste .
    //         </p>
          
    //     </div>
    //   )
}

export default HomePage