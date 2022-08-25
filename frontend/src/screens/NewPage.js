import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Button} from 'native-base';
// import LinearGradient from 'react-native-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';

const NewPage = () => {
  const intervalRef = useRef();
  const counterRef = useRef();
  const scrollRef = useRef();

  const [counter, setCounter] = useState(1);
  const [name, setName] = useState('');
  const [name1, setName1] = useState('');

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({x: 0, y: 200, animated: true});
    }
  }, []);

  useEffect(() => {
    setName('I am harpreet');
    counterRef.current = 1;

    intervalRef.current = setInterval(() => {
      // setTimeout(() => {
      //   setName('I');
      // }, 1000);
      // setTimeout(() => {
      //   setName('I am');
      // }, 4000);
      counterRef.current = counterRef.current + 1;
      setCounter(counterRef.current);
    }, 800);

    () => {
      cancelTasks();
    };
  }, []);
  useEffect(() => {
    setInterval(() => {
      setTimeout(() => {
        setName1('I');
      }, 1000);
      setTimeout(() => {
        setName1('I am');
      }, 4000);
      setTimeout(() => {
        setName1('I am raman');
      }, 6000);
    }, 8000);
  }, []);

  const cancelTasks = () => {
    if (intervalRef) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <View>
      <LinearGradient
        colors={['#4c669f', 'grey', '#192f6a']}
        style={{
          height: '80%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 30, lineHeight: 32}}>
          {name} {counter}
        </Text>
        <Button style={styles.button} onPress={cancelTasks}>
          {' '}
          clear
        </Button>
        <Text style={{fontSize: 30, lineHeight: 32, marginTop: 20}}>
          {name1}
        </Text>
      </LinearGradient>

      <ScrollView
        ref={scrollRef}
        style={{backgroundColor: 'white', height: 100}}>
        <Text>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). Where does it
          come from? Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in section 1.10.32.
        </Text>
      </ScrollView>
    </View>
  );
};
export default NewPage;
const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});
