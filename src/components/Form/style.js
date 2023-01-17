import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    paddingTop: 10,
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },

  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },

  formInput: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },

  textButtom: {
    fontSize: 20,
    color: "#ffffff",
  },

  buttom: {
    backgroundColor: "#ff0043",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingVertical: 12,
    marginLeft: 12,
    marginTop: 40, 
    marginBottom: 20, 
  },

  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },

  showListButton: {
    backgroundColor: '#cccccc80',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    width: 100,
    marginHorizontal: 3
  },

  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textB: {
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
  }
});

export default styles;
