import { StyleSheet, Pressable, Text } from 'react-native';

export default function CustomButton({ type, title, disabled, onPress }) {
  return (
    <Pressable
      style={[
        type === 'validate' ? styles.buttonValidate : styles.buttonLogin,
        { opacity: disabled ? 0.3 : 1 },
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
}

CustomButton.defaultProps = {
  type: 'validate',
  disabled: false,
  onClick: () => {},
};

const styles = StyleSheet.create({
  buttonValidate: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#35AF43',
    width: 200,
    height: 50,
    borderRadius: 10,
  },

  buttonLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7B34',
    width: 200,
    height: 50,
    borderRadius: 10,
  },

  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
