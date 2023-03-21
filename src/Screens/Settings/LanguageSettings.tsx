import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {useTranslation} from 'react-i18next';


const {width} = Dimensions.get('window');

interface Props {
  modelVisibility: boolean;
  setModelVisibility: (isVisible: boolean) => void;
  selectedLanguage: string | undefined;
  onLanguageSelection: (value: string) => void;
}

const languages = [
  {label: 'English', value: 'en', isSelected: true},
  {label: 'Hindi', value: 'hi', isSelected: false},
];

export const LanguageModal: React.FC<Props> = (props: Props) => {
  const {i18n} = useTranslation();
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const onLanguageSelection = (index: number) => {
    let selectedLanguage = languages[index];
    setSelectedLang(selectedLanguage);
    i18n.changeLanguage(selectedLanguage.value);
    props.onLanguageSelection(selectedLanguage.label);
  };

  React.useEffect(() => {
    if (props.selectedLanguage === 'hi') {
      setSelectedLang(languages[1]);
    } else {
      setSelectedLang(languages[0]);
    }
  }, [props.selectedLanguage]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modelVisibility}
      onRequestClose={() => {
        props.setModelVisibility(!props.modelVisibility);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Select Language</Text>
          <View style={{width: '100%'}}>
            <FlatList
              data={languages}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.languageItem,
                      {
                        borderColor:
                          item.label === selectedLang.label
                          ? 'blue'
                          : 'black',
                      },
                    ]}
                    onPress={() => {
                      props.setModelVisibility(false);
                      onLanguageSelection(index);
                    }}>
                    {/* {item.label === selectedLang.label ? (
                      <Image style={[styles.icon, {tintColor: 'blue'}]} />
                    ) : (
                      <Image style={styles.icon} />
                    )} */}

                    <Text
                      style={{
                        marginLeft: 20,
                        fontSize: 18,
                        color:
                          item.label === selectedLang.label
                            ? 'blue'
                            : 'black',
                      }}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    width: width - 20,
    // height: height / 2,

    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  languageItem: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  btn1: {
    width: '40%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    width: '40%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#4B68E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
