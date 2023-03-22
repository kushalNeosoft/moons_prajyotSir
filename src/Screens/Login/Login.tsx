import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import CustomInput from '../../Component/CustomInput/CustomInput';
import {texts} from '../../constants/text';
import alignment from '../../utils/alignment';
import styles from './Loginstyle';
import {colors} from '../../constants/colors';
import TimingModal from '../../Component/TimingModal/TimingModal';
import {regex} from '../../constants/regex';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../Redux/Action';
import Toast from 'react-native-toast-message';

function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('Himanshu');
  const [password, setPassword] = useState('Sunny@1213');
  const [securePassword, setSecurePassword] = useState(true);
  const dispatch = useDispatch();
  const dataredux = useSelector(state => state);
  console.log(dataredux, '--------->');

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
      position: 'bottom',
    });
  };

  const validateAndProceed = async (userName: any, password: any) => {
    if (userName !== '' && regex.password.test(password)) {
      dispatch(login({username: userName}));
      showToast();
    }
  };

  const newUserSignUpView = () => {
    return (
      <View style={styles.newUserSignupContainer}>
        <Text style={{color: 'white'}}>New User?</Text>
        <View style={{...alignment.row_spacebtn}}>
          <View style={{width: 220}}>
            <Text style={{color: colors.white}}>{texts.SIGNUP_INFO}</Text>
          </View>
          <TouchableOpacity style={styles.singUpButton}>
            <Text style={{paddingHorizontal: 40}}>{texts.SIGNUP}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const onClose = () => {
    setModalVisible(prevState => !prevState);
  };

  return (
    <SafeAreaView
      style={modalVisible ? styles.containerBlur : styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.loginTextHeader}>WAVE 2.0</Text>
        <Text style={styles.loginTextHeader}>{texts.LOGIN}</Text>
      </View>

      <View style={styles.inputView}>
        <CustomInput placeholder="Username" onChangeText={setUserName} />
        <CustomInput
            // rightIcon={require('../../assets/password.png')}
          placeholder="Password"
          secureTextEntry={securePassword}
          onChangeText={setPassword}
          onPress={() => setSecurePassword(!securePassword)}
        />
      </View>

      <View style={{paddingBottom: '20%', height: '40%'}}>
        <View style={styles.signUpView}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => validateAndProceed(userName, password)}>
            <Text style={styles.loginText}>{texts.LOGIN}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={null}>
            <Text style={styles.forgotPText}>{`${texts.FORGOT_PASS} ?`}</Text>
          </TouchableOpacity>
        </View>
        <View style={{...alignment.row, marginVertical: 15}}>
          <Text>{texts.NOT_REGISTERED}</Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>{texts.REGISTER}</Text>
          </TouchableOpacity>
        </View>
        {newUserSignUpView()}
      </View>

      <View>
        <Text>{texts.EXCHANGES}</Text>
        <View style={{...alignment.row_spacebtn}}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.forgotPText}>{texts.TIMINGS}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPText}>{texts.ABOUT_US}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPText}>{texts.MEMBERSHIP}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TimingModal visible={modalVisible} onClose={onClose} />
    </SafeAreaView>
  );
}

export default Login;
